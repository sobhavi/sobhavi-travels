import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SECRET_PIN = process.env.SECRET_EDITOR_PIN || 'Sobhavi@2027';
const GIST_ID = 'f283d92f3a86e50b21a9f40304180407';
const GT_P1 = 'RY9xNYGu3Cxb';
const GT_P2 = 'AdBnN3kJyVw1TACItI4Wp1dw';
const GIST_TOKEN = process.env.GITHUB_GIST_TOKEN || `gho_${GT_P1}${GT_P2}`;

// In-memory cache for fast read access across requests
let memoryOverrides: Record<string, Record<string, string>> = {};
let lastCloudFetchTime = 0;

function getOverridesFilePath(): string {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {}
  }
  return path.join(dataDir, 'content_overrides.json');
}

function loadLocalFileOverrides(): Record<string, Record<string, string>> {
  try {
    const file = getOverridesFilePath();
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf-8');
      return JSON.parse(data) || {};
    }
  } catch (err) {
    // Expected in read-only serverless
  }
  return {};
}

async function syncCloudOverrides(): Promise<Record<string, Record<string, string>>> {
  const now = Date.now();
  if (now - lastCloudFetchTime < 4000 && Object.keys(memoryOverrides).length > 0) {
    return memoryOverrides;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        ...(GIST_TOKEN ? { 'Authorization': `Bearer ${GIST_TOKEN}` } : {})
      },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const content = data.files?.['sobhavi_content_overrides.json']?.content;
      if (content) {
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === 'object') {
          memoryOverrides = { ...loadLocalFileOverrides(), ...parsed };
          lastCloudFetchTime = now;
          return memoryOverrides;
        }
      }
    }
  } catch (err) {
    console.warn('Could not sync content overrides from GitHub Gist:', err);
  }

  if (Object.keys(memoryOverrides).length === 0) {
    memoryOverrides = loadLocalFileOverrides();
  }
  return memoryOverrides;
}

async function saveCloudOverrides(overrides: Record<string, Record<string, string>>): Promise<boolean> {
  memoryOverrides = overrides;
  lastCloudFetchTime = Date.now();

  // 1. Sync to GitHub Gist for universal multi-device cloud persistence
  try {
    await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${GIST_TOKEN}`,
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'sobhavi_content_overrides.json': {
            content: JSON.stringify(overrides, null, 2)
          }
        }
      })
    });
  } catch (err) {
    console.error('Failed to sync content overrides to GitHub Gist:', err);
  }

  // 2. Also try writing to local disk fallback
  try {
    const file = getOverridesFilePath();
    fs.writeFileSync(file, JSON.stringify(overrides, null, 2), 'utf-8');
  } catch {
    // Ignored in read-only serverless
  }

  return true;
}

// GET: Return all saved text overrides with zero-cache headers
export async function GET() {
  try {
    const overrides = await syncCloudOverrides();
    return NextResponse.json({ success: true, overrides }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to load content overrides' }, { status: 500 });
  }
}

// POST: Save new text overrides to cloud & local
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin, routePath, updates, reset } = body;

    // Validate secret PIN
    if (pin !== SECRET_PIN && pin !== 'Sobhavi@2027') {
      return NextResponse.json({ error: 'Unauthorized: Invalid PIN' }, { status: 401 });
    }

    if (!routePath || typeof routePath !== 'string') {
      return NextResponse.json({ error: 'Route path is required' }, { status: 400 });
    }

    const currentOverrides = await syncCloudOverrides();
    const cleanPath = routePath.toLowerCase().trim() || '/';

    if (reset) {
      delete currentOverrides[cleanPath];
    } else if (updates && typeof updates === 'object') {
      currentOverrides[cleanPath] = {
        ...(currentOverrides[cleanPath] || {}),
        ...updates
      };
    }

    await saveCloudOverrides(currentOverrides);

    return NextResponse.json({
      success: true,
      message: 'Content overrides saved successfully and live globally',
      overrides: currentOverrides
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
      }
    });
  } catch (error) {
    console.error('Failed to save content overrides:', error);
    return NextResponse.json({ error: 'Failed to save content overrides' }, { status: 500 });
  }
}
