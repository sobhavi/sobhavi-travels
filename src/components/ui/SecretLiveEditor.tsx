"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './SecretLiveEditor.module.css';

const DEFAULT_PIN = 'sobhavi2026';

// Helper to generate a stable, deterministic key for an element on the page
function getElementKey(el: HTMLElement): string {
  if (el.dataset.editorKey) return el.dataset.editorKey;
  if (el.id) {
    const k = `id:${el.id}`;
    el.dataset.editorKey = k;
    return k;
  }

  const parts: string[] = [];
  let curr: HTMLElement | null = el;
  let depth = 0;

  while (curr && curr !== document.body && depth < 5) {
    const tag = curr.tagName.toLowerCase();
    if (curr.id) {
      parts.unshift(`${tag}#${curr.id}`);
      break;
    }

    const rawClass = curr.className && typeof curr.className === 'string' ? curr.className : '';
    // Strip Next.js CSS Module hashes like '__abc123'
    const firstClass = rawClass.split(' ').map(c => c.split('__')[0]).filter(c => c && !c.startsWith('sobhavi-'))[0] || '';
    const cleanClass = firstClass.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 24);

    let idx = 0;
    let sib = curr.previousElementSibling;
    while (sib) {
      if (sib.tagName === curr.tagName) idx++;
      sib = sib.previousElementSibling;
    }

    parts.unshift(`${tag}${cleanClass ? '.' + cleanClass : ''}:${idx}`);
    curr = curr.parentElement;
    depth++;
  }

  const generated = parts.join('>');
  el.dataset.editorKey = generated;
  return generated;
}

// Check if element is a valid editable text candidate
function isEditableTextTarget(el: HTMLElement): boolean {
  if (['SCRIPT', 'STYLE', 'SVG', 'PATH', 'INPUT', 'TEXTAREA', 'BUTTON', 'NOSCRIPT'].includes(el.tagName)) return false;
  if (el.closest(`.${styles.floatingToolbar}`) || el.closest(`.${styles.modalBackdrop}`) || el.closest(`.${styles.triggerBtn}`)) return false;
  
  // Don't edit standalone checkmarks or decorative icons
  const text = (el.textContent || '').trim();
  if (text === '✓' || text === '✦' || text === '💬' || text === '🚀' || text === '✏️') return false;

  // Primary heading and paragraph tags
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'LABEL', 'STRONG', 'B', 'EM'].includes(el.tagName)) return true;

  // Leaf text elements (e.g. inclusions <span>, badges, subtitles, prices, list items)
  if (el.children.length === 0 && text.length > 0) return true;

  // Spans with direct text
  if (el.tagName === 'SPAN' && text.length > 0) return true;

  // Destination / Category card specific items
  if (el.dataset.editable === 'true') return true;

  return false;
}

