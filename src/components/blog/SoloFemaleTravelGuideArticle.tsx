"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldAlert, 
  MapPin, 
  Compass, 
  Hotel, 
  DollarSign, 
  Backpack, 
  AlertTriangle, 
  PhoneCall, 
  Sparkles,
  Heart,
  Coffee,
  Users,
  Car,
  Plane,
  Train,
  CheckSquare
} from 'lucide-react';
import styles from './SoloFemaleTravelGuideArticle.module.css';

export default function SoloFemaleTravelGuideArticle() {
  const waUrl = `https://wa.me/917406994752?text=${encodeURIComponent("Hello Sobhavi Travels! I read your Solo Female Travel Guide and would love advice on planning my first solo trip.")}`;

  return (
    <div className={styles.articleContainer}>

      {/* QUICK TABLE OF CONTENTS PILL NAV */}
      <nav className={styles.tocNav} aria-label="Table of Contents">
        <span className={styles.tocLabel}>Jump to Chapter:</span>
        <div className={styles.tocList}>
          <a href="#ch1" className={styles.tocPill}>1. First Trip</a>
          <a href="#ch2" className={styles.tocPill}>2. Beyond Instagram</a>
          <a href="#ch3" className={styles.tocPill}>3. Accommodation</a>
          <a href="#ch4" className={styles.tocPill}>4. Safety</a>
          <a href="#ch5" className={styles.tocPill}>5. Transport</a>
          <a href="#ch6" className={styles.tocPill}>6. Dining Alone</a>
          <a href="#ch7" className={styles.tocPill}>7. Making Friends</a>
          <a href="#ch8" className={styles.tocPill}>8. Loneliness</a>
          <a href="#ch9" className={styles.tocPill}>9. Budget</a>
          <a href="#ch10" className={styles.tocPill}>10. Packing</a>
          <a href="#ch11" className={styles.tocPill}>11. If Things Go Wrong</a>
          <a href="#ch12" className={styles.tocPill}>12. The Checklist</a>
        </div>
      </nav>

      {/* INTRODUCTORY ESSAY */}
      <section className={styles.leadSection}>
        <p className={styles.dropcapParagraph}>
          Let&apos;s get one thing out of the way. You do not need to be fearless to travel alone. You don&apos;t need to be the girl who can trek 15 kilometres, sleep in a dorm with 12 strangers, confidently negotiate with an auto driver in a language she doesn&apos;t speak, or eat at a fancy restaurant without looking at her phone every five minutes.
        </p>

        <p className={styles.bodyParagraph}>
          You just need to be willing to figure things out.
        </p>

        <p className={styles.bodyParagraph}>
          And honestly, if you&apos;ve ever spent six months trying to coordinate one Goa trip with five friends, you already know why solo travel sounds tempting. One friend can&apos;t get leave. Another has a budget problem. Someone&apos;s boyfriend isn&apos;t comfortable. Someone else will confirm by Friday and disappear until next Tuesday.
        </p>

        <div className={styles.highlightQuoteCard}>
          <p className={styles.highlightQuoteText}>
            At some point, you have to ask yourself: am I actually waiting for company, or am I using company as an excuse?
          </p>
        </div>

        <p className={styles.bodyParagraph}>
          Now, travelling alone as a woman isn&apos;t all sunsets, cute cafés and Instagram stories. There will be moments when you feel awkward, get lost, question your hotel choice, or wish you had someone to hold your bag while you use the washroom.
        </p>

        <p className={styles.bodyParagraph}>
          There are also safety considerations women shouldn&apos;t have to think about, but often do. Pretending otherwise would be irresponsible.
        </p>

        <p className={styles.bodyParagraph}>
          So this isn&apos;t going to be a lecture about being brave. It&apos;s a practical guide to travelling on your own terms, without being unnecessarily reckless or scaring yourself out of going. And no, you don&apos;t have to become a different person to do it.
        </p>
      </section>

      {/* CHAPTER 1 */}
      <section id="ch1" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 01</span>
          <h2 className={styles.chapterTitle}>Your first solo trip doesn&apos;t need to be a dramatic life decision</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Please don&apos;t make your first solo trip a three-week backpacking expedition across five countries just because someone on Instagram did it. Start somewhere manageable.
        </p>

        <p className={styles.bodyParagraph}>
          If you&apos;ve never travelled alone before, pick a place with decent connectivity, reliable transport, a good range of accommodation and enough things to do without needing to plan every minute.
        </p>

        <div className={styles.destinationMatrixGrid}>
          <div className={styles.destinationCard}>
            <div className={styles.destinationCardHeader}>
              <span className={styles.destBadge}>🇮🇳 INDIA STARTER DESTINATIONS</span>
              <h3 className={styles.destHeading}>Manageable &amp; Well-Connected</h3>
            </div>
            <div className={styles.destinationPills}>
              <span className={styles.pill}>Goa</span>
              <span className={styles.pill}>Mysuru</span>
              <span className={styles.pill}>Pondicherry</span>
              <span className={styles.pill}>Jaipur</span>
              <span className={styles.pill}>Udaipur</span>
              <span className={styles.pill}>Kochi</span>
              <span className={styles.pill}>Rishikesh</span>
            </div>
            <p className={styles.destNote}>
              Great cafes, established tourist infrastructure, and a steady mix of solo travelers and local hospitality.
            </p>
          </div>

          <div className={styles.destinationCard}>
            <div className={styles.destinationCardHeader}>
              <span className={styles.destBadge}>🌏 INTERNATIONAL STARTER DESTINATIONS</span>
              <h3 className={styles.destHeading}>Friction-Free First Flights</h3>
            </div>
            <div className={styles.destinationPills}>
              <span className={styles.pill}>Singapore</span>
              <span className={styles.pill}>Thailand</span>
              <span className={styles.pill}>Vietnam</span>
              <span className={styles.pill}>Bali</span>
              <span className={styles.pill}>Malaysia</span>
            </div>
            <p className={styles.destNote}>
              World-class transit, safe night walks, simple e-visas or visa-on-arrival, and active backpacker communities.
            </p>
          </div>
        </div>

        <p className={styles.bodyParagraph}>
          These aren&apos;t automatic safety guarantees. Every destination has its own realities, and even popular tourist places need research. But they can be practical starting points because there are established tourist routes, accommodation choices and other travellers around.
        </p>

        <div className={styles.calloutBox}>
          <div className={styles.calloutIcon}>💡</div>
          <div className={styles.calloutContent}>
            <h4 className={styles.calloutTitle}>Training wheels, not cheating</h4>
            <p className={styles.calloutText}>
              Your first solo trip doesn&apos;t have to be completely solo. You could book a group day tour, join a cooking class, take a guided walking tour or spend a couple of days with a local experience provider. You get to explore independently without feeling like you have to figure out absolutely everything yourself.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section id="ch2" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 02</span>
          <h2 className={styles.chapterTitle}>Don&apos;t book a destination just because it looks good on Instagram</h2>
        </div>

        <p className={styles.bodyParagraph}>
          A beautiful destination and a good first solo destination are not necessarily the same thing. Before booking, look beyond the photographs. Ask yourself:
        </p>

        <div className={styles.realityCheckGrid}>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Can I get from the airport or station to my accommodation without too much confusion?</span>
          </div>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Is public transport reasonably accessible?</span>
          </div>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Are there enough well-reviewed places to stay?</span>
          </div>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Will I be comfortable exploring during the day?</span>
          </div>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Are there activities I can join if I don&apos;t feel like spending the entire trip alone?</span>
          </div>
          <div className={styles.realityCheckItem}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Is the destination manageable within my budget?</span>
          </div>
        </div>

        <p className={styles.bodyParagraph}>
          Read reviews written by women travelling alone, not just couples or groups. Look at recent reviews, particularly those mentioning check-in, staff behaviour, location, late arrivals and getting around. One woman&apos;s experience isn&apos;t a guarantee of yours, but repeated patterns in reviews are worth paying attention to.
        </p>

        <p className={styles.bodyParagraph}>
          And don&apos;t ignore the boring details. A hotel that is ₹700 cheaper but 40 minutes away from everything may not actually save you money once you add transport costs.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="ch3" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 03</span>
          <h2 className={styles.chapterTitle}>Where you stay can make or break the trip</h2>
        </div>

        <p className={styles.bodyParagraph}>
          This is one place where I wouldn&apos;t recommend cutting corners blindly. You have three broad options:
        </p>

        <div className={styles.stayOptionsGrid}>
          <div className={styles.stayOptionCard}>
            <div className={styles.stayIcon}>🎒</div>
            <h3 className={styles.stayTitle}>Hostels</h3>
            <p className={styles.stayDesc}>
              Great if you want to meet people, keep costs down and have a more social experience. Many have female-only dorms. Check recent reviews, bathroom arrangements, lockers, reception timings and the overall location before booking.
            </p>
          </div>

          <div className={styles.stayOptionCard}>
            <div className={styles.stayIcon}>🏨</div>
            <h3 className={styles.stayTitle}>Hotels</h3>
            <p className={styles.stayDesc}>
              Better if you value privacy, your own bathroom, a proper night&apos;s sleep and the freedom to return whenever you want. You don&apos;t need to justify spending more on a comfortable room.
            </p>
          </div>

          <div className={styles.stayOptionCard}>
            <div className={styles.stayIcon}>🏡</div>
            <h3 className={styles.stayTitle}>Homestays &amp; Guesthouses</h3>
            <p className={styles.stayDesc}>
              These can be lovely for a more personal experience, especially in smaller destinations. But research the host, location, access and check-in arrangements carefully.
            </p>
          </div>
        </div>

        <div className={styles.checklistSectionBox}>
          <h4 className={styles.checklistTitle}>A few things to personally check before confirming any stay:</h4>
          <ul className={styles.cleanList}>
            <li>Is the property in a well-connected, reasonably busy area?</li>
            <li>Does it have a staffed reception or a reliable check-in process?</li>
            <li>Are there recent reviews from solo women?</li>
            <li>Can I reach the property easily after dark?</li>
            <li>Does the room have a proper lock and secure windows?</li>
            <li>Is there a clear contact number if I need help?</li>
          </ul>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          And please don&apos;t feel pressured to stay in a hostel just because everyone says that&apos;s how you make friends while travelling. If you prefer a private room, book one. You are on holiday, not attending a compulsory social-skills workshop.
        </p>
      </section>

      {/* CHAPTER 4 */}
      <section id="ch4" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 04</span>
          <h2 className={styles.chapterTitle}>The safety stuff nobody should make you feel silly for checking</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Let&apos;s talk about the part that often stops women from booking in the first place: <em>Is it safe?</em>
        </p>

        <p className={styles.bodyParagraph}>
          The honest answer is that no destination is completely risk-free. Your experience will depend on where you go, when you travel, how you move around and the circumstances you find yourself in. There are precautions that make sense, though - not because you should spend your entire holiday looking over your shoulder, but because a little preparation gives you more room to enjoy yourself.
        </p>

        <div className={styles.safetySplitGrid}>
          <div className={styles.safetyColumnCard}>
            <div className={styles.safetyColHeader}>
              <Compass size={18} />
              <span>BEFORE YOU LEAVE</span>
            </div>
            <ul className={styles.safetyBulletList}>
              <li>Share your itinerary and accommodation details with someone you trust.</li>
              <li>Save your hotel&apos;s address and phone number offline.</li>
              <li>Keep emergency contacts easily accessible.</li>
              <li>Check local emergency numbers and the location of nearby hospitals.</li>
              <li>Have travel insurance that covers the activities you plan to do.</li>
              <li>Keep digital and physical copies of important documents.</li>
            </ul>
          </div>

          <div className={styles.safetyColumnCard}>
            <div className={styles.safetyColHeader}>
              <ShieldAlert size={18} />
              <span>WHILE YOU&apos;RE THERE</span>
            </div>
            <ul className={styles.safetyBulletList}>
              <li>Use reputable transport options, particularly when arriving late.</li>
              <li>Check the vehicle and driver details before getting in.</li>
              <li>Avoid sharing your exact hotel or room number with strangers.</li>
              <li>Don&apos;t let someone pressure you into changing plans on the fly.</li>
              <li>Keep an eye on your drink and belongings.</li>
              <li>If a situation feels uncomfortable, leave. You don&apos;t owe anyone a polite explanation.</li>
            </ul>
          </div>
        </div>

        {/* GOLD EMPHASIS CALLOUT */}
        <div className={styles.empowermentBanner}>
          <h3 className={styles.empowermentHeadline}>You are allowed to be rude.</h3>
          <p className={styles.empowermentBody}>
            You can decline a selfie. You can ignore an unwanted conversation. You can walk away from someone who is making you uncomfortable. You can say you&apos;re meeting a friend, even if you&apos;re not. You don&apos;t need to manage a stranger&apos;s feelings at the expense of your own comfort.
          </p>
          <p className={styles.empowermentSub}>
            Don&apos;t confuse being cautious with being paranoid. The point isn&apos;t to assume everyone is dangerous - it&apos;s to have a plan if something doesn&apos;t feel right.
          </p>
        </div>
      </section>

      {/* CHAPTER 5 */}
      <section id="ch5" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 05</span>
          <h2 className={styles.chapterTitle}>How do you actually get around?</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Transport is one of those things that sounds simple until you&apos;re standing outside an airport at 11 pm trying to locate the correct pickup point. A few things that help:
        </p>

        <div className={styles.transportCardsGrid}>
          <div className={styles.transportCard}>
            <div className={styles.transportIcon}><Plane size={22} /></div>
            <h3 className={styles.transportCardTitle}>At Airports</h3>
            <p className={styles.transportCardText}>
              Check the official taxi or app-based cab pickup area before you land. If you&apos;re arriving late at night, consider arranging a hotel transfer or a verified pickup in advance.
            </p>
          </div>

          <div className={styles.transportCard}>
            <div className={styles.transportIcon}><Car size={22} /></div>
            <h3 className={styles.transportCardTitle}>In Cities</h3>
            <p className={styles.transportCardText}>
              Use established ride-hailing services where available. Check the vehicle number and driver details before getting in, and share your trip status with someone you trust.
            </p>
          </div>

          <div className={styles.transportCard}>
            <div className={styles.transportIcon}><Train size={22} /></div>
            <h3 className={styles.transportCardTitle}>On Trains &amp; Buses</h3>
            <p className={styles.transportCardText}>
              Book through official platforms. Check arrival times and station safety before confirming. An overnight journey that saves ₹500 may not be worth it if you arrive at 3 AM with no transfer arranged.
            </p>
          </div>

          <div className={styles.transportCard}>
            <div className={styles.transportIcon}><Compass size={22} /></div>
            <h3 className={styles.transportCardTitle}>On Foot</h3>
            <p className={styles.transportCardText}>
              Save offline Google Maps, keep a charged power bank, and pay attention to your route. If a street feels deserted or uncomfortable, turn around, take another route or hail a cab.
            </p>
          </div>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          And don&apos;t make the mistake of planning every transfer down to the last minute. Give yourself some breathing room. Missing a connection is annoying; rushing around an unfamiliar place is worse.
        </p>
      </section>

      {/* CHAPTER 6 */}
      <section id="ch6" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 06</span>
          <h2 className={styles.chapterTitle}>Eating alone is not as awkward as you think</h2>
        </div>

        <p className={styles.bodyParagraph}>
          This deserves its own section because so many first-time solo travellers worry about it. You walk into a restaurant. The host asks, <em>&quot;Table for how many?&quot;</em> You say, <em>&quot;One.&quot;</em> And then your brain decides this is somehow a major social event.
        </p>

        <p className={styles.bodyParagraph}>
          It&apos;s not. People eat alone all the time. They read, work, scroll, people-watch, enjoy their food and leave. Nobody is keeping score.
        </p>

        <div className={styles.quotePillBox}>
          <Coffee size={24} className={styles.quotePillIcon} />
          <p className={styles.quotePillText}>
            If you&apos;re nervous, start with a café, a casual restaurant or a place with counter seating. Carry a book, listen to a podcast or simply enjoy your meal without feeling you need to look occupied.
          </p>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.25rem' }}>
          And if you don&apos;t feel like dining alone every evening, join a food walk, a cooking class or a small-group food tour.
        </p>

        <p className={styles.bodyParagraph}>
          One more thing: don&apos;t feel obliged to accept an invitation to dinner from someone you&apos;ve just met because you don&apos;t want to seem unfriendly. Choose company because you want it, not because you&apos;re uncomfortable being alone.
        </p>
      </section>

      {/* CHAPTER 7 */}
      <section id="ch7" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 07</span>
          <h2 className={styles.chapterTitle}>Making friends is easier when you stop trying so hard</h2>
        </div>

        <p className={styles.bodyParagraph}>
          One of the nicest parts of solo travel is meeting people you probably wouldn&apos;t have met otherwise. It could be another woman in your hostel, someone on a walking tour, a local guide, or a couple you end up chatting with over breakfast.
        </p>

        <p className={styles.bodyParagraph}>
          But don&apos;t expect every stranger to become a lifelong friend. Some conversations last ten minutes. Some turn into a day of exploring together. Some are simply pleasant.
        </p>

        <div className={styles.checklistSectionBox}>
          <h4 className={styles.checklistTitle}>If you want to meet people naturally, try:</h4>
          <ul className={styles.cleanList}>
            <li>Staying in a well-reviewed social hostel or joining hostel community activities.</li>
            <li>Booking group walking tours or local experiences.</li>
            <li>Taking a cooking, art, dance or photography workshop.</li>
            <li>Joining a small-group day trip.</li>
            <li>Looking for women-led local experiences and community events.</li>
          </ul>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          And yes, use your judgement when meeting people from apps or social media. Meet in public places, arrange your own transport and tell someone where you&apos;re going. You can be open to meeting people without giving everyone immediate access to your time, trust or personal details.
        </p>
      </section>

      {/* CHAPTER 8 */}
      <section id="ch8" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 08</span>
          <h2 className={styles.chapterTitle}>What about the loneliness?</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Let&apos;s not pretend it doesn&apos;t happen. You might see a beautiful sunset and wish you had someone beside you. You might have an amazing meal and realise there&apos;s nobody to share it with. You might have a terrible day and want to call a friend who can understand without needing the entire backstory.
        </p>

        <p className={styles.bodyParagraph}>
          That&apos;s normal.
        </p>

        <div className={styles.highlightQuoteCard}>
          <p className={styles.highlightQuoteText}>
            Solo travel doesn&apos;t mean you have to enjoy your own company every second of the day. It just means you get to decide what to do with your time.
          </p>
        </div>

        <p className={styles.bodyParagraph}>
          Call home. Find a group activity. Take a slow day. Sit somewhere familiar. Change your plans if you need to. And please don&apos;t feel like you&apos;re failing at solo travel because you got homesick on day two. Sometimes the best thing you can do is order room service, watch something familiar and try again tomorrow.
        </p>
      </section>

      {/* CHAPTER 9 */}
      <section id="ch9" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 09</span>
          <h2 className={styles.chapterTitle}>How much money should you budget?</h2>
        </div>

        <p className={styles.bodyParagraph}>
          There isn&apos;t one universal solo travel budget. It depends on the destination, season, accommodation, transport and the kind of holiday you want. But remember one thing: travelling alone doesn&apos;t always mean travelling cheaply.
        </p>

        <p className={styles.bodyParagraph}>
          You may not have someone to split airport transfers, hotel rooms or private cabs with. That can make some parts of the trip more expensive. When calculating your budget, include:
        </p>

        <div className={styles.budgetGrid}>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>✈️</span> Flights or trains</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🏨</span> Accommodation</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🚕</span> Airport transfers &amp; cabs</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>☕</span> Meals, snacks &amp; coffee</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🎟️</span> Sightseeing &amp; entry tickets</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>📶</span> SIM / eSIM data pack</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🛡️</span> Travel insurance policy</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🛂</span> Visa fees (if international)</div>
          <div className={styles.budgetItem}><span className={styles.budgetBullet}>🚨</span> Emergency buffer fund</div>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          Don&apos;t spend your entire budget on flights and hotels. Keep a buffer for unexpected transport, a last-minute change of plans or a more comfortable stay if you need one. And don&apos;t book the cheapest possible option just to say you did the trip on a tiny budget. Your comfort and safety are part of the holiday too.
        </p>
      </section>

      {/* CHAPTER 10 */}
      <section id="ch10" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 10</span>
          <h2 className={styles.chapterTitle}>A packing list that won&apos;t make you carry your entire house</h2>
        </div>

        <p className={styles.bodyParagraph}>
          You don&apos;t need 14 outfits for a five-day trip. You need things that work. A sensible starting list:
        </p>

        <div className={styles.packingChecklistGrid}>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Comfortable walking shoes</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Weather &amp; culturally respectful clothes</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Light layer or versatile scarf</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Secure crossbody day bag</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Power bank &amp; charging cables</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Universal travel adapter</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Reusable water bottle</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Personal meds &amp; basic first-aid</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Sanitary products</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Physical &amp; digital document copies</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Small amount of local currency cash</div>
          <div className={styles.packingCheckItem}><CheckCircle2 size={16} /> Travel insurance emergency details</div>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          Keep your passport, phone, money and important documents secure. Don&apos;t put everything in one bag, and keep a backup payment method separate.
        </p>

        <p className={styles.bodyParagraph}>
          Pack for the trip you&apos;re actually taking, not the imaginary version where you attend a beach party, climb a mountain, go on a fancy dinner date and explore a rainy city all in the same afternoon.
        </p>
      </section>

      {/* CHAPTER 11 */}
      <section id="ch11" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 11</span>
          <h2 className={styles.chapterTitle}>What if something goes wrong?</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Something probably will. Maybe not something serious, but travel rarely goes exactly to plan. Your flight might be delayed. Your hotel might not look like the photographs. You might miss a train, lose your way or realise you&apos;ve booked an activity on the wrong date.
        </p>

        <p className={styles.bodyParagraph}>
          For the smaller problems, take a breath and work through them one at a time. For anything involving your safety:
        </p>

        <div className={styles.protocolStepsContainer}>
          <div className={styles.protocolStep}>
            <span className={styles.stepBadge}>STEP 1</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Move to a public, staffed, or well-lit location</h4>
              <p className={styles.stepDesc}>Enter an open hotel lobby, café, supermarket or metro station immediately.</p>
            </div>
          </div>

          <div className={styles.protocolStep}>
            <span className={styles.stepBadge}>STEP 2</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Contact someone you trust</h4>
              <p className={styles.stepDesc}>Drop a live location pin and let a family member or friend know where you are.</p>
            </div>
          </div>

          <div className={styles.protocolStep}>
            <span className={styles.stepBadge}>STEP 3</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Contact local emergency services if necessary</h4>
              <p className={styles.stepDesc}>Keep national helpline numbers saved on speed dial beforehand.</p>
            </div>
          </div>

          <div className={styles.protocolStep}>
            <span className={styles.stepBadge}>STEP 4</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Reach out to your accommodation, tour lead, or travel insurer</h4>
              <p className={styles.stepDesc}>They have local contacts on the ground and can send verified help.</p>
            </div>
          </div>

          <div className={styles.protocolStep}>
            <span className={styles.stepBadge}>STEP 5</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Don&apos;t stay in an uncomfortable situation simply because you paid for it</h4>
              <p className={styles.stepDesc}>Your well-being is worth far more than a non-refundable room rate.</p>
            </div>
          </div>
        </div>

        <p className={styles.bodyParagraph} style={{ marginTop: '1.5rem' }}>
          Before travelling internationally, check official travel advisories and save the contact details of the nearest Indian embassy or consulate. Keep your insurance provider&apos;s emergency number handy too. You don&apos;t need to memorise every possible emergency - you just need to know where to find help.
        </p>
      </section>

      {/* CHAPTER 12 */}
      <section id="ch12" className={styles.chapterBlock}>
        <div className={styles.chapterHeader}>
          <span className={styles.chapterNum}>CHAPTER 12</span>
          <h2 className={styles.chapterTitle}>Before you book that first solo trip...</h2>
        </div>

        <p className={styles.bodyParagraph}>
          Here&apos;s your quick checklist. Screenshot it, save it or send it to the friend who keeps saying she&apos;ll travel once everyone is free.
        </p>

        {/* SCREENSHOT CHECKLIST TICKET CARD */}
        <div className={styles.ticketChecklistCard}>
          <div className={styles.ticketHeader}>
            <CheckSquare size={20} className={styles.ticketIcon} />
            <span className={styles.ticketTitle}>THE PRE-DEPARTURE READINESS CHECKLIST</span>
          </div>

          <div className={styles.ticketList}>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve researched the destination beyond Instagram.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve checked recent reviews of my accommodation from solo women.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve planned how to get from the airport or station to my stay.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve shared my itinerary and booking contacts with someone I trust.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve saved offline maps and important phone numbers.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve checked local transport options and hospital locations.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve arranged active travel insurance.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve kept a dedicated cash/card buffer for unexpected expenses.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I&apos;ve left enough breathing room in my daily schedule.</span>
            </div>
            <div className={styles.ticketRow}>
              <span className={styles.checkGold}>✓</span>
              <span>I know I can change my plans if something doesn&apos;t feel right.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTUAL TIE-IN: ANDAMAN WOMEN-ONLY TRIP */}
      <section className={styles.andamanPromoCard}>
        <div className={styles.promoBadge}>🌸 NOT READY TO GO 100% ALONE YET?</div>
        <h3 className={styles.promoTitle}>Join Our Andaman Women-Only Group Trip (Jan 2027)</h3>
        <p className={styles.promoDesc}>
          Get the complete freedom and empowerment of solo travel, without any of the logistical headaches or dining-alone anxiety. 5 nights of pristine white beaches, boutique stays, semi-submarine reef cruises, and island sisters.
        </p>
        <div className={styles.promoActionRow}>
          <Link href="/trips/andaman-january-2027" className={styles.promoBtnPrimary}>
            View Andaman Women-Only Itinerary &rarr;
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.promoBtnWa}>
            Chat With Our Female Trip Lead
          </a>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className={styles.conclusionSection}>
        <h2 className={styles.conclusionTitle}>So, should you take that solo trip?</h2>

        <p className={styles.bodyParagraph}>
          If you&apos;ve been waiting for someone to join you, here&apos;s your sign to at least start planning. You don&apos;t have to quit your job, book a one-way ticket or disappear into the mountains for three months. You could start with a weekend away. A city you&apos;ve always wanted to explore. A few days by the beach. Somewhere close enough that you can come home if you decide solo travel isn&apos;t your thing.
        </p>

        <p className={styles.bodyParagraph}>
          And if you love it? Well, that&apos;s a whole new problem. You&apos;ll probably start wondering where to go next.
        </p>

        <div className={styles.highlightQuoteCard}>
          <p className={styles.highlightQuoteText}>
            The point isn&apos;t to prove that you can do everything alone. It&apos;s to realise that you don&apos;t have to put your plans on hold until someone else is ready.
          </p>
        </div>

        <p className={styles.bodyParagraph}>
          Go when you can. Take precautions. Spend on the things that matter to you. Change your mind when you need to. And have a really good time.
        </p>

        <p className={styles.bodyParagraph} style={{ fontWeight: 600, color: '#1c1917' }}>
          Because your travel plans deserve better than a group chat that has been saying &quot;let&apos;s finalise dates&quot; since March.
        </p>

        {/* CLOSING AUTHOR NOTE */}
        <div className={styles.closingCallout}>
          <h3 className={styles.closingHeadline}>Planning your first solo escape?</h3>
          <p className={styles.closingBody}>
            At Sobhavi Travels, we believe travelling alone doesn&apos;t mean you have to figure out every little thing alone. If you&apos;d like help choosing a destination, planning your route or sorting out the practical details, get in touch. No pressure to book a package. Sometimes you just need an experienced travel planner to help you get started.
          </p>
          <p className={styles.closingTagline}>
            Sobhavi Travels - Escape The Routine.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLeadBtn}>
              Talk To A Solo Travel Specialist On WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