export default function SecretLiveEditor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isEditing, setIsEditing] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const initialContentsRef = useRef<Record<string, string>>({});
  const loadedOverridesRef = useRef<Record<string, Record<string, string>>>({});
  const elementMapRef = useRef<Map<string, HTMLElement>>(new Map());

  const scanAndApply = useCallback(() => {
    const currentPath = pathname?.toLowerCase() || '/';
    const pathOverrides = loadedOverridesRef.current[currentPath] || {};

    const candidates = document.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6, p, label, strong, em, b, span, li, [data-editable="true"], .editable-text');
    elementMapRef.current.clear();

    candidates.forEach(el => {
      if (!isEditableTextTarget(el)) return;
      const key = getElementKey(el);
      elementMapRef.current.set(key, el);

      if (pathOverrides[key] && !el.isContentEditable && el.innerHTML !== pathOverrides[key]) {
        el.innerHTML = pathOverrides[key];
      }
    });
  }, [pathname]);

  const fetchAndApplyOverrides = useCallback(async () => {
    try {
      // 1. Instant local cache load
      const local = localStorage.getItem('sobhavi_content_overrides');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          loadedOverridesRef.current = parsed;
          scanAndApply();
        } catch {}
      }

      // 2. Fresh server API load
      const res = await fetch('/api/content-overrides', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.overrides) {
          loadedOverridesRef.current = data.overrides;
          try {
            localStorage.setItem('sobhavi_content_overrides', JSON.stringify(data.overrides));
          } catch {}
          scanAndApply();
        }
      }
    } catch (err) {
      console.warn('Could not load content overrides:', err);
    }
  }, [scanAndApply]);

  useEffect(() => {
    // Run once on path change using requestAnimationFrame for zero-lag silky smooth render
    const frameId = requestAnimationFrame(() => {
      fetchAndApplyOverrides();
    });

    const handleStorage = () => fetchAndApplyOverrides();
    window.addEventListener('sobhavi_content_overrides_updated', handleStorage);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('sobhavi_content_overrides_updated', handleStorage);
    };
  }, [pathname, fetchAndApplyOverrides]);

  // Secret Activation: Listen for Ctrl+Shift+E / Cmd+Shift+E or ?edit=sobhavi
  useEffect(() => {
    if (searchParams?.get('edit') === 'sobhavi') {
      const isAuth = sessionStorage.getItem('sobhavi_editor_auth') === 'true';
      if (isAuth) {
        setIsEditing(true);
      } else {
        setShowPinModal(true);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut: Ctrl + Shift + E (Windows/Linux) or Cmd + Shift + E (Mac)
      const isEKey = e.key === 'E' || e.key === 'e' || e.code === 'KeyE';
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && isEKey) {
        e.preventDefault();
        const isAuth = sessionStorage.getItem('sobhavi_editor_auth') === 'true';
        if (isAuth) {
          setIsEditing(prev => !prev);
        } else {
          setShowPinModal(true);
        }
      }

      // Save shortcut inside edit mode: Ctrl + S or Cmd + S
      const isSKey = e.key === 's' || e.key === 'S' || e.code === 'KeyS';
      if (isEditing && (e.ctrlKey || e.metaKey) && isSKey) {
        e.preventDefault();
        handleSave();
      }

      // Escape key to close modal
      if (e.key === 'Escape') {
        if (showPinModal) setShowPinModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing, searchParams]);

  // Enable or Disable Inline ContentEditable on Page Elements
  useEffect(() => {
    const styleId = 'sobhavi-editor-styles';
    let styleTag = document.getElementById(styleId);

    if (isEditing) {
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        styleTag.innerHTML = `
          [data-sobhavi-editable="true"] {
            cursor: text !important;
            transition: outline 0.15s ease, box-shadow 0.15s ease !important;
          }
          [data-sobhavi-editable="true"]:hover {
            outline: 1.5px dashed rgba(212, 175, 55, 0.8) !important;
            outline-offset: 2px !important;
          }
          [data-sobhavi-editable="true"]:focus {
            outline: 2px solid #d4af37 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 14px rgba(212, 175, 55, 0.45) !important;
          }
          [data-sobhavi-modified="true"] {
            outline: 2px solid #22c55e !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(styleTag);
      }

      // Re-scan to ensure all elements are indexed
      scanAndApply();

      elementMapRef.current.forEach((el, key) => {
        el.setAttribute('contenteditable', 'true');
        el.setAttribute('data-sobhavi-editable', 'true');
        el.setAttribute('spellcheck', 'false');

        if (!initialContentsRef.current[key]) {
          initialContentsRef.current[key] = el.innerHTML;
        }

        const handleInput = () => {
          const currentHtml = el.innerHTML;
          if (currentHtml !== initialContentsRef.current[key]) {
            el.setAttribute('data-sobhavi-modified', 'true');
            setPendingChanges(prev => ({ ...prev, [key]: currentHtml }));
          } else {
            el.removeAttribute('data-sobhavi-modified');
            setPendingChanges(prev => {
              const updated = { ...prev };
              delete updated[key];
              return updated;
            });
          }
        };

        el.oninput = handleInput;
      });

      // Prevent link clicks while editing so users can edit link/button text without navigating away
      const handlePreventNav = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (target && (target.getAttribute('contenteditable') === 'true' || target.closest('[contenteditable="true"]'))) {
          const link = target.closest('a');
          if (link) {
            e.preventDefault();
          }
        }
      };

      document.addEventListener('click', handlePreventNav, true);
      showToast("✏️ Edit Mode Active! Click any text, card, or inclusion to edit.");

      return () => {
        document.removeEventListener('click', handlePreventNav, true);
      };
    } else {
      // Clean up styles and contenteditable
      if (styleTag) styleTag.remove();
      const editableElements = document.querySelectorAll<HTMLElement>('[data-sobhavi-editable="true"]');
      editableElements.forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeAttribute('data-sobhavi-editable');
        el.removeAttribute('data-sobhavi-modified');
        el.oninput = null;
      });
      setPendingChanges({});
    }

    return () => {
      if (styleTag) styleTag.remove();
    };
  }, [isEditing, scanAndApply]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin.trim() === DEFAULT_PIN) {
      sessionStorage.setItem('sobhavi_editor_auth', 'true');
      setShowPinModal(false);
      setPinError(false);
      setEnteredPin('');
      setIsEditing(true);
    } else {
      setPinError(true);
    }
  };

  const handleSave = async () => {
    if (Object.keys(pendingChanges).length === 0) {
      showToast("No changes to save.");
      return;
    }

    setIsSaving(true);
    const currentPath = pathname?.toLowerCase() || '/';

    try {
      const res = await fetch('/api/content-overrides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pin: DEFAULT_PIN,
          routePath: currentPath,
          updates: pendingChanges
        })
      });

      if (res.ok) {
        const updated = {
          ...loadedOverridesRef.current,
          [currentPath]: {
            ...(loadedOverridesRef.current[currentPath] || {}),
            ...pendingChanges
          }
        };
        loadedOverridesRef.current = updated;
        localStorage.setItem('sobhavi_content_overrides', JSON.stringify(updated));

        Object.entries(pendingChanges).forEach(([k, v]) => {
          initialContentsRef.current[k] = v;
        });

        document.querySelectorAll('[data-sobhavi-modified="true"]').forEach(el => {
          el.removeAttribute('data-sobhavi-modified');
        });

        const count = Object.keys(pendingChanges).length;
        setPendingChanges({});
        window.dispatchEvent(new Event('sobhavi_content_overrides_updated'));
        showToast(`✅ Saved ${count} text update${count > 1 ? 's' : ''} live to website!`);
      } else {
        alert("Failed to save changes. Please try again.");
      }
    } catch (err) {
      console.error('Save error:', err);
      alert("Network error while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRevert = () => {
    if (confirm("Discard unsaved changes on this page?")) {
      Object.keys(pendingChanges).forEach(key => {
        const el = elementMapRef.current.get(key) || document.querySelector<HTMLElement>(`[data-editor-key="${CSS.escape(key)}"]`);
        if (el && initialContentsRef.current[key]) {
          el.innerHTML = initialContentsRef.current[key];
          el.removeAttribute('data-sobhavi-modified');
        }
      });
      setPendingChanges({});
      showToast("Unsaved changes discarded.");
    }
  };

  const pendingCount = Object.keys(pendingChanges).length;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Secret PIN Modal */}
      {showPinModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowPinModal(false)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalIcon}>🔐</div>
            <h3 className={styles.modalTitle}>Live Edit Mode</h3>
            <p className={styles.modalDesc}>
              Enter admin passkey to edit text directly on this website.
            </p>

            <form onSubmit={handleUnlock}>
              <input
                type="password"
                placeholder="••••••••"
                value={enteredPin}
                onChange={e => {
                  setEnteredPin(e.target.value);
                  setPinError(false);
                }}
                className={styles.pinInput}
                autoFocus
              />

              {pinError && (
                <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: '12px' }}>
                  Incorrect PIN. Please try again.
                </div>
              )}

              <div className={styles.modalActions}>
                <button type="submit" className={styles.unlockBtn}>
                  Unlock Editor
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowPinModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}



      {/* Floating Toolbar (Only visible when Edit Mode is active) */}
      {isEditing && (
        <div className={styles.floatingToolbar}>
          <div className={styles.modeBadge}>
            <span className={styles.pulseDot} />
            <span>Edit Mode</span>
          </div>

          <span className={styles.changesCount}>
            {pendingCount > 0 ? `${pendingCount} edited` : 'Click text to edit'}
          </span>

          <button
            type="button"
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={pendingCount === 0 || isSaving}
          >
            {isSaving ? "Saving..." : "💾 Save Live"}
          </button>

          {pendingCount > 0 && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={handleRevert}
              title="Discard unsaved changes"
            >
              Revert
            </button>
          )}

          <button
            type="button"
            className={styles.exitBtn}
            onClick={() => setIsEditing(false)}
            title="Exit Edit Mode"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
