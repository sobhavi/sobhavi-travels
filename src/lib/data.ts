// Lumina Bespoke Luxury Travel Data
// Comprehensive 20 Destinations & 20 Signature Journeys
// Enhanced with 5 High-Definition Gallery Images, Cinematic Video, and In-Depth Editorial Articles

export interface Destination {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  images: string[];
  heroVideo?: string;
  videoUrl?: string;
  experiences: string[];
  hotels: string[];
  bestTime?: string;
  currency?: string;
  article: {
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
}

export interface Journey {
  slug: string;
  name: string;
  subtitle?: string;
  duration: string;
  destination: string;
  imageUrl: string;
  images: string[];
  videoUrl?: string;
  price: string;
  priceIncludesText?: string;
  packageOptions?: {
    category: string;
    price: string;
    details?: string;
  }[];
  overview: string;
  highlights: string[];
  article: {
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
  itinerary: {
    day: string;
    title: string;
    desc: string;
    sightseeing?: string[];
    meals?: {
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
    };
    transfers?: string;
  }[];
  included: string[];
  notIncluded: string[];
  termsAndConditions?: string[];
  cancellationPolicy?: string[];
}

export const featuredDestinations: Destination[] = [
  {
    "slug": "japan",
    "name": "Japan",
    "description": "A seamless blend of ancient traditions, sacred shrines, and futuristic innovation.",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Private Kyoto Tea Ceremony with Grand Master",
      "Tokyo After-Dark Neon & Michelin Tour",
      "Mt. Fuji Helicopter Charter & Onsen Retreat",
      "Master Swordsmith Katana Forging"
    ],
    "hotels": [
      "Aman Tokyo",
      "Hoshinoya Kyoto",
      "Park Hyatt Niseko",
      "Gora Kadan Hakone"
    ],
    "bestTime": "March \u2013 May & October \u2013 November",
    "currency": "Japanese Yen (JPY)",
    "article": {
      "intro": "Japan is a realm where centuries of ritual harmony coexist with the bleeding edge of modern architectural brilliance and culinary obsession.",
      "body": [
        "From the whisper of cedar trees around Kyoto's moss-carpeted Zen gardens to the pulsing neon towers of Shinjuku, Japan reveals itself in layers of precision and deep aesthetic grace. To journey here with Sobhavi is to unlock doors closed to ordinary travelers: an after-hours viewing of a 1,200-year-old temple, private audiences with Living National Treasure artisans, and counter seats at sushi sanctums with reservations booked a year in advance.",
        "In the winter, northern Hokkaido turns into powder paradise with natural hot spring onsens steaming under snow-laden pines. In spring, cherry blossoms paint the canal banks of Meguro and the imperial gardens of Kyoto in shades of ethereal pink.",
        "Our bespoke itineraries balance restorative serenity with high-voltage city discoveries. Sleep in century-old ryokans on hand-stitched tatami mats, savor multi-course kaiseki banquets prepared by third-generation chefs, and travel effortlessly aboard sleek shinkansen trains with personal luggage dispatch at every step."
      ],
      "quote": "In Japan, luxury is not ostentation; it is the absolute perfection of every quiet gesture, every timber join, every grain of seasoned rice.",
      "quoteAuthor": "Kenji Takahashi, Master Heritage Docent"
    }
  },
  {
    "slug": "india",
    "name": "India",
    "description": "An ancient civilization bursting with royal grandeur, living history, and sensory splendor.",
    "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/safari.mp4",
    "videoUrl": "/videos/safari.mp4",
    "experiences": [
      "Private Sunrise Taj Mahal with Royal Historian",
      "Rajasthan Royal Palace & Fortress Sojourns",
      "Private Leopard & Bengal Tiger Safari",
      "Kerala Spice Plantation & Backwater Cruiser"
    ],
    "hotels": [
      "Taj Lake Palace Udaipur",
      "The Oberoi Amarvilas Agra",
      "SUJ\u00c1N Jawai Leopard Camp",
      "Rambagh Palace Jaipur"
    ],
    "bestTime": "October \u2013 April",
    "currency": "Indian Rupee (INR)",
    "article": {
      "intro": "India is not merely a country; it is an epic woven from five millennia of maharajas, spiritual devotion, and unmatched royal hospitality.",
      "body": [
        "To travel India with Sobhavi is to inhabit the palaces once reserved for royalty. In Udaipur, your private vintage boat glides across Lake Pichola to a marble fortress that seems to float on water. In Jaipur, the doors of the City Palace private residences open for champagne under chandeliers that have illuminated royal banquets for centuries.",
        "Beyond the gilded courts lies India's untamed heart: dawn safaris in Ranthambore tracking royal Bengal tigers through ancient ruins, or watching wild leopards traverse granite boulders at luxury wilderness encampments under starry desert skies.",
        "From the mist-shrouded tea plantations of Munnar to the holy ghats of Varanasi at evening aarti, India captivates your soul with vibrant textiles, aromatic saffron, and warmth that stays with you forever."
      ],
      "quote": "India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend.",
      "quoteAuthor": "Mark Twain"
    }
  },
  {
    "slug": "maldives",
    "name": "Maldives",
    "description": "Infinite turquoise waters, pristine overwater retreats, and unparalleled ocean seclusion.",
    "imageUrl": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Island Castaway Champagne Picnic",
      "Submarine Safari with Marine Biologist",
      "Under-the-Stars Stargazing Observatory Dining",
      "Manta Ray & Whale Shark Private Dive"
    ],
    "hotels": [
      "Soneva Jani",
      "Cheval Blanc Randheli",
      "The Nautilus Maldives",
      "Waldorf Astoria Ithaafushi"
    ],
    "bestTime": "November \u2013 April",
    "currency": "US Dollar (USD) / Maldivian Rufiyaa",
    "article": {
      "intro": "Scattered across the azure expanse of the Indian Ocean, the Maldives represents the ultimate sanctuary of bare-foot luxury and crystalline peace.",
      "body": [
        "Arriving by private seaplane over rings of coral atolls, the world transforms into hypnotic shades of turquoise and sapphire. Here, overwater villas feature retractable roofs for stargazing from your king-sized bed, glass floors revealing clownfish darting through sea fans, and private slides leading straight into warm ocean lagoons.",
        "Your days are unstructured bliss: swim alongside gentle giant whale sharks in South Ari Atoll, embark on sunset dolphin cruises with vintage champagne, or retreat to subterranean spas where treatments are administered while schools of jackfish glide outside underwater glass walls.",
        "For couples, families, and those seeking absolute renewal, the Maldives offers uninterrupted serenity paired with Michelin-caliber culinary artistry on powder-white sands."
      ],
      "quote": "Nowhere else on Earth does the sky and sea blend with such breathtaking, effortless perfection.",
      "quoteAuthor": "Elena Rostova, Luxury Marine Explorer"
    }
  },
  {
    "slug": "italy",
    "name": "Italy",
    "description": "Timeless art, cliffside coastlines, and the intoxicating art of living well.",
    "imageUrl": "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Riva Boat Charter along Amalfi & Capri",
      "After-Hours Vatican & Sistine Chapel Tour",
      "Piedmont White Truffle Hunting with Canine Masters",
      "Private Vineyard Luncheon in Val d'Orcia"
    ],
    "hotels": [
      "Belmond Hotel Caruso Ravello",
      "Aman Venice",
      "Rosewood Castiglion del Bosco",
      "Il San Pietro di Positano"
    ],
    "bestTime": "April \u2013 June & September \u2013 October",
    "currency": "Euro (EUR)",
    "article": {
      "intro": "Italy is a love letter to the senses \u2014 a country where every piazza tells an epic story and every meal is an impassioned celebration of life.",
      "body": [
        "Picture cruising past the vertical pastel houses of Positano aboard a wooden Riva yacht, the scent of wild lemons drifting across warm Mediterranean waters. In Tuscany, cypress-lined lanes lead to private aristocratic estates where winemakers unlock century-old cellars for private tastings paired with freshly pressed olive oil.",
        "In Florence and Rome, bypass the crowds with private keys to Renaissance cloisters, viewing Michelangelo's frescoes in contemplative silence. In Venice, glide under ancient stone arches in private water taxis to palaces decorated with priceless Murano chandeliers.",
        "Every element of our Italian journeys is tailored around your taste: from private culinary masterclasses with Michelin-starred maestros to helicopter transfers over volcanic peaks and the shimmering waters of Lake Como."
      ],
      "quote": "You may have the universe if I may have Italy.",
      "quoteAuthor": "Giuseppe Verdi"
    }
  },
  {
    "slug": "iceland",
    "name": "Iceland",
    "description": "A primordial landscape of fire, ice, emerald auroras, and untamed natural wonder.",
    "imageUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Northern Lights Super Jeep Expedition",
      "Private Crystal Ice Cave Descent",
      "Helicopter Landing atop Eyjafjallaj\u00f6kull Volcano",
      "Exclusive Blue Lagoon Geothermal Suite Access"
    ],
    "hotels": [
      "The Retreat at Blue Lagoon",
      "Deplar Farm Troll Peninsula",
      "ION Adventure Hotel",
      "Torfh\u00fas Retreat"
    ],
    "bestTime": "September \u2013 March (Northern Lights) & June \u2013 August (Midnight Sun)",
    "currency": "Icelandic Kr\u00f3na (ISK)",
    "article": {
      "intro": "At the northern edge of the Atlantic, Iceland is a living, breathing geological marvel where volcanoes sleep under glacial blankets.",
      "body": [
        "Iceland tests the limits of imagination. Here you can walk between the Eurasian and North American tectonic plates, descend into the crystalline sapphire chambers of massive glaciers, and watch columns of boiling geothermal steam shoot high into crisp arctic air.",
        "As darkness falls between autumn and spring, the night sky erupts in neon ribbons of green, violet, and crimson auroras. Watch this celestial show from the warm geothermal waters of your private lagoon suite at The Retreat, sipping vintage champagne in total tranquility.",
        "By day, our custom modified Super Jeeps traverse black sand deserts and glacial rivers to access remote canyons untouched by modern tourism. It is raw, majestic adventure executed with the utmost in Nordic comfort and design."
      ],
      "quote": "Iceland is nature in its most dramatic, unedited form \u2014 sublime, raw, and endlessly humbling.",
      "quoteAuthor": "Magn\u00fas Einarsson, Arctic Expedition Specialist"
    }
  },
  {
    "slug": "france",
    "name": "France",
    "description": "High fashion, gastronomic supremacy, fairy-tale ch\u00e2teaux, and the legendary Riviera.",
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private After-Hours Louvre Tour",
      "Bespoke Champagne Cave Tasting in \u00c9pernay",
      "Helicopter Flight over Loire Valley Ch\u00e2teaux",
      "Superyacht Cruise along the Cap d'Antibes"
    ],
    "hotels": [
      "Ritz Paris",
      "H\u00f4tel du Cap-Eden-Roc",
      "Cheval Blanc Paris",
      "Ch\u00e2teau Saint-Martin & Spa"
    ],
    "bestTime": "May \u2013 October",
    "currency": "Euro (EUR)",
    "article": {
      "intro": "France is the undisputed capital of elegance, where centuries of cultural refinement have elevated dining, art, and hospitality to their highest expressions.",
      "body": [
        "In Paris, wake up overlooking the Place Vend\u00f4me before enjoying private access to haute couture ateliers and the quiet halls of the Mus\u00e9e d'Orsay before the public arrives. Savor private wine tastings guided by chief sommeliers of premier grand cru estates in Bordeaux and Burgundy.",
        "Along the French Riviera, the Mediterranean glitters under azure skies. Board a private yacht for secluded swimming in the calanques of Cassis, dine at three-Michelin-star seaside sanctuaries, and relax in cliffside palaces that have hosted royalty and cultural icons for a century.",
        "From lavender fields blooming across Provence to the snow-capped summits of Chamonix, France offers a timeless symphony of beauty and sophistication."
      ],
      "quote": "To see France is to discover that romance, intellect, and culinary perfection can unite in a single country.",
      "quoteAuthor": "Claire De La Tour, Parisian Cultural Historian"
    }
  },
  {
    "slug": "greece",
    "name": "Greece",
    "description": "Whitewashed caldera villages, sapphire Aegean waters, and ancient mythological wonders.",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Catamaran Sunset Cruise in Santorini",
      "Dawn Acropolis Walk with Leading Archaeologist",
      "Mykonos Hidden Cove Yacht Hopping",
      "Peloponnese Olive Harvest & Villa Retreat"
    ],
    "hotels": [
      "Canaves Oia Epitome",
      "Amanzoe Porto Heli",
      "Katikies Santorini",
      "Bill & Coo Suites Mykonos"
    ],
    "bestTime": "May \u2013 October",
    "currency": "Euro (EUR)",
    "article": {
      "intro": "Bathed in luminous Aegean light, Greece is the cradle of Western thought and home to some of the world's most intoxicating coastal landscapes.",
      "body": [
        "In Santorini, white-domed villas cling to sheer volcanic cliffs, their private infinity pools appearing to spill straight into the deep sapphire sea. Toast the legendary Oia sunset with rare Assyrtiko wine from volcanic vineyards, far away from tourist crowds on your secluded terrace.",
        "Sail between hidden islands aboard a sleek catamaran, dropping anchor in translucent coves inaccessible by road. Discover secluded tavernas where grilled octopus and wild oregano honey are served under olive trees that have witnessed millennia.",
        "From the architectural perfection of the Parthenon to the minimalist luxury of Amanzoe in the Peloponnese, Greece recharges your spirit with timeless warmth and mythical beauty."
      ],
      "quote": "Happy is the man, I thought, who, before dying, has the good fortune to sail the Aegean Sea.",
      "quoteAuthor": "Nikos Kazantzakis"
    }
  },
  {
    "slug": "switzerland",
    "name": "Switzerland",
    "description": "Pristine alpine summits, mirror-glass lakes, world-class ski chalets, and clockwork precision.",
    "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Glacier Express Excellence Class Panoramic Journey",
      "Matterhorn Heli-Skiing & Mountain Luncheon",
      "Private Watchmaking Workshop in Vall\u00e9e de Joux",
      "Lake Geneva Classic Steam Yacht Charter"
    ],
    "hotels": [
      "The Chedi Andermatt",
      "Badrutt's Palace St. Moritz",
      "The Alpina Gstaad",
      "B\u00fcrgenstock Hotel & Alpine Spa"
    ],
    "bestTime": "December \u2013 March (Winter) & June \u2013 September (Summer)",
    "currency": "Swiss Franc (CHF)",
    "article": {
      "intro": "Switzerland represents the pinnacle of alpine luxury, where dramatic natural grandeur meets flawless Swiss craftsmanship.",
      "body": [
        "Board the Glacier Express in Excellence Class, where concierge service, multi-course fine dining, and floor-to-ceiling panoramic windows frame snow-blanketed passes and towering granite spires. In St. Moritz and Gstaad, five-star heritage hotels pamper discerning guests with Michelin-starred cuisine and private ski butlers.",
        "In the summer, alpine meadows come alive with wildflowers, cowbells chime across green valleys, and pristine turquoise lakes invite private morning swims. Unwind at cliff-top spas featuring thermal infinity pools suspended high above Lake Lucerne.",
        "Whether crafting your own bespoke timepiece alongside master horologists or soaring over the Matterhorn in a private helicopter, Switzerland delivers sublime luxury with unmatched finesse."
      ],
      "quote": "Switzerland is a country where things work, beauty is everywhere, and the mountains silence all worldly noise.",
      "quoteAuthor": "Marc Aubert, Alpine Mountain Master"
    }
  },
  {
    "slug": "thailand",
    "name": "Thailand",
    "description": "Opulent temples, Andaman sea limestone karsts, warm hospitality, and world-class luxury resorts.",
    "imageUrl": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Longtail Yacht through Phang Nga Bay",
      "Ethical Elephant Sanctuary Care in Chiang Mai",
      "Bangkok Royal Palace & Night Food Safari",
      "Private Island Wellness Retreat in Koh Samui"
    ],
    "hotels": [
      "Amanpuri Phuket",
      "Four Seasons Tented Camp Golden Triangle",
      "Rosewood Bangkok",
      "Soneva Kiri Koh Kood"
    ],
    "bestTime": "November \u2013 April",
    "currency": "Thai Baht (THB)",
    "article": {
      "intro": "The Kingdom of Thailand enchants with its gilded Buddhist shrines, emerald jungle rivers, and islands carved by ancient tropical waters.",
      "body": [
        "In Bangkok, glide past riverside temples on private longtail boats before enjoying table-side culinary drama at Asia's top-rated restaurants. In the north, Four Seasons Tented Camp offers luxury safari tents surrounded by bamboo forests where rescued elephants roam freely.",
        "The southern coast is a dreamscape of vertical limestone karsts rising dramatically from turquoise waters. At Amanpuri in Phuket or Soneva Kiri on Koh Kood, private villas feature personal butlers, outdoor showers surrounded by frangipani blossoms, and private beaches with sand as soft as powdered sugar.",
        "Indulge in authentic Thai massage rituals perfected over centuries, sample delicate royal court delicacies, and let the gentle warmth of Thai hospitality rejuvenate your soul."
      ],
      "quote": "Thailand teaches you that kindness and warmth are the ultimate expressions of true luxury.",
      "quoteAuthor": "Somchai Prasert, Royal Thai Cultural Curator"
    }
  },
  {
    "slug": "bali",
    "name": "Bali",
    "description": "Spiritual sanctuaries, emerald rice terraces, cliffside temples, and secluded ocean villas.",
    "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Water Temple Melukat Purification Ritual",
      "Sunrise Mount Batur Helicopter Tour",
      "Uluwatu Sunset Kecak Fire Dance from VIP Terrace",
      "Jungle Hideaway Cooking Class with Master Chef"
    ],
    "hotels": [
      "Mandapa, a Ritz-Carlton Reserve Ubud",
      "Amankila East Bali",
      "Bulgari Resort Bali",
      "Capella Ubud"
    ],
    "bestTime": "April \u2013 October",
    "currency": "Indonesian Rupiah (IDR)",
    "article": {
      "intro": "The Island of the Gods radiates a spiritual aura unmatched anywhere on earth, combining sacred Hindu temples with luxurious wellness retreats.",
      "body": [
        "In Ubud's lush river valleys, morning mist lifts to reveal emerald stepped rice terraces carved into the hillsides centuries ago. Here, luxury retreats like Mandapa and Capella nestle inside rainforest canopies, offering open-air bamboo suites where the sound of the Ayung River lulls you to sleep.",
        "Participate in a private Melukat water purification ceremony led by a revered Balinese Hindu priest at a sacred spring. Experience tailored holistic wellness programs, daily yoga pavilions overlooking misted jungle ravines, and rejuvenating Balinese spice scrubs.",
        "Along the southern coast, Bulgari Resort Bali clings to dramatic 150-meter limestone cliffs over the Indian Ocean. Sip cocktails at cliffside bars as waves crash against sea caves below, with private inclinator lifts whisking you down to secluded white sand beaches."
      ],
      "quote": "Bali is not just a place; it is a mood, an aspiration, a tropical state of mind where spirit and nature are one.",
      "quoteAuthor": "Wayan Sudarta, Balinese Elder & Philosopher"
    }
  },
  {
    "slug": "morocco",
    "name": "Morocco",
    "description": "Labyrinthine imperial medinas, mystical Sahara dunes, Atlas mountain riads, and sensory enchantment.",
    "imageUrl": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/safari.mp4",
    "experiences": [
      "Private Luxury Desert Camp under the Sahara Stars",
      "After-Hours Majorelle Garden & YSL Museum Access",
      "Fez Medieval Medina Artisan & Architecture Walk",
      "Atlas Mountains Berber Village Luncheon"
    ],
    "hotels": [
      "Royal Mansour Marrakech",
      "La Mamounia",
      "Amanjena",
      "Kasbah Tamadot"
    ],
    "bestTime": "March \u2013 May & September \u2013 November",
    "currency": "Moroccan Dirham (MAD)",
    "article": {
      "intro": "An intoxicating gateway between Africa and the Mediterranean, Morocco dazzles with vibrant souks, fragrant spices, and royal palaces.",
      "body": [
        "In Marrakech, step through carved cedar doors into hidden oasis riads where marble courtyards are filled with orange trees, trickling fountains, and hand-cut zellij tiles. At the Royal Mansour, built by royal master craftsmen, underground service tunnels ensure your private three-story riad is maintained with discreet perfection.",
        "Venture into the Sahara by private 4x4 or helicopter to luxury nomadic encampments at Erg Chebbi. Ride Arabian horses across golden sand dunes at sunset before enjoying a candlelit feast accompanied by Berber acoustic lutes under a canopy of a million stars.",
        "In Fez, navigate the world's best preserved medieval city with a private historian, discovering hidden leather tanneries, 9th-century universities, and spice merchants blending wild saffron and rose water."
      ],
      "quote": "Morocco takes hold of your imagination and never lets go. Every alley is a gateway to another century.",
      "quoteAuthor": "Tariq Benjelloun, Moroccan Cultural Historian"
    }
  },
  {
    "slug": "uae",
    "name": "Dubai & UAE",
    "description": "Architectural marvels, futuristic glamour, golden desert reserves, and ultra-luxury hospitality.",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Summit Access at Burj Khalifa Lounge",
      "Desert Conservation Reserve Falconry & Luxury Dinner",
      "Abu Dhabi Louvre & Grand Mosque VIP Tour",
      "Private Superyacht Marina Cruise"
    ],
    "hotels": [
      "Burj Al Arab Jumeirah",
      "One&Only The Palm",
      "Qasr Al Sarab Desert Resort",
      "Atlantis The Royal"
    ],
    "bestTime": "November \u2013 March",
    "currency": "UAE Dirham (AED)",
    "article": {
      "intro": "Where impossible dreams become towering steel and marble realities, the United Arab Emirates defines the cutting edge of ultra-luxury.",
      "body": [
        "In Dubai, luxury knows no boundaries. Stay at the world-famous Burj Al Arab, where duplex suites feature 24-carat gold accents, private butler service, and Hermes amenities. Experience world-record architectural feats, private shopping suites at premier fashion houses, and Michelin-starred dining underwater.",
        "Just an hour from the gleaming skyline, the serene desert takes over. At Qasr Al Sarab, situated in the Empty Quarter\u2014the largest uninterrupted sand desert in the world\u2014luxurious villas look out over towering red dunes where Arabian oryx roam free.",
        "In neighboring Abu Dhabi, marvel at the pure white domes of the Sheikh Zayed Grand Mosque and explore Jean Nouvel's floating dome at the Louvre Abu Dhabi, blending contemporary culture with ancient Bedouin heritage."
      ],
      "quote": "Dubai is where the world's most ambitious architectural dreams are built in the sand and brought to vivid life.",
      "quoteAuthor": "Rashid Al Falasi, UAE Heritage Architect"
    }
  },
  {
    "slug": "south-africa",
    "name": "South Africa",
    "description": "Dramatic coastlines, the legendary Big Five safari, award-winning winelands, and vibrant culture.",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/safari.mp4",
    "videoUrl": "/videos/safari.mp4",
    "experiences": [
      "Singita Sabi Sand Big Five Private Tracking",
      "Franschhoek & Stellenbosch Private Winemaker Tasting",
      "Cape Town Table Mountain Helicopter & Atlantic Flight",
      "Hermanus Whale Watching Private Boat Charter"
    ],
    "hotels": [
      "Singita Boulders Lodge",
      "The Silo Hotel Cape Town",
      "La Residence Franschhoek",
      "Royal Malewane"
    ],
    "bestTime": "May \u2013 September (Safari) & November \u2013 March (Cape Town)",
    "currency": "South African Rand (ZAR)",
    "article": {
      "intro": "South Africa is known as the World in One Country \u2014 an extraordinary destination pairing thrilling Big Five wildlife encounters with world-class cosmopolitan elegance.",
      "body": [
        "Begin in Cape Town, where dramatic Table Mountain rises directly above the Atlantic and Indian oceans. Stay at The Silo, a triumph of architectural design towering above the Victoria & Alfred Waterfront, before taking a private helicopter flight along the rugged Twelve Apostles coastline to the Cape of Good Hope.",
        "A short drive away, the historic valleys of Franschhoek and Stellenbosch beckon with Cape Dutch architecture and world-renowned vineyards. Dine at South Africa's most acclaimed farm-to-table restaurants, staying in palatial suites filled with museum-quality art at La Residence.",
        "The ultimate highlight awaits in the Greater Kruger and Sabi Sand reserves. Here, Singita and Royal Malewane provide the gold standard of African safari: private tracking of leopards and lion prides, followed by bush banquets under acacia trees and evenings around roaring firepits."
      ],
      "quote": "Africa changes you forever. Once you have heard lions roaring under a star-filled sky, your heart always stays here.",
      "quoteAuthor": "David Ndlovu, Master Safari Ranger"
    }
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "description": "Glacial fiords, majestic alpine peaks, geothermal wonderlands, and world-renowned luxury lodges.",
    "imageUrl": "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Milford Sound Helicopter Flight & Glacier Landing",
      "Queenstown Heli-Skiing & Remote Lake Picnic",
      "Marlborough Sound Private Wine & Oyster Cruise",
      "Rotorua Indigenous Maori Private Cultural Exchange"
    ],
    "hotels": [
      "Blanket Bay Lodge",
      "The Farm at Cape Kidnappers",
      "Matakauri Lodge Queenstown",
      "Huka Lodge Lake Taupo"
    ],
    "bestTime": "November \u2013 April",
    "currency": "New Zealand Dollar (NZD)",
    "article": {
      "intro": "At the ends of the earth, New Zealand presents landscapes of staggering, untouched beauty that feel like a cinematic dream.",
      "body": [
        "From the jagged snow peaks of the Southern Alps to the sheer waterfalls plunging into Milford Sound, New Zealand offers adrenaline and serenity in equal measure. Board a private helicopter in Queenstown to land on remote hanging glaciers, sipping chilled Central Otago Pinot Noir beside an alpine tarn.",
        "New Zealand's luxury lodge culture is globally renowned for its warmth and understatement. At Blanket Bay, timber and river-stone lodges overlook crystal-clear Lake Wakatipu. In Hawke's Bay, Cape Kidnappers sits on rolling coastal cliffs that plunge hundreds of feet down into the Pacific Ocean.",
        "Encounter ancient Maori traditions, fly-fish in pristine alpine rivers, and discover why this remote paradise captures the hearts of discerning travelers across generations."
      ],
      "quote": "New Zealand is a country of pure elemental power. Its landscapes restore something primal and beautiful in the human spirit.",
      "quoteAuthor": "Aroha Henare, Kiwi Explorer"
    }
  },
  {
    "slug": "peru",
    "name": "Peru",
    "description": "Ancient Inca citadels, mystical Sacred Valley peaks, Amazon rainforest, and culinary supremacy.",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Machu Picchu VIP Dawn Entry with Archaeologist",
      "Belmond Hiram Bingham Luxury Train Journey",
      "Lima Gastronomy Tour at Central & Maido",
      "Lake Titicaca Private Reed Island Homestay"
    ],
    "hotels": [
      "Belmond Sanctuary Lodge Machu Picchu",
      "Inkaterra Hacienda Urubamba",
      "Palacio Nazarenas Cusco",
      "Explora Valle Sagrado"
    ],
    "bestTime": "May \u2013 October",
    "currency": "Peruvian Sol (PEN)",
    "article": {
      "intro": "Peru is an empire of high altitude wonder, where the stone engineering of the Incas meets the world's most inventive culinary scene.",
      "body": [
        "Arriving at Machu Picchu aboard the 1920s-style Belmond Hiram Bingham train, sip pisco sours while the Urubamba River roars alongside the tracks. Stay at Belmond Sanctuary Lodge\u2014the only hotel located directly beside the citadel gates\u2014enabling private sunrise entry before the trains bring day crowds.",
        "In the Sacred Valley of the Incas, colonial haciendas and luxury retreats offer acclimatization among terraced maize fields and snow-dusted Andean peaks. Experience ancient weaving traditions in highland Quechua villages and visit the salt mines of Maras.",
        "In Lima, discover why the capital holds multiple top spots in the World's 50 Best Restaurants list, sampling extraordinary ceviches, Amazonian ingredients, and Andean tubers re-imagined by culinary geniuses."
      ],
      "quote": "In the presence of Machu Picchu, time ceases to exist. You stand in awe of human devotion and Andean majesty.",
      "quoteAuthor": "Carlos Huaman, Inca Archaeologist"
    }
  },
  {
    "slug": "kenya",
    "name": "Kenya",
    "description": "The world's greatest wildlife spectacle, golden savannas, and iconic luxury tented camps.",
    "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/safari.mp4",
    "videoUrl": "/videos/safari.mp4",
    "experiences": [
      "Sunrise Hot Air Balloon Safari over Masai Mara",
      "Great Migration River Crossing Front Row Access",
      "Private Black Rhino Tracking in Lewa Conservancy",
      "Masai Warrior Guided Bush Walk"
    ],
    "hotels": [
      "Angama Mara",
      "Mahali Mzuri (Virgin Limited Edition)",
      "andBeyond Bateleur Camp",
      "Segera Retreat Laikipia"
    ],
    "bestTime": "July \u2013 October (Migration) & January \u2013 March (Calving)",
    "currency": "Kenyan Shilling (KES)",
    "article": {
      "intro": "Kenya is the original home of safari, where golden acacias stretch to the horizon and millions of wildebeest thunder across the plains.",
      "body": [
        "Suspended high on the edge of the Great Rift Valley, Angama Mara looks down upon the endless plains where 'Out of Africa' was filmed. Float silently in a hot air balloon at sunrise as the golden light awakens vast herds of zebras, giraffes, and elephants traversing the savanna below.",
        "Witness the drama of the Great Migration as over a million animals brave predator-filled river crossings. Our bespoke private 4x4 safaris are guided by native Maasai naturalists whose generations of tracking experience guarantee unmatched wildlife encounters.",
        "In the evening, return to lavish tented camps featuring copper bathtubs, private plunge pools, and fine dining under star-filled African skies, serenaded by the distant roar of lions."
      ],
      "quote": "There is something about safari life that makes you forget all your sorrows and feel as if you had drunk half a bottle of champagne.",
      "quoteAuthor": "Karen Blixen"
    }
  },
  {
    "slug": "vietnam",
    "name": "Vietnam",
    "description": "Emerald limestone bays, lantern-lit heritage alleys, dramatic landscapes, and refined culinary art.",
    "imageUrl": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/safari.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Private Ultra-Luxury Cruise in Lan Ha & Bai Tu Long Bay",
      "Hoi An Ancient Town Evening Lantern Walk",
      "Hanoi French Quarter Culinary Expedition with Master Chef",
      "Mekong Delta Private River Yacht Exploration"
    ],
    "hotels": [
      "Amanoi Vinh Hy Bay",
      "Capella Hanoi",
      "Four Seasons Resort The Nam Hai",
      "Six Senses Con Dao"
    ],
    "bestTime": "November \u2013 April",
    "currency": "Vietnamese Dong (VND)",
    "article": {
      "intro": "Vietnam is a land of poetically draped karst mountains, timeless rivers, and an exhilarating culinary legacy that spans millennia.",
      "body": [
        "In the north, board a private luxury junk to glide through the mystical emerald waters of Lan Ha Bay, kayak into hidden sea caves, and dine on fresh lobster under towering limestone pinnacles. In Hanoi, colonial French architecture houses boutique havens like Capella Hanoi, styled as a roaring 1920s opera mansion.",
        "Further south, the lantern-lit streets of ancient Hoi An reflect on the Thu Bon river. Bicycle through fragrant herb gardens, commission bespoke silk tailoring from master artisans, and relax at Four Seasons The Nam Hai along a pristine private beachfront.",
        "In Vinh Hy Bay, Amanoi perches atop cliffs overlooking wild coastal national parks. Here, world-class wellness pavilions and clifftop infinity pools offer a haven of absolute calm and natural grandeur."
      ],
      "quote": "Vietnam captures your senses with the fragrant steam of fresh pho, the clink of ice in robust coffee, and smiles that make you feel instantly at home.",
      "quoteAuthor": "Nguyen Duc Minh, Heritage Storyteller"
    }
  },
  {
    "slug": "spain",
    "name": "Spain",
    "description": "Flamenco passion, Moorish palaces, Michelin-starred gastronomy, and sun-soaked Mediterranean living.",
    "imageUrl": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private After-Hours Tour of Alhambra Palace Granada",
      "San Sebasti\u00e1n Pintxos Crawl with Basque Culinary Master",
      "Private Flamenco Masterclass in Seville's Triana Quarter",
      "Exclusive Gaud\u00ed Architecture Access in Barcelona"
    ],
    "hotels": [
      "Mandarin Oriental Ritz Madrid",
      "Finca Cortesin Costa del Sol",
      "Cotton House Hotel Barcelona",
      "Parador de Granada"
    ],
    "bestTime": "April \u2013 June & September \u2013 November",
    "currency": "Euro (EUR)",
    "article": {
      "intro": "Spain is a land of passionate contrasts, where Moorish architectural wonders meet cutting-edge gastronomy and vibrant Andalusian soul.",
      "body": [
        "In Barcelona, marvel at the surreal genius of Antoni Gaud\u00ed with private after-hours access to the Sagrada Fam\u00edlia and Casa Batll\u00f3 before heading north to San Sebasti\u00e1n\u2014the undisputed gourmet capital boasting more Michelin stars per capita than nearly anywhere on earth.",
        "In Andalusia, step into the breathtaking Moorish halls of the Alhambra in Granada, where intricate plaster arabesques and courtyard fountains transport you to the Golden Age of Islam. Experience authentic flamenco in the atmospheric caves of Seville, feeling the percussive pulse of guitar and dance.",
        "Complete your journey in Madrid, exploring the masterworks of Vel\u00e1zquez and Goya at the Prado with an art historian, followed by late-night tapas at secret wine bars beloved by local epicures."
      ],
      "quote": "Spain is a fascinating country with a vibrant soul that catches your spirit and makes every moment feel deeply alive.",
      "quoteAuthor": "Sofia Morales, Spanish Art & Wine Curatress"
    }
  },
  {
    "slug": "egypt",
    "name": "Egypt",
    "description": "Five thousand years of pharaonic monuments, golden deserts, and timeless Nile river journeys.",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/safari.mp4",
    "videoUrl": "/videos/safari.mp4",
    "experiences": [
      "Private Entry between the Paws of the Great Sphinx",
      "VIP Access to King Tut & Royal Mummies",
      "Dahabiya Luxury Private Sailing on the Nile",
      "Sunrise Hot Air Balloon Flight over Luxor Valley of the Kings"
    ],
    "hotels": [
      "Sofitel Legend Old Cataract Aswan",
      "Mena House Cairo (Pyramids View)",
      "Four Seasons Hotel Cairo at Nile Plaza",
      "Al Moudira Hotel Luxor"
    ],
    "bestTime": "October \u2013 April",
    "currency": "Egyptian Pound (EGP)",
    "article": {
      "intro": "The cradle of human civilization, Egypt reveals mysteries that have captivated philosophers, conquerors, and travelers for five millennia.",
      "body": [
        "Stand between the colossal stone paws of the Great Sphinx at dawn, with the Giza Pyramids rising behind in the morning mist\u2014an exclusive privilege arranged away from the tourist crowds. In Cairo, inspect the gold death mask of Tutankhamun and newly unveiled royal treasures at the Grand Egyptian Museum with a leading Egyptologist.",
        "Board a bespoke private Dahabiya\u2014an authentic wooden sailing vessel with grand luxury suites\u2014to cruise the timeless Nile. Drift past papyrus reeds and date palms, visiting the riverside temples of Kom Ombo and Edfu as the sun sets over the golden desert.",
        "In Aswan, sit on the terrace of the historic Sofitel Legend Old Cataract where Agatha Christie penned 'Death on the Nile', sipping mint tea as traditional feluccas glide across the sapphire water."
      ],
      "quote": "Egypt is the gift of the Nile, and to travel upon its waters is to journey directly through the memory of humanity.",
      "quoteAuthor": "Dr. Zahi Mansour, Egyptologist"
    }
  },
  {
    "slug": "australia",
    "name": "Australia",
    "description": "Cosmopolitan harbor cities, the ancient sacred Outback, and the vibrant Great Barrier Reef.",
    "imageUrl": "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Yacht Charter on Sydney Harbour at Sunset",
      "Helicopter Flight over Heart Reef & Whitsundays",
      "Sunrise Walk at Sacred Uluru with Anangu Elder",
      "Daintree Rainforest Indigenous Eco-Tour"
    ],
    "hotels": [
      "Longitude 131\u00b0 Uluru",
      "Qualia Great Barrier Reef (Hamilton Island)",
      "The Langham Sydney",
      "Southern Ocean Lodge Kangaroo Island"
    ],
    "bestTime": "September \u2013 November & March \u2013 May",
    "currency": "Australian Dollar (AUD)",
    "article": {
      "intro": "A sun-blessed continent of vast dimensions, Australia pairs relaxed cosmopolitan luxury with some of the earth's oldest ecosystems.",
      "body": [
        "In Sydney, wake up to views of the Opera House and Harbour Bridge from your waterfront suite. Sail across the sparkling harbor on a private catamaran, enjoying fresh Sydney rock oysters and Australian sparkling wine as the sun dips below the horizon.",
        "Travel inland to the ancient Red Centre, where the monolith of Uluru rises dramatically from rust-red desert sands. Stay at Longitude 131\u00b0, where luxury tented pavilions feature uninterrupted views of Uluru from your private daybed, illuminated at night by Bruce Munro's Field of Light installation.",
        "In tropical Queensland, Qualia on Hamilton Island offers world-class seclusion at the gateway to the Great Barrier Reef. Helicopter over the iconic Heart Reef and snorkel amidst kaleidoscopic corals and gentle sea turtles in total luxury."
      ],
      "quote": "Australia is vast, ancient, and endlessly magnificent. It is a continent that invites you to breathe deeper and live bigger.",
      "quoteAuthor": "Jack Callahan, Australian Outback Explorer"
    }
  }
,
  {
    "slug": "shimla-manali",
    "name": "Shimla & Manali",
    "description": "Snow-capped Himalayan vistas, pine forests, colonial charm, and thrilling mountain passes.",
    "imageUrl": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Private Toy Train Journey to Shimla",
      "Solang Valley & Rohtang Pass Helicopter Excursion",
      "Luxury Cedar Wood Chalet Stays with Mountain Views",
      "Old Manali Cafe Trail & Apple Orchard Walks"
    ],
    "hotels": [
      "The Oberoi Cecil Shimla",
      "Wildflower Hall Shimla in the Himalayas",
      "The Himalayan Manali",
      "Span Resort & Spa"
    ],
    "bestTime": "March – June & October – February",
    "currency": "Indian Rupee (INR)",
    "article": {
      "intro": "High in the embrace of Himachal Pradesh, Shimla and Manali present the quintessential Himalayan romance.",
      "body": [
        "Breathe in crisp pine air as you stroll along the historic Ridge in Shimla, before retreating to heritage mountain resorts where fireplaces crackle with warmth.",
        "In Manali, majestic snow-clad summits tower over the roaring Beas River. Enjoy guided treks, paragliding over Solang Valley, and scenic drives through the Atal Tunnel to the mystical landscape of Sissu in Lahaul.",
        "Curated by Sobhavi Travels with luxury private 4x4 vehicles, dedicated drivers, and handpicked boutique resorts."
      ],
      "quote": "The mountain breeze and snow peaks gave our family peace we had long forgotten.",
      "quoteAuthor": "— The Kapoor Family, Chandigarh"
    }
  },
  {
    "slug": "singapore",
    "name": "Singapore",
    "description": "A futuristic garden metropolis blending luxury shopping, world-class entertainment, and rich multicultural heritage.",
    "imageUrl": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Marina Bay Sands SkyPark & Infinity Pool",
      "Gardens by the Bay VIP Night Light Show",
      "Universal Studios & Sentosa Island Cable Car",
      "Michelin Hawker Feast & Private Yacht to Lazarus Island"
    ],
    "hotels": [
      "Marina Bay Sands",
      "Raffles Singapore",
      "The Ritz-Carlton Millenia Singapore",
      "Capella Singapore Sentosa"
    ],
    "bestTime": "Year Round",
    "currency": "Singapore Dollar (SGD)",
    "article": {
      "intro": "Singapore is Asia's premier global city of the future — vibrant, spotless, safe, and endlessly entertaining.",
      "body": [
        "Marvel at the illuminated Supertrees rising into the twilight sky at Gardens by the Bay, or take in 360-degree city views from the world-famous infinity pool atop Marina Bay Sands.",
        "Families will relish the thrills of Sentosa Island and Universal Studios, while food enthusiasts explore Michelin-rated street food stalls and chic riverside dining at Clarke Quay.",
        "Sobhavi Travels provides seamless fast-track visa processing, luxury airport limousines, and pre-booked VIP attraction tickets."
      ],
      "quote": "Singapore with Sobhavi Travels was an absolute dream for our kids and us alike.",
      "quoteAuthor": "— Ananya & Rohit, Delhi"
    }
  },
  {
    "slug": "rajasthan",
    "name": "Rajasthan",
    "description": "Royal palaces, golden Thar desert dunes, vibrant fortresses, and legendary Rajput hospitality.",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/adventure.mp4",
    "experiences": [
      "Private Sunset Boat Cruise on Lake Pichola, Udaipur",
      "Heritage Palace Living in Jaipur and Jodhpur",
      "Thar Desert Luxury Camp & Starlit Folk Gala",
      "Curated Gem & Textile Walk through Johari Bazaar"
    ],
    "hotels": [
      "Taj Lake Palace Udaipur",
      "Rambagh Palace Jaipur",
      "Umaid Bhawan Palace Jodhpur",
      "Sujan The Serai Jaisalmer"
    ],
    "bestTime": "October – March",
    "currency": "Indian Rupee (INR)",
    "article": {
      "intro": "Rajasthan is a timeless celebration of royal opulence, vibrant desert colors, and centuries of chivalric history.",
      "body": [
        "From the shimmering white marble courtyards of Udaipur's Lake Palace to the majestic amber ramparts guarding Jaipur, Rajasthan invites you into the lives of maharajas and maharanis.",
        "Journey deep into the golden dunes of Jaisalmer, where luxury tented camps offer campfire sitars under an unpolluted canopy of stars. Stroll through the blue alleyways of Jodhpur under the commanding gaze of Mehrangarh Fort.",
        "Sobhavi Travels delivers personalized royal hospitality: private vintage car transfers, heritage suite bookings, and exclusive palace dining arranged solely for you."
      ],
      "quote": "Rajasthan felt like living inside a fairy tale of royal courts and desert melodies.",
      "quoteAuthor": "— Vikram & Shweta, Bangalore"
    }
  },
  {
    "slug": "kerala",
    "name": "Kerala",
    "description": "Serene backwaters, emerald tea gardens, Ayurvedic healing, and golden Arabian Sea beaches.",
    "imageUrl": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Private Traditional Houseboat Cruise across Vembanad Lake",
      "Munnar Organic Tea Estate Walk & Tasting",
      "Authentic Kerala Ayurvedic Wellness Therapies",
      "Sunset Canoe Gliding through Village Canals"
    ],
    "hotels": [
      "Kumarakom Lake Resort",
      "Taj Green Cove Resort & Spa Kovalam",
      "The Windflower Resort Munnar",
      "Brunton Boatyard Kochi"
    ],
    "bestTime": "September – March",
    "currency": "Indian Rupee (INR)",
    "article": {
      "intro": "Kerala, rightfully known as God's Own Country, is an earthly haven of tranquil waterways, lush cardamom hills, and profound rejuvenation.",
      "body": [
        "Drift silently along the palm-fringed backwaters of Alleppey aboard your private air-conditioned kettuvallam, with a dedicated chef preparing fresh karimeen pollichathu as you glide past timeless riverside villages.",
        "In Munnar, wake up to swirling mountain mist hovering over rolling emerald tea carpets. Indulge in authentic centuries-old Ayurvedic therapies designed to restore balance and vitality.",
        "Sobhavi Travels crafts every Kerala journey with seamless luxury: hand-picked private houseboats, boutique heritage estates, and attentive private drivers."
      ],
      "quote": "The stillness of the backwaters and the scent of the tea estates brought us total peace.",
      "quoteAuthor": "— Deepak & Meera, Hyderabad"
    }
  },
  {
    "slug": "dubai",
    "name": "Dubai",
    "description": "Futuristic skyline, world-class entertainment, red desert dune safaris, and ultra-luxury shopping.",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/adventure.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Burj Khalifa 148th Floor Sky Lounge Access",
      "VIP Red Dunes Desert Safari with Starlit Barbecue",
      "Private Yacht Charter from Dubai Marina",
      "Aquaventure Waterpark & Lost Chambers Aquarium"
    ],
    "hotels": [
      "Burj Al Arab Jumeirah",
      "Atlantis The Royal",
      "One&Only Royal Mirage",
      "Address Downtown Dubai"
    ],
    "bestTime": "October – April",
    "currency": "UAE Dirham (AED)",
    "article": {
      "intro": "Dubai is the world's most glamorous playground where record-breaking architectural marvels meet golden Arabian desert horizons.",
      "body": [
        "Ascend into the clouds at the Burj Khalifa, witness the dancing fountains of downtown, and relax on the palm-fringed private beaches of Jumeirah.",
        "Experience thrilling dune bashing in 4x4 land cruisers across deep crimson dunes, followed by traditional belly dance, falconry, and gourmet Arabian cuisine under the stars.",
        "Sobhavi Travels arranges express UAE visas, luxury airport transfers, and VIP express passes to ensure an effortless holiday."
      ],
      "quote": "Everything in Dubai was grand, flawless, and executed with extreme precision by Sobhavi Travels.",
      "quoteAuthor": "— Rajesh & Sneha, Pune"
    }
  },
  {
    "slug": "andaman",
    "name": "Andaman",
    "description": "Turquoise waters, powder-white coral sands, Radhanagar Beach, and premier marine adventures.",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "heroVideo": "/videos/ocean.mp4",
    "videoUrl": "/videos/ocean.mp4",
    "experiences": [
      "Sunset at Radhanagar Beach (Asia's Best Beach)",
      "Private Scuba Diving & Sea Walk at Elephant Beach",
      "Cellular Jail Light & Sound Historic Presentation",
      "Private Luxury Ferry to Havelock & Neil Island"
    ],
    "hotels": [
      "Taj Exotica Resort & Spa, Andamans",
      "Barefoot at Havelock",
      "Symphony Palms Beach Resort",
      "SeaShell Havelock"
    ],
    "bestTime": "October – May",
    "currency": "Indian Rupee (INR)",
    "article": {
      "intro": "The Andaman and Nicobar archipelago is an idyllic tropical escape with crystal-clear turquoise waters and pristine white beaches.",
      "body": [
        "Unwind on the world-renowned shores of Radhanagar Beach on Havelock Island, often ranked among Asia's top beaches for its turquoise calm and powdery white sands.",
        "Dive into vibrant underwater coral gardens teeming with marine life, or glide across crystal lagoons on high-speed private catamarans.",
        "Sobhavi Travels coordinates premium beachfront villas, Makruzz luxury ferry tickets, airport welcomes, and private island guides for a seamless experience."
      ],
      "quote": "Andaman felt like our own private paradise. The Taj villa and pristine beaches were unforgettable.",
      "quoteAuthor": "— Priya & Anish, Bengaluru"
    }
  }
];

export const popularJourneys: Journey[] = [
  {
    "slug": "highlights-of-rajasthan",
    "name": "Highlights of Rajasthan",
    "subtitle": "Jaipur (2N) • Jodhpur (1N) • Udaipur (2N)",
    "duration": "5 Nights / 6 Days",
    "destination": "Rajasthan",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Starting from ₹25,000 / person",
    "priceIncludesText": "Price Includes: 3 Hotel(s), 13 Sightseeing, Daily Breakfast, Airport Transfers, Intercity AC Tourist Cab",
    "packageOptions": [
      { "category": "Standard Category", "price": "₹25,000 per person sharing", "details": "Jaipur: Clarks Inn Express (2N) • Jodhpur: Chandra Grand (1N) • Udaipur: Mukund Vilas (2N)" },
      { "category": "Deluxe Category", "price": "₹26,834 per person sharing", "details": "Jaipur: The Rudra Vilas (2N) • Jodhpur: Lords Inn (1N) • Udaipur: Crimson Park Shree Kanak (2N)" },
      { "category": "Luxury Category", "price": "₹31,500 per person sharing", "details": "Jaipur: Fern Ecotel (2N) • Jodhpur: Park Plaza (1N) • Udaipur: Radiant Globus Hotels & Resorts (2N)" }
    ],
    "overview": "Experience the colours, forts, palaces and lakes of Rajasthan with accommodation, daily breakfast, private transfers, intercity transport and sightseeing across Jaipur (2 Nights), Jodhpur (1 Night), and Udaipur (2 Nights).",
    "highlights": [
      "Amer Fort & City Palace in Jaipur",
      "Ajmer Sharif & Brahma Temple Pushkar",
      "Mehrangarh Fort, Phool Mahal & Sheesh Mahal in Jodhpur",
      "Ranakpur Jain Temples & Udaipur Lake Palace"
    ],
    "article": {
      "intro": "Experience the regal heritage and architecture of Rajasthan through an authentic 6-day voyage across the Golden Triangle of Jaipur, Jodhpur, and Udaipur.",
      "body": [
        "Arrive in the royal capital of Jaipur, where the sandstone walls of Amer Fort and the intricate courtyards of City Palace showcase the heights of Rajput elegance.",
        "Journey onward to the Blue City of Jodhpur via the sacred ghats of Pushkar and historic Ajmer. Marvel at the sheer cliff ramparts of Mehrangarh Fort and the royal Sheesh Mahal.",
        "Conclude in Udaipur, the City of Lakes, with half-day sightseeing of Bharatiya Lok Kala Mandal, Jag Mandir, and Saheliyon Ki Bari, relaxing along serene waterfront promenades."
      ],
      "quote": "Rajasthan is not merely a destination; it is an aristocratic state of mind where every palace threshold welcomes you as royalty.",
      "quoteAuthor": "Sobhavi Royal Concierge"
    },
    "itinerary": [
      {
        "day": "Day 01",
        "title": "ARRIVE IN JAIPUR",
        "desc": "Arrive in Jaipur and transfer by private vehicle from the airport to your hotel. Check in and relax.",
        "sightseeing": ["Jaipur Airport / Railway Station to Hotel Private Transfer"],
        "transfers": "Airport to Hotel : Private AC Vehicle",
        "meals": { "breakfast": false, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 02",
        "title": "JAIPUR FULL-DAY SIGHTSEEING",
        "desc": "After breakfast, proceed for a full-day Jaipur city tour covering Amer Fort, City Palace, Hawa Mahal and Jantar Mantar.",
        "sightseeing": ["Amer Fort", "City Palace Jaipur", "Hawa Mahal", "Jantar Mantar"],
        "transfers": "Sightseeing : Private AC Vehicle",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 03",
        "title": "JAIPUR - AJMER - PUSHKAR - JODHPUR (400 KM)",
        "desc": "After breakfast, drive to Jodhpur. En route, visit Ajmer and Pushkar, including Brahma Temple, Dargah and Sagar Lake.",
        "sightseeing": ["Ajmer Sharif Dargah", "Brahma Temple Pushkar", "Pushkar Sagar Lake"],
        "transfers": "Intercity Drive : Private AC Vehicle (400 km)",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 04",
        "title": "JODHPUR - RANAKPUR - UDAIPUR (300 KM)",
        "desc": "After breakfast, proceed for Jodhpur sightseeing, including Clock Tower, Mehrangarh Fort, Phool Mahal and Sheesh Mahal. Continue to Udaipur via Ranakpur.",
        "sightseeing": ["Mehrangarh Fort", "Clock Tower", "Phool Mahal", "Sheesh Mahal", "Ranakpur Jain Temples"],
        "transfers": "Intercity Drive : Private AC Vehicle (300 km)",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 05",
        "title": "UDAIPUR CITY SIGHTSEEING",
        "desc": "After breakfast, proceed for a half-day Udaipur city tour covering Bharatiya Lok Kala Mandal, City Palace, Jag Mandir and Saheliyon Ki Bari.",
        "sightseeing": ["City Palace Udaipur", "Jag Mandir Island", "Saheliyon Ki Bari", "Bharatiya Lok Kala Mandal"],
        "transfers": "Sightseeing : Private AC Vehicle",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 06",
        "title": "DEPART UDAIPUR",
        "desc": "After breakfast, transfer by private vehicle to Udaipur Airport or Railway Station for your onward journey.",
        "sightseeing": ["Hotel to Udaipur Airport / Railway Station Transfer"],
        "transfers": "Hotel to Airport/Station : Private AC Vehicle",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      }
    ],
    "included": [
      "5 nights' accommodation at the hotels listed above or similar-category alternate hotels",
      "Daily buffet breakfast at all hotels",
      "Private airport and railway-station transfers as listed in the itinerary",
      "Intercity transfers and sightseeing by air-conditioned All India Tourist Permit vehicle",
      "Road taxes, parking fees, fuel charges and interstate taxes",
      "13 sightseeing points as listed in the itinerary"
    ],
    "notIncluded": [
      "Airfare and train fare",
      "Monument entrance fees and local guide services",
      "Optional rides and activities, including elephant or jeep ride at Amber Fort and common boat ride on Lake Pichola",
      "Lunch, dinner and any meals not mentioned under inclusions",
      "Personal expenses such as tips, porterage, laundry, telephone charges, drinks and camera fees",
      "Travel insurance, health insurance, visa fees and RT-PCR tests, if applicable",
      "Vehicle use on leisure days or for additional shopping, market or restaurant visits",
      "Costs caused by flight cancellation, bad weather, roadblocks, accidents or delays beyond control",
      "GST as per government regulations"
    ],
    "termsAndConditions": [
      "Rates are dynamic and subject to availability and change at the time of confirmation.",
      "Rates do not apply during peak season or blackout dates unless specifically confirmed.",
      "The quoted rate is valid for 24 hours from the date of quotation.",
      "Rates are applicable only to Indian nationals.",
      "Rooms are not held until written confirmation is received.",
      "Listed hotels may be replaced with similar or next-best available hotels. Any rate difference will apply.",
      "Hotel check-in is at 2:00 PM and check-out is at 12:00 noon.",
      "The vehicle is provided only as per the itinerary and is not at disposal.",
      "Night driving is not permitted. Guests should leave in time to reach the next destination before 8:00 PM.",
      "Christmas and New Year's Eve dinner supplements are mandatory where applicable.",
      "Any new government tax, local tax amendment or fuel-price increase may change the tour price.",
      "All Rajasthan monuments remain closed on Dhulandi, the day after Holi.",
      "Special requests such as Jain meals or early check-in must be submitted by email at least 72 hours before arrival and remain subject to availability.",
      "No refund is provided for unused services.",
      "100% advance payment is required at the time of booking."
    ],
    "cancellationPolicy": [
      "Cancellation within 60 days of departure: 100% of the total package cost.",
      "Cancellation more than 60 days before departure: ₹10,000 cancellation charge."
    ]
  },
  {
    "slug": "highlights-of-andaman",
    "name": "Highlights of Andaman and Nicobar",
    "subtitle": "Port Blair • Havelock Island (2N) • Neil Island (1N) • Port Blair (2N)",
    "duration": "5 Nights / 6 Days",
    "destination": "Andaman",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Starting from ₹25,000 / person",
    "priceIncludesText": "Price Includes: 3 Hotel(s), Private Ferry, Daily Breakfast, Airport & Jetty Transfers, AC Sightseeing",
    "packageOptions": [
      { "category": "Standard Category", "price": "₹25,000 per person sharing", "details": "Havelock: Radhakrishna Resort (2N) • Neil Island: Hotel Neha Palace (1N) • Port Blair: Hotel Seagull (2N)" },
      { "category": "Deluxe Category", "price": "₹28,000 per person sharing", "details": "Havelock: Haywizz Havelock Island Resort (2N) • Neil Island: Coral Garden Resort (1N) • Port Blair: Hotel Red Carpet (2N)" }
    ],
    "overview": "Experience the white-sand beaches, coral reefs and island ferries of the Andaman Islands with accommodation, daily breakfast, private transfers, inter-island ferry and sightseeing across Havelock Island (2N), Neil Island (1N), and Port Blair (2N).",
    "highlights": [
      "Blue Flag Certified Radhanagar Beach Sunset",
      "Elephant Beach Snorkelling & Water Sports",
      "Bharatpur & Laxmanpur Beaches on Neil Island",
      "Historic Ross Island & North Bay Coral Safari"
    ],
    "article": {
      "intro": "Discover the turquoise lagoons, exotic marine life, and lush tropical islands of Andaman on a seamless 6-day island voyage.",
      "body": [
        "Arrive in Port Blair and board a scenic ferry to Havelock Island, checking into your tropical beach resort before experiencing the world-renowned sunsets of Radhanagar Beach.",
        "Snorkel through pristine coral gardens at Elephant Beach, then journey across turquoise waters to Neil Island to witness the natural coral bridge formation at Howrah Bridge.",
        "Return to Port Blair to uncover the British and Japanese colonial history of Ross Island and embark on an exciting underwater coral safari at North Bay."
      ],
      "quote": "The Andaman Islands offer India's most pristine waters and coral ecosystems, curated with effortless island luxury.",
      "quoteAuthor": "Sobhavi Island Concierge"
    },
    "itinerary": [
      {
        "day": "Day 01",
        "title": "ARRIVE IN PORT BLAIR - FERRY TO HAVELOCK - RADHANAGAR BEACH",
        "desc": "Meet our representative at Veer Savarkar Airport, Port Blair, and transfer directly to the jetty for the ferry to Havelock Island. Transfer to hotel for check-in. In the late afternoon, visit the Blue Flag-certified Radhanagar Beach for a swim and relaxation.",
        "sightseeing": ["Veer Savarkar Airport Welcome", "High-Speed Private Ferry Transfer", "Radhanagar Beach Sunset"],
        "transfers": "Airport to Jetty & Ferry to Havelock",
        "meals": { "breakfast": false, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 02",
        "title": "HAVELOCK ISLAND - ELEPHANT BEACH",
        "desc": "After breakfast, proceed to Elephant Beach (Coral Beach), popular for snorkelling, Jet Ski rides, banana rides and sea walking. Reached by an 11-seater shared boat from the jetty.",
        "sightseeing": ["Elephant Beach (Coral Beach)", "Complimentary Snorkelling Experience", "Water Sports Hub"],
        "transfers": "Speed Boat to Elephant Beach",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 03",
        "title": "HAVELOCK ISLAND - NEIL ISLAND",
        "desc": "After breakfast, proceed to the jetty for the onward ferry to Neil Island. In the afternoon, visit Bharatpur Beach, Laxmanpur Beach for sunset views, and the Natural Bridge (Howrah Bridge).",
        "sightseeing": ["Bharatpur Beach", "Laxmanpur Sunset Point", "Natural Coral Bridge (Howrah Bridge)"],
        "transfers": "Inter-Island Ferry to Neil Island",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 04",
        "title": "NEIL ISLAND - PORT BLAIR - DAY AT LEISURE",
        "desc": "After breakfast, check out and board the ferry to Port Blair. On arrival, transfer to your hotel. The day is free for shopping and leisure.",
        "sightseeing": ["Port Blair City Waterfront", "Local Handicraft & Spice Markets"],
        "transfers": "Inter-Island Ferry to Port Blair",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 05",
        "title": "PORT BLAIR - ROSS ISLAND & NORTH BAY ISLAND",
        "desc": "After breakfast, board the speed boat to historic Ross Island to explore colonial heritage. Continue to North Bay Island (Coral Beach) for scuba diving, snorkelling, parasailing, and glass-bottom boat rides.",
        "sightseeing": ["Historic Ross Island Ruins", "North Bay Coral Safari Island", "Water Sports Complex"],
        "transfers": "Speed Boat Excursion",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 06",
        "title": "DEPART PORT BLAIR",
        "desc": "After breakfast, transfer to Port Blair airport for your onward journey with unforgettable island memories.",
        "sightseeing": ["Hotel to Port Blair Airport Transfer"],
        "transfers": "Hotel to Airport : Private AC Vehicle",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      }
    ],
    "included": [
      "5 nights' accommodation at the hotels listed above for the chosen category",
      "Meal plan CP: daily breakfast at all hotels",
      "Sightseeing as per the itinerary",
      "All monument, museum, cultural event and activity assistance as per itinerary",
      "Return airport and jetty transfers by air-conditioned vehicle",
      "All transportation for local sightseeing tours by air-conditioned vehicle",
      "Inter-island ferry transfers (Port Blair - Havelock - Neil - Port Blair) by private ferry"
    ],
    "notIncluded": [
      "Flights to and from Port Blair",
      "Lunch, dinner and any meals not mentioned under inclusions",
      "Travel or health insurance",
      "Guide services and guide fees",
      "Ross Island entry fee (₹50 per adult, ₹25 per child), payable directly at the island",
      "Personal expenses such as tips, porterage, laundry, telephone, drinks, camera fees and water sports",
      "Costs arising from flight cancellation, bad weather, or factors beyond control",
      "GST as per government regulations"
    ],
    "termsAndConditions": [
      "Package rates are dynamic and subject to availability and change at the time of confirmation.",
      "Rates are not valid during peak season, festival periods or blackout dates; supplements will apply.",
      "The quoted rate is valid for 24 hours from the date of quotation.",
      "Rates are applicable only to Indian nationals.",
      "Rooms are subject to availability at the time of booking and confirmed only after written confirmation.",
      "The itinerary can be altered at any point due to bad weather, ill health, or factors beyond control.",
      "The vehicle is provided only as per the itinerary and is not at disposal.",
      "No refund is provided for any unused services.",
      "Special requests such as Jain meals or early check-in must be submitted by email at least 72 hours before arrival.",
      "100% advance payment is required at the time of booking."
    ],
    "cancellationPolicy": [
      "Cancellation within 60 days of departure: 100% of the total package cost.",
      "Cancellation more than 60 days before departure: ₹10,000 cancellation charge."
    ]
  },
  {
    "slug": "highlights-of-kerala",
    "name": "Highlights of Kerala",
    "subtitle": "Cochin (1N) • Munnar (2N) • Thekkady (1N) • Alleppey (1N)",
    "duration": "5 Nights / 6 Days",
    "destination": "Kerala",
    "imageUrl": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Starting from ₹25,000 / person",
    "priceIncludesText": "Price Includes: 4 Hotel(s), Daily Breakfast, Private AC Cab with Driver, Periyar Safari, Alleppey Shikara Cruise",
    "packageOptions": [
      { "category": "Standard Category", "price": "₹25,000 per person sharing", "details": "Cochin: The Classik Fort (1N) • Munnar: The Arbour Resort (2N) • Thekkady: Tiger Trails (1N) • Alleppey: Pagoda Resorts (1N)" },
      { "category": "Deluxe Category", "price": "₹38,267 per person sharing", "details": "Cochin: Marine Inn Hotel (1N) • Munnar: Trivers Resort (2N) • Thekkady: Hotel CITADEL (1N) • Alleppey: Classic Regency (1N)" }
    ],
    "overview": "Explore Cochin's colonial heritage, the waterfalls and tea gardens of Munnar (2N), the wildlife and spice plantations of Thekkady (1N) and the backwaters of Alleppey (1N), with accommodation, daily breakfast and an air-conditioned cab.",
    "highlights": [
      "Fort Kochi Dutch Palace & Jewish Synagogue",
      "Cheeyapara Waterfalls & Munnar Tea Museum",
      "Mattupetty Dam & Kundala Echo Point",
      "Periyar Wildlife Tiger Reserve & Alleppey Shikara Cruise"
    ],
    "article": {
      "intro": "Uncover the lush greenery, spice-scented mountain air, and tranquil backwaters of God's Own Country across a 6-day private holiday.",
      "body": [
        "Begin in the historic trading port of Cochin, wandering past 16th-century European churches, Jewish synagogues, and Chinese fishing nets on Marine Drive.",
        "Ascend into the misty Western Ghats to Munnar, standing at 1,800m above sea level amidst rolling emerald tea plantations, roaring waterfalls, and serene mountain lakes.",
        "Explore the spice plantations and Periyar Lake wildlife sanctuary in Thekkady before unwinding along the tranquil backwater canals of Alleppey."
      ],
      "quote": "Kerala moves to an ancient, unhurried rhythm where every backwater canal and misty tea estate restores the soul.",
      "quoteAuthor": "Sobhavi Kerala Specialist"
    },
    "itinerary": [
      {
        "day": "Day 01",
        "title": "ARRIVE IN COCHIN - COCHIN SIGHTSEEING",
        "desc": "Our representative will welcome you at Cochin airport or railway station and transfer you to the hotel for check-in. Visit the Dutch Palace, Jewish Synagogue, St. Francis Church, Santa Cruz Basilica, and Marine Drive. Overnight in Cochin.",
        "sightseeing": ["Dutch Palace", "Jewish Synagogue", "St. Francis Church", "Santa Cruz Basilica", "Marine Drive"],
        "transfers": "Airport to Hotel & Sightseeing : Private AC Cab",
        "meals": { "breakfast": false, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 02",
        "title": "COCHIN - MUNNAR (1,800M ELEVATION)",
        "desc": "After breakfast, proceed to Munnar, known as 'Nature Lover's Paradise'. On the way, visit Cheeyapara Waterfalls and Valara Waterfalls, and see the lush tea gardens spread across the slopes of the hills. Overnight in Munnar.",
        "sightseeing": ["Cheeyapara Waterfalls", "Valara Waterfalls", "Emerald Tea Estates"],
        "transfers": "Intercity Drive : Private AC Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 03",
        "title": "MUNNAR HILL SIGHTSEEING",
        "desc": "After breakfast, proceed for Munnar sightseeing. Visit Mattupetty Dam, Kundala Dam Lake and Eco Point, where you can hear your own voice echo. Then visit the Tea Museum. Overnight in Munnar.",
        "sightseeing": ["Mattupetty Dam", "Kundala Dam Lake", "Echo Point", "Tata Tea Museum"],
        "transfers": "Sightseeing : Private AC Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 04",
        "title": "MUNNAR - THEKKADY (PERIYAR WILDLIFE)",
        "desc": "After breakfast, check out and proceed to Thekkady. Enjoy a spice plantation tour covering tea, coffee, pepper and cardamom, and a boat ride on Periyar Lake in the Tiger Reserve. In the evening, visit the local spice market. Overnight in Thekkady.",
        "sightseeing": ["Periyar Tiger Reserve Boat Safari", "Spice Plantation Guided Walk", "Kumily Spice Market"],
        "transfers": "Intercity Drive : Private AC Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 05",
        "title": "THEKKADY - ALLEPPEY BACKWATERS",
        "desc": "After breakfast, check out and proceed to Alappuzha (Alleppey), known as the 'Venice of the East'. Check in to the hotel and enjoy a scenic Shikara boat cruise to experience the tranquil backwaters. Overnight in Alleppey.",
        "sightseeing": ["Venice of the East Backwaters", "Palm-Fringed Canal Shikara Cruise", "Alleppey Beach"],
        "transfers": "Intercity Drive : Private AC Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      },
      {
        "day": "Day 06",
        "title": "DEPART FROM COCHIN",
        "desc": "After breakfast, transfer to Cochin airport or railway station for your onward journey with beautiful backwater memories.",
        "sightseeing": ["Hotel to Cochin Airport / Railway Station Drop"],
        "transfers": "Hotel to Airport/Station : Private AC Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      }
    ],
    "included": [
      "5 nights' accommodation in base category rooms at the hotels listed above for the chosen category",
      "Daily breakfast at all hotels (bed and breakfast plan)",
      "Air-conditioned cab for all transfers and sightseeing exactly as per the itinerary",
      "Airport transfers and intercity transfers",
      "Sightseeing as per the itinerary",
      "Toll, parking, driver's bata, road tax and fuel charges"
    ],
    "notIncluded": [
      "Flights to and from Cochin",
      "Lunch, dinner and any meals not mentioned under inclusions",
      "Entry fees to monuments and palaces, and ticket and activity charges",
      "Guide services and guide fees",
      "Travel or health insurance",
      "Ayurveda charges",
      "Porterage at hotels and airports, tips, laundry and personal expenses",
      "GST as per government regulations"
    ],
    "termsAndConditions": [
      "Package rates are dynamic and tentative, subject to change at the time of confirmation and dependent on availability.",
      "Rates are not valid on peak season or blackout dates.",
      "This is only a quotation; no reservation has been made and rooms are subject to availability.",
      "100% advance payment is required at the time of booking.",
      "The itinerary is prepared as per a morning arrival.",
      "Only non-AC rooms are provided in hill stations such as Munnar and Thekkady.",
      "Vehicle kilometre is calculated on a garage-to-garage basis; the cab is available between 08:00 and 18:00 hrs as per itinerary and is not at disposal.",
      "Most monuments remain closed on Mondays and on certain other days.",
      "No refund is provided for any unutilized service."
    ],
    "cancellationPolicy": [
      "Cancellation within 60 days of departure: 100% of the total package cost.",
      "Cancellation more than 60 days before departure: ₹10,000 cancellation charge."
    ]
  },
  {
    "slug": "exotic-shimla-manali",
    "name": "Exotic Shimla Manali",
    "subtitle": "Delhi • Shimla (2N) • Manali (3N) • Chandigarh",
    "duration": "5 Nights / 6 Days",
    "destination": "Shimla & Manali",
    "imageUrl": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Starting from ₹25,000 / person",
    "priceIncludesText": "Price Includes: 2 Hotel(s), 8 Sightseeing, Daily Breakfast & Dinner (MAP), Private Dedicated Cab, All Tolls & Parking",
    "packageOptions": [
      { "category": "Standard Category", "price": "₹25,000 per person on twin sharing", "details": "Shimla: Sukhsagar Regency (2N) • Manali: Sarthak Regency (3N)" }
    ],
    "overview": "Discover the colonial hill station charm of Shimla (2N) with Kufri excursion, and the majestic pine valleys of Manali (3N) with Hadimba Temple, Buddhist Monastery and Solang Valley, including breakfast & dinner daily and private cab.",
    "highlights": [
      "Scenic Drive from Delhi to Shimla Hills",
      "Kufri Himalayan National Park & Fagu Valley",
      "Kullu Valley & Pandoh Dam Enroute to Manali",
      "Hadimba Devi Temple & Solang Valley Snow Point"
    ],
    "article": {
      "intro": "Escape to the snow-dusted summits and alpine cedar forests of Himachal Pradesh on a classic 6-day Shimla & Manali mountain expedition.",
      "body": [
        "Depart Delhi for the cool heights of Shimla, exploring colonial architecture, Mall Road, and an exhilarating excursion to Kufri's panoramic Himalayan lookouts.",
        "Drive along the rushing Beas River through Kullu Valley to Manali, surrounded by towering snow-capped peaks, apple orchards, and sacred pine forests.",
        "Explore the ancient timber architecture of Hadimba Devi Temple, visit serene Tibetan monasteries, and venture into Solang Valley for thrilling alpine views."
      ],
      "quote": "The Himalayas do not simply give you a view; they give you a renewed perspective on life.",
      "quoteAuthor": "Sobhavi Mountain Concierge"
    },
    "itinerary": [
      {
        "day": "Day 01",
        "title": "DELHI - SHIMLA (350 KM, APPROX. 8-10 HRS)",
        "desc": "Pick up from Delhi railway station or airport and drive to Shimla by private cab. Check in to the hotel on arrival. Dinner and overnight in Shimla.",
        "sightseeing": ["Scenic Mountain Highway Drive", "Shimla Hotel Check-in"],
        "transfers": "Delhi to Shimla : Private Dedicated Cab (350 km)",
        "meals": { "breakfast": false, "lunch": false, "dinner": true }
      },
      {
        "day": "Day 02",
        "title": "SHIMLA CITY TOUR - KUFRI EXCURSION",
        "desc": "After breakfast, proceed for an excursion to Kufri, famous for its Himalayan National Park, adventure park, and Fagu valley. Dinner and overnight in Shimla.",
        "sightseeing": ["Kufri Himalayan Nature Park", "Fagu Valley Lookout", "Shimla Mall Road & Ridge"],
        "transfers": "Sightseeing : Private Dedicated Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": true }
      },
      {
        "day": "Day 03",
        "title": "SHIMLA - MANALI (265 KM, APPROX. 8-10 HRS)",
        "desc": "After breakfast, check out and drive to Manali. En route, visit Pandoh Dam, Hanogi Mata temple and Kullu Valley. Check in on arrival. Dinner and overnight in Manali.",
        "sightseeing": ["Pandoh Dam", "Hanogi Mata Temple", "Kullu Valley Riverbank & Shawl Weaving"],
        "transfers": "Intercity Drive : Private Dedicated Cab (265 km)",
        "meals": { "breakfast": true, "lunch": false, "dinner": true }
      },
      {
        "day": "Day 04",
        "title": "MANALI LOCAL SIGHTSEEING",
        "desc": "After breakfast, walk through the town visiting the Buddhist monastery and the ancient Hadimba Devi temple (built in 1553 CE in dense forest). Dinner and overnight in Manali.",
        "sightseeing": ["Hadimba Devi Temple (1553 CE)", "Tibetan Buddhist Monastery", "Vashisht Hot Springs"],
        "transfers": "Sightseeing : Private Dedicated Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": true }
      },
      {
        "day": "Day 05",
        "title": "MANALI - SOLANG VALLEY",
        "desc": "After breakfast, visit Solang Valley for mountain scenery and snow activities. Dinner and overnight in Manali.",
        "sightseeing": ["Solang Valley Alpine Pass", "Snow Activities & Paragliding Viewpoints"],
        "transfers": "Sightseeing : Private Dedicated Cab",
        "meals": { "breakfast": true, "lunch": false, "dinner": true }
      },
      {
        "day": "Day 06",
        "title": "MANALI - CHANDIGARH (280 KM, APPROX. 6-7 HRS)",
        "desc": "After breakfast, check out and drive to Chandigarh. Drop at airport or railway station for your onward journey.",
        "sightseeing": ["Manali to Chandigarh Highway", "Chandigarh Airport / Station Drop"],
        "transfers": "Drop Transfer : Private Dedicated Cab (280 km)",
        "meals": { "breakfast": true, "lunch": false, "dinner": false }
      }
    ],
    "included": [
      "5 nights' accommodation (2 nights in Shimla at Sukhsagar Regency & 3 nights in Manali at Sarthak Regency or similar)",
      "Daily breakfast and dinner at the hotels (MAP plan), as per the itinerary",
      "8 sightseeing tours, as per the itinerary",
      "Airport and railway station transfers and intercity transfers by private cab",
      "Sightseeing exactly as per the itinerary",
      "All tolls, parking, fuel charges and interstate permits"
    ],
    "notIncluded": [
      "Lunch on all days, and breakfast and lunch on Day 1; any meals not specified under Package Inclusions",
      "Visit to Snow Point / Rohtang Pass or Atal Tunnel beyond Gulaba Barrier (extra cost, subject to NGT permit)",
      "Pony and yak rides at Kufri",
      "Flights and train tickets to Delhi / from Chandigarh",
      "Entry fees at monuments and sightseeing points, and camera fees",
      "Guide services and guide fees",
      "Travel or health insurance and personal expenses"
    ],
    "termsAndConditions": [
      "Package rates are dynamic and subject to change at the time of confirmation; supplements apply during peak season.",
      "Rates are per person on twin sharing and are applicable strictly for resident Indian citizens.",
      "Check-in and check-out time at all properties is 12:00 noon.",
      "100% advance payment is required at the time of booking.",
      "Transport is by AC sedan (Etios or Dzire) or Innova depending on group size. The air-conditioning will not operate in the hills.",
      "All monuments are closed on Mondays, and Rohtang Pass is closed on Tuesdays for maintenance.",
      "Carrying a valid photo ID (Aadhaar card, driving licence or passport) is mandatory and must be presented at hotel check-in.",
      "Special requests such as Jain meals or early check-in must be shared by email at least 72 hours before arrival."
    ],
    "cancellationPolicy": [
      "34 days or more before departure: 25% of the tour cost.",
      "23 to 33 days before departure: 50% of the tour cost.",
      "9 to 22 days before departure: 75% of the tour cost.",
      "8 days or less before departure, or no-show: 100% of the tour cost."
    ]
  },
  {
    "slug": "royal-rajasthan",
    "name": "Royal Rajasthan Escape",
    "duration": "12 Nights / 13 Days",
    "destination": "India",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "Experience the grandeur of India's royal past. Stay in authentic palaces, explore vibrant bazaars, and witness the timeless beauty of the Taj Mahal.",
    "highlights": [
      "Stay at Taj Lake Palace Udaipur",
      "Private Leopard Safari at SUJ\u00c1N Jawai",
      "Exclusive Dinner at Mehrangarh Fort Jodhpur",
      "Sunrise Taj Mahal with Royal Historian"
    ],
    "article": {
      "intro": "The Royal Rajasthan Escape is an unforgettable voyage through desert citadels, gilded royal residences, and centuries of aristocratic splendor.",
      "body": [
        "Your adventure begins in Delhi, wandering through Mughal courtyards before continuing to Agra for a private dawn visit to the Taj Mahal when the white marble glows pink in the morning sun. From there, enter Rajasthan\u2014the legendary land of kings.",
        "In Jaipur, your private chauffeur navigates to the Rambagh Palace, former home of the Maharaja. Enjoy exclusive evening access to the City Palace and private jewelers whose families have cut gems for emperors for 300 years.",
        "Journey south to Udaipur, where your boat docks at the floating marble marvel of the Taj Lake Palace. Dine on candlelit royal barges drifting over Lake Pichola with fireworks illuminating the fortress heights."
      ],
      "quote": "Rajasthan does not just tell stories of royalty; it invites you to live them every moment.",
      "quoteAuthor": "Maharaja Gaj Singh II"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Delhi: The Imperial Capital",
        "desc": "Private VIP arrival. Guided exploration of Old & New Delhi, Humayun's Tomb, and private spice market walk."
      },
      {
        "day": "Day 4-5",
        "title": "Agra: The Monument of Eternal Love",
        "desc": "Sunrise at the Taj Mahal, private tour of Agra Fort, and sunset champagne with Taj views."
      },
      {
        "day": "Day 6-8",
        "title": "Jaipur: The Pink City Majesty",
        "desc": "Amber Fort elephant sanctuary, private City Palace royal quarters, and hand-block printing workshop."
      },
      {
        "day": "Day 9-10",
        "title": "Jodhpur & Jawai: Blue City & Wild Leopards",
        "desc": "Private dinner at Mehrangarh Fort followed by luxury tented camp tracking wild leopards."
      },
      {
        "day": "Day 11-13",
        "title": "Udaipur: The Venice of the East",
        "desc": "Taj Lake Palace stay, private solar boat cruise on Lake Pichola, and farewell gala dinner."
      }
    ],
    "included": [
      "All luxury palace stays",
      "Private chauffeured luxury Mercedes transfers",
      "Domestic business class flights",
      "All monument VIP passes & specialist guides",
      "Daily gourmet breakfast & bespoke dinners"
    ],
    "notIncluded": [
      "International airfare",
      "Personal insurance",
      "Discretionary tips"
    ]
  },
  {
    "slug": "nordic-lights",
    "name": "The Nordic Lights & Glaciers",
    "duration": "8 Nights / 9 Days",
    "destination": "Iceland",
    "imageUrl": "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "A winter wonderland adventure seeking the Aurora Borealis, exploring ice caves, and relaxing in geothermal spas.",
    "highlights": [
      "Northern Lights Hunting with Master Astrophotographer",
      "Super Jeep Glacier & Ice Cave Expedition",
      "Helicopter Flight over Eyjafjallaj\u00f6kull",
      "Private Geothermal Lagoon Suite at The Retreat"
    ],
    "article": {
      "intro": "The Nordic Lights expedition takes you to the edge of the Arctic Circle for a cinematic encounters with dancing auroras and crystalline glaciers.",
      "body": [
        "Traversing volcanic deserts in monster Super Jeeps, discover ice caves sculpted by subglacial volcanic rivers, their translucent walls glowing with deep sapphire and cobalt light.",
        "By night, track the Aurora Borealis to remote geothermal fields away from all light pollution. Sip warm spiced berry schnapps as ribbons of violet and emerald light pulse across the arctic sky.",
        "Conclude with two nights at The Retreat at Blue Lagoon, where private mineral-rich waters surround your suite and subterranean spa rituals melt away all cold."
      ],
      "quote": "Standing beneath a sky alive with auroras makes you realize the sheer magic of our planet.",
      "quoteAuthor": "Sven Sigurdsson, Polar Guide"
    },
    "itinerary": [
      {
        "day": "Day 1-2",
        "title": "Reykjavik Arrival & Golden Circle",
        "desc": "Private airport transfer. Explore Thingvellir National Park and Gullfoss waterfall."
      },
      {
        "day": "Day 3-5",
        "title": "South Coast & Glacier Ice Caves",
        "desc": "Black sand beaches of Vik, Sk\u00f3gafoss, and private descent into Vatnaj\u00f6kull ice cave."
      },
      {
        "day": "Day 6-7",
        "title": "Super Jeep Aurora Expeditions",
        "desc": "Wilderness lodge retreat with nightly private aurora tracking."
      },
      {
        "day": "Day 8-9",
        "title": "The Retreat at Blue Lagoon",
        "desc": "Exclusive lagoon access, subterranean spa treatments, and departure."
      }
    ],
    "included": [
      "Luxury boutique lodges & The Retreat at Blue Lagoon",
      "Private Super Jeep & specialist driver-guide",
      "All gear, crampons & ice cave equipment",
      "Gourmet Icelandic dining"
    ],
    "notIncluded": [
      "International flights",
      "Spa upgrades",
      "Alcoholic beverages"
    ]
  },
  {
    "slug": "amalfi-coast",
    "name": "Amalfi Coast & Capri Retreat",
    "duration": "7 Nights / 8 Days",
    "destination": "Italy",
    "imageUrl": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "La Dolce Vita at its finest. Private boat charters, Michelin-starred dining, and cliffside luxury hotels.",
    "highlights": [
      "Private Riva Yacht Charter along Capri Faraglioni",
      "Sunset Champagne at Belmond Hotel Caruso Ravello",
      "Pompeii After-Hours Private Archaeological Tour",
      "Michelin-Starred Dining at Il San Pietro di Positano"
    ],
    "article": {
      "intro": "The Amalfi Coast & Capri Retreat is an homage to Italian elegance, where pastel villas cling to cliffs plunging into azure waters.",
      "body": [
        "Step aboard your private Riva yacht at Marina Grande, cruising past the Faraglioni rocks of Capri to swim in secluded emerald grottos where Roman emperors once bathed.",
        "In Positano, stay at the iconic Le Sirenuse or Il San Pietro, sipping limoncello crafted from coastal lemon groves on private terraces hovering above the sea.",
        "Ascend to Ravello, where the medieval gardens of Villa Cimbrone offer vistas that composer Richard Wagner declared the closest thing to heaven on Earth."
      ],
      "quote": "Positano bites deep. It is a dream place that isn't quite real when you are there and becomes powerfully real after you have gone.",
      "quoteAuthor": "John Steinbeck"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Positano: Cliffside Splendour",
        "desc": "Check in to cliffside luxury suite. Sunset cruise along the vertical town."
      },
      {
        "day": "Day 4-5",
        "title": "Capri & The Blue Grotto",
        "desc": "Private yacht charter to Capri, Anacapri villa visit, and evening piazza cocktails."
      },
      {
        "day": "Day 6-8",
        "title": "Ravello: Classical Romance",
        "desc": "Villa Rufolo gardens, wine tasting in Tramonti, and farewell Michelin dinner."
      }
    ],
    "included": [
      "5-star cliffside suites",
      "Private luxury yacht charters with skipper",
      "Private airport & helipad transfers",
      "Daily champagne breakfast"
    ],
    "notIncluded": [
      "International airfare",
      "Personal shopping",
      "Gratuities"
    ]
  },
  {
    "slug": "maldives-honeymoon",
    "name": "Maldives Overwater Honeymoon",
    "duration": "7 Nights / 8 Days",
    "destination": "Maldives",
    "imageUrl": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "Float above the turquoise Indian Ocean in a private overwater villa, with sunset dinners on your own jetty and world-class marine experiences.",
    "highlights": [
      "Overwater Villa with Retractable Roof at Soneva Jani",
      "Private Sandbank Champagne Castaway Experience",
      "Submarine Dive with Marine Biologist",
      "Couples Spa Rituals in an Underwater Chamber"
    ],
    "article": {
      "intro": "The ultimate romance journey, designed for couples who seek secluded paradise, turquoise waters, and effortless ultra-luxury.",
      "body": [
        "Fly by private seaplane over rings of coral atolls to Soneva Jani or Cheval Blanc Randheli. Your sprawling overwater villa features its own private infinity pool, a curved water slide into the lagoon, and a retractable ceiling above your bed for nocturnal stargazing.",
        "Spend afternoons snorkeling among gentle manta rays and sea turtles in a UNESCO Biosphere Reserve, or enjoy being whisked away to a private desert island for an afternoon of seclusion with chilled champagne and a gourmet picnic.",
        "Evenings unfold with candlelit dinners on your private jetty, accompanied by the gentle rhythm of waves under a sky glittering with constellations."
      ],
      "quote": "The Maldives is pure magic. Time dissolves, and the ocean becomes your entire world.",
      "quoteAuthor": "Priya & Rohan, Sobhavi Guests"
    },
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Seaplane Arrival in Paradise",
        "desc": "Scenic seaplane transfer, villa check-in, and sunset cocktails."
      },
      {
        "day": "Day 2-3",
        "title": "Lagoon Serenity & Coral Reefs",
        "desc": "Guided snorkeling safari with marine biologist and couples spa."
      },
      {
        "day": "Day 4-5",
        "title": "Castaway Island & Stargazing",
        "desc": "Private sandbank picnic, sunset dolphin cruise, observatory dinner."
      },
      {
        "day": "Day 6-8",
        "title": "Underwater Spa & Farewell",
        "desc": "Underwater dining experience, deep sea relaxation, and departure."
      }
    ],
    "included": [
      "Ultra-luxury overwater pool villa",
      "Return scenic seaplane transfers",
      "All gourmet meals & vintage wine pairings",
      "Private marine excursions & spa treatments"
    ],
    "notIncluded": [
      "International airfare",
      "Premium dive certifications"
    ]
  },
  {
    "slug": "japanese-odyssey",
    "name": "The Grand Japanese Odyssey",
    "duration": "14 Nights / 15 Days",
    "destination": "Japan",
    "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "From Tokyo's Michelin galaxy to Kyoto's serene temples, Hakone's hot springs, and Kanazawa's samurai heritage.",
    "highlights": [
      "Three-Michelin-Star Sushi Counter Experience Tokyo",
      "Private Geisha Dinner in Gion Kyoto",
      "Mt. Fuji Helicopter Charter & Onsen Ryokan",
      "Art Island Naoshima Private Gallery Tour"
    ],
    "article": {
      "intro": "The definitive luxury exploration of Japan, unlocking centuries of artisanal perfection and avant-garde culture.",
      "body": [
        "Begin in Tokyo with stays at Aman Tokyo, soaking in high-rise onsens overlooking the Imperial Palace gardens before embarking on exclusive food tours through Ginza with a celebrated culinary critic.",
        "Travel west via bullet train to Hakone, resting in century-old ryokans with cedarwood hot spring baths fed by thermal mountain waters, gazing at Mount Fuji across Lake Ashi.",
        "In Kyoto, enjoy VIP access to UNESCO temples before public hours, participate in a sacred tea ceremony with a 15th-generation master, and savor multi-course kaiseki dining alongside geiko artists in private teahouses."
      ],
      "quote": "Japan does not merely satisfy the traveler; it elevates your sense of what is possible in design and hospitality.",
      "quoteAuthor": "Kenzo Morimoto, Tokyo Architect"
    },
    "itinerary": [
      {
        "day": "Day 1-4",
        "title": "Tokyo: High Design & Gastronomy",
        "desc": "Aman Tokyo stay, Tsukiji private market access, modern art galleries, and TeamLab VIP."
      },
      {
        "day": "Day 5-6",
        "title": "Hakone & Mt. Fuji: Thermal Bliss",
        "desc": "Gora Kadan luxury ryokan, private open-air onsen, and Lake Ashi cruise."
      },
      {
        "day": "Day 7-11",
        "title": "Kyoto: The Spiritual Capital",
        "desc": "Private Zen temple meditation, Arashiyama bamboo forest at dawn, and Gion geisha dinner."
      },
      {
        "day": "Day 12-13",
        "title": "Naoshima: The Art Island",
        "desc": "Benesse House stay, Tadao Ando architecture, and Yayoi Kusama installations."
      },
      {
        "day": "Day 14-15",
        "title": "Osaka & Departure",
        "desc": "Street food renaissance, castle gardens, and first-class departure."
      }
    ],
    "included": [
      "5-star hotels & premier onsen ryokans",
      "First-class Shinkansen train passes",
      "Private licensed English-speaking docents",
      "All Michelin dining reservations & kaiseki banquets"
    ],
    "notIncluded": [
      "International flights",
      "Personal purchases"
    ]
  },
  {
    "slug": "bali-wellness",
    "name": "Balinese Wellness & Sanctuary",
    "duration": "9 Nights / 10 Days",
    "destination": "Bali",
    "imageUrl": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "Holistic healing, yoga among mist-cloaked rice fields, sacred water purification, and cliffside ocean villas.",
    "highlights": [
      "Private Water Blessing with High Priest at Tirta Empul",
      "Mandapa Ritz-Carlton Reserve Jungle Villa",
      "Sound Bath & Chakra Balancing in Sacred Pyramids",
      "Clifftop Sunset Dining at Bulgari Resort"
    ],
    "article": {
      "intro": "A deeply transformative journey designed to restore vitality and inner balance amidst Bali's most sacred landscapes.",
      "body": [
        "In the lush jungle hills of Ubud, check in to a riverside pool villa at Mandapa, a Ritz-Carlton Reserve. Mornings begin with private yoga sessions overlooking misted ravines, followed by consultations with Ayurvedic and holistic wellness masters.",
        "Experience profound spiritual rituals, from private Melukat water blessings at ancient temple springs to private meditation in candlelit bamboo sanctuaries.",
        "Transition to the dramatic ocean cliffs of Uluwatu at Bulgari Resort, where infinity pools hover over crashing waves and bespoke spa therapies incorporate indigenous volcanic herbs and exotic oils."
      ],
      "quote": "Bali has the power to silence all mental noise and remind you of what truly matters.",
      "quoteAuthor": "Dr. Sarah Lin, Integrative Wellness Practitioner"
    },
    "itinerary": [
      {
        "day": "Day 1-4",
        "title": "Ubud: Jungle Sanctuary",
        "desc": "Riverside luxury villa, Ayurvedic nutrition, and private yoga masterclasses."
      },
      {
        "day": "Day 5-6",
        "title": "Sacred Springs & Temples",
        "desc": "Tirta Empul water purification, sound healing, and organic farm feast."
      },
      {
        "day": "Day 7-10",
        "title": "Uluwatu: Ocean Clifftop Renewal",
        "desc": "Bulgari Resort cliffside villa, sunset fire ceremonies, and oceanfront rejuvenation."
      }
    ],
    "included": [
      "All luxury villa accommodations",
      "Daily wellness treatments & private yoga",
      "All sacred ceremonies with Balinese priests",
      "Private chauffeured transfers & organic gourmet dining"
    ],
    "notIncluded": [
      "International airfare",
      "Personal discretionary spending"
    ]
  },
  {
    "slug": "sahara-morocco",
    "name": "Imperial Cities & Sahara Nights",
    "duration": "10 Nights / 11 Days",
    "destination": "Morocco",
    "imageUrl": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "From the sensory kaleidoscope of Marrakech to the silent golden dunes of the Sahara and the medieval soul of Fez.",
    "highlights": [
      "Private Desert Encampment at Erg Chebbi",
      "Royal Mansour Private Riad Stay",
      "Helicopter Flight over the High Atlas Mountains",
      "Private Fez Artisan & Leather Guild Tour"
    ],
    "article": {
      "intro": "Traverse dramatic mountain passes and ancient caravan routes to experience the mystique of North Africa in imperial style.",
      "body": [
        "In Marrakech, stay at the Royal Mansour, designed as a private medina with three-story riads, fountains, and personal butlers. Roam the bustling souks with a master guide who unlocks hidden courtyards of carpet weavers and brass artisans.",
        "Cross the High Atlas Mountains by private helicopter, landing in the Sahara where luxury nomadic tents feature king beds, copper bathtubs, and Berber carpets laid directly on golden sands.",
        "In Fez, wander through the world's largest car-free urban maze, discovering 9th-century mosques, ancient tanneries, and fragrant spice corridors."
      ],
      "quote": "The Sahara does not show you its secrets all at once; it reveals them in the whisper of wind over dunes and the infinite silence of stars.",
      "quoteAuthor": "Karim El Idrissi, Desert Expedition Master"
    },
    "itinerary": [
      {
        "day": "Day 1-4",
        "title": "Marrakech: Royal Palaces & Souks",
        "desc": "Royal Mansour stay, after-hours YSL museum, and private rooftop dining."
      },
      {
        "day": "Day 5-6",
        "title": "High Atlas & Kasbahs",
        "desc": "Kasbah Tamadot stay, Berber village cultural exchange, and mountain hikes."
      },
      {
        "day": "Day 7-8",
        "title": "Sahara Dunes: Erg Chebbi",
        "desc": "Camel rides at sunset, champagne on dunes, and luxury glamping."
      },
      {
        "day": "Day 9-11",
        "title": "Fez & Departure",
        "desc": "Ancient medina exploration, medieval madrasas, and return transfer."
      }
    ],
    "included": [
      "All luxury riad & desert glamping stays",
      "Private 4x4 & helicopter charter",
      "All private guided tours",
      "Full board during desert stay"
    ],
    "notIncluded": [
      "International airfare",
      "Personal purchases"
    ]
  },
  {
    "slug": "greek-islands",
    "name": "Aegean Odyssey: Cyclades & Beyond",
    "duration": "10 Nights / 11 Days",
    "destination": "Greece",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "Sail between Athens, Mykonos, Paros, and Santorini aboard private yachts with luxury cliffside villa stays.",
    "highlights": [
      "Private Catamaran Charter across Cycladic Hidden Coves",
      "Santorini Caldera Infinity Suite at Canaves Oia",
      "Sunset Acropolis Walk with Leading Historian",
      "Private Olive Oil & Wine Tasting on Paros"
    ],
    "article": {
      "intro": "The quintessential Greek island sojourn, marrying mythological majesty with the shimmering tranquility of the Aegean Sea.",
      "body": [
        "Commence in Athens with private after-hours access to the Acropolis, taking in the Parthenon illuminated beneath the twilight sky. Continue to Mykonos, where private motor yachts whisk you to secluded coves on neighboring Delos\u2014the mythical birthplace of Apollo.",
        "On Paros, discover charming fishing villages draped in vibrant bougainvillea, dining on seafood caught just hours earlier by local fishermen. Conclude in Santorini, resting in cliff-carved suites where infinity plunge pools mirror the deep cobalt caldera.",
        "Savor chilled volcanic Assyrtiko wine, cruise past active volcanic springs, and watch the sun dip below the Aegean horizon from the quietest terraces in Oia."
      ],
      "quote": "In Greece, the sky and sea are woven of the same divine blue, and every breeze carries the song of ancient poets.",
      "quoteAuthor": "Dimitris Alexiou, Aegean Navigator"
    },
    "itinerary": [
      {
        "day": "Day 1-2",
        "title": "Athens: Dawn of Civilization",
        "desc": "Hotel Grande Bretagne stay, private Acropolis tour, and rooftop dining."
      },
      {
        "day": "Day 3-5",
        "title": "Mykonos & Sacred Delos",
        "desc": "Bill & Coo luxury suite, private yacht to Delos, and seaside dining."
      },
      {
        "day": "Day 6-7",
        "title": "Paros: Pure Cycladic Charm",
        "desc": "Secluded beach days, olive farm tour, and private catamaran charter."
      },
      {
        "day": "Day 8-11",
        "title": "Santorini: The Caldera Icon",
        "desc": "Canaves Oia suite, private caldera cruise, volcanic wine masterclass."
      }
    ],
    "included": [
      "Luxury 5-star suites & villa stays",
      "Private yacht charters & inter-island transfers",
      "All guided private tours",
      "Daily gourmet breakfast"
    ],
    "notIncluded": [
      "International airfare",
      "Personal discretionary expenses"
    ]
  },
  {
    "slug": "kenya-safari",
    "name": "The Great Migration Luxury Safari",
    "duration": "8 Nights / 9 Days",
    "destination": "Kenya",
    "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "Follow the greatest wildlife spectacle on Earth from ultra-luxury tented camps with private bush flights and expert Maasai trackers.",
    "highlights": [
      "Front Row River Crossing Access during Great Migration",
      "Sunrise Hot Air Balloon Safari with Champagne Breakfast",
      "Angama Mara Clifftop Pavilion Suite",
      "Black Rhino Tracking in Lewa Conservancy"
    ],
    "article": {
      "intro": "The ultimate wildlife pilgrimage, placing you at the heart of the Mara-Serengeti ecosystem in sublime luxury.",
      "body": [
        "Fly by bush plane directly to private conservancies in the Masai Mara, landing on dirt airstrips where giraffes gaze from acacia thickets. Stay at Angama Mara, where glass-fronted tented suites hover 1,000 feet above the savanna plains.",
        "Set out at dawn in custom 4x4 open safari vehicles guided by gold-level Maasai naturalists. Witness lion prides on the hunt, cheetah coalitions surveying the grassland, and riverbanks churning with thousands of wildebeest braving the Mara River.",
        "Evenings bring sundowners on the edge of the escarpment followed by fireside feasts, fine South African vintages, and tales under the Southern Cross."
      ],
      "quote": "If I have ever seen magic, it has been in Africa.",
      "quoteAuthor": "John Hemingway"
    },
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Nairobi & Giraffe Manor",
        "desc": "VIP arrival, breakfast with endangered Rothschild's giraffes."
      },
      {
        "day": "Day 2-4",
        "title": "Lewa Wildlife Conservancy",
        "desc": "Rhino tracking, conservation center visit, luxury lodge."
      },
      {
        "day": "Day 5-8",
        "title": "Masai Mara: The Great Migration",
        "desc": "Angama Mara stay, hot air ballooning, and dramatic river crossings."
      },
      {
        "day": "Day 9",
        "title": "Farewell Flight to Nairobi",
        "desc": "Final morning game drive and VIP departure lounge."
      }
    ],
    "included": [
      "All luxury lodge & tented camp stays",
      "Private chartered bush flights",
      "All park & conservation fees",
      "Full board meals & premium beverages",
      "All safari game drives"
    ],
    "notIncluded": [
      "International flights",
      "Premium champagne upgrades",
      "Tips"
    ]
  },
  {
    "slug": "swiss-alps",
    "name": "Swiss Alps & Glacier Splendour",
    "duration": "9 Nights / 10 Days",
    "destination": "Switzerland",
    "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "The definitive alpine journey spanning Zermatt, St. Moritz, Lake Lucerne, and the Glacier Express Excellence Class.",
    "highlights": [
      "Glacier Express Excellence Class Panoramic Journey",
      "Matterhorn View Suite at The Omnia Zermatt",
      "Badrutt's Palace St. Moritz Heritage Luxury",
      "B\u00fcrgenstock Alpine Spa Infinity Pool over Lake Lucerne"
    ],
    "article": {
      "intro": "The Swiss Alps in unmatched luxury, where snowcapped pinnacles meet three-Michelin-star cuisine and legendary railway engineering.",
      "body": [
        "In car-free Zermatt, step onto your private cedar balcony at The Omnia to gaze at the majestic pyramid of the Matterhorn. Ride the historic Gornergrat cogwheel train or take a private helicopter to high alpine glaciers for private skiing or secluded snowshoe walks.",
        "Board the Glacier Express in Excellence Class, enjoying a guaranteed window seat, personal concierge service, and a five-course gourmet lunch paired with Swiss wines while traversing 291 bridges and 91 tunnels.",
        "In St. Moritz and Lake Lucerne, experience world-renowned mountain wellness at B\u00fcrgenstock Resort, soaking in an infinity pool that appears suspended high in the clouds above the blue lake."
      ],
      "quote": "The mountains are calling, and here in Switzerland they speak the language of absolute perfection.",
      "quoteAuthor": "Jean-Pierre Blanc, Alpine Alpinist"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Lake Lucerne & B\u00fcrgenstock",
        "desc": "Check in to B\u00fcrgenstock Resort, alpine spa day, and private boat charter."
      },
      {
        "day": "Day 4-6",
        "title": "Zermatt & The Matterhorn",
        "desc": "The Omnia stay, Gornergrat railway, and Matterhorn helicopter tour."
      },
      {
        "day": "Day 7",
        "title": "Glacier Express Excellence Class",
        "desc": "Panoramic rail journey across alpine passes to St. Moritz."
      },
      {
        "day": "Day 8-10",
        "title": "St. Moritz & Engadin Valley",
        "desc": "Badrutt's Palace stay, horse-drawn carriage ride, and departure."
      }
    ],
    "included": [
      "5-star alpine luxury hotels",
      "Glacier Express Excellence Class tickets",
      "First-class Swiss Travel Rail passes",
      "Helicopter transfers & mountain excursions"
    ],
    "notIncluded": [
      "International flights",
      "Personal shopping",
      "Ski gear rentals"
    ]
  },
  {
    "slug": "machu-picchu-adventure",
    "name": "Inca Empire & Andean Expedition",
    "duration": "10 Nights / 11 Days",
    "destination": "Peru",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "The lost world of the Incas, explored via the luxury Belmond Hiram Bingham train, Sacred Valley haciendas, and Lima fine dining.",
    "highlights": [
      "Belmond Hiram Bingham Luxury Train to Machu Picchu",
      "Exclusive Dawn Entry to Machu Picchu with Leading Archaeologist",
      "Sacred Valley Luxury Lodge at Explora Valle Sagrado",
      "Tasting Menu at Central in Lima (World's #1 Restaurant)"
    ],
    "article": {
      "intro": "A high-altitude odyssey tracing the monumental stone citadels and living traditions of the ancient Inca civilization.",
      "body": [
        "In Lima, dine at the world's most acclaimed restaurants before flying to the ancient Inca capital of Cusco. Stay at Palacio Nazarenas, a restored convent where suites are enriched with supplemental oxygen.",
        "Acclimatize in the Sacred Valley amidst terraced mountainsides and eucalyptus groves, exploring circular agricultural terraces at Moray and the shimmering salt pans of Maras.",
        "Board the 1920s-style Belmond Hiram Bingham train for the journey to Machu Picchu, sipping champagne in the observation car as the jungle canopy closes in. Stay beside the citadel gates for exclusive dawn entry before the morning mist clears."
      ],
      "quote": "Standing at the Sun Gate as morning light hits Machu Picchu is an experience that stays etched in your soul forever.",
      "quoteAuthor": "Mateo Quispe, Andean Historian"
    },
    "itinerary": [
      {
        "day": "Day 1-2",
        "title": "Lima: Gastronomic Capital",
        "desc": "Miraflores luxury hotel, private market tour, and dinner at Central."
      },
      {
        "day": "Day 3-5",
        "title": "Sacred Valley Acclimatization",
        "desc": "Explora lodge, Inca ruins at Ollantaytambo, and highland village visits."
      },
      {
        "day": "Day 6-7",
        "title": "Hiram Bingham Train & Machu Picchu",
        "desc": "Luxury rail journey, Belmond Sanctuary Lodge, and private citadel tours."
      },
      {
        "day": "Day 8-10",
        "title": "Cusco: The Imperial Navel",
        "desc": "Palacio Nazarenas, Sacsayhuam\u00e1n fortress, and artisan quarter."
      },
      {
        "day": "Day 11",
        "title": "Departure via Lima",
        "desc": "First-class flight connection and departure."
      }
    ],
    "included": [
      "Belmond luxury hotels & Hiram Bingham train tickets",
      "Private specialist archaeologist guides",
      "All domestic flights & private transfers",
      "VIP access passes to all archaeological reserves"
    ],
    "notIncluded": [
      "International airfare",
      "Personal insurance"
    ]
  },
  {
    "slug": "vietnam-unveiled",
    "name": "Vietnam from North to South",
    "duration": "11 Nights / 12 Days",
    "destination": "Vietnam",
    "imageUrl": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "From the colonial grandeur of Hanoi to Lan Ha Bay's emerald waters, the lantern-lit charm of Hoi An, and Saigon's modern energy.",
    "highlights": [
      "Private Luxury Junk Cruise in Lan Ha Bay",
      "Capella Hanoi Opera Suite Stay",
      "Four Seasons The Nam Hai Beachfront Pool Villa",
      "Mekong Delta Private Speedboat Safari"
    ],
    "article": {
      "intro": "An elegant traverse of Vietnam's dramatic landscapes, rich colonial heritage, and extraordinary culinary depth.",
      "body": [
        "In Hanoi, step into the 1920s glamour of Capella Hanoi, exploring the tree-lined French Quarter and hidden culinary sanctuaries serving egg coffee and world-famous pho.",
        "Cruise aboard a private wooden junk through the towering limestone towers of Lan Ha Bay, paddling kayaks through hidden lagoons away from commercial tourist boats.",
        "In Hoi An, cycle along rice paddies to an organic herb village, have bespoke silk suits tailored overnight, and relax on the pristine beaches of Four Seasons The Nam Hai before flying south to Saigon."
      ],
      "quote": "Vietnam is a tapestry of contrasts \u2014 peaceful water gardens, dramatic cliffs, and unforgettable smiles.",
      "quoteAuthor": "Le Thi Mai, Cultural Historian"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Hanoi: French Colonial Elegance",
        "desc": "Capella Hanoi stay, culinary walking tour, and water puppet theatre."
      },
      {
        "day": "Day 4-5",
        "title": "Lan Ha Bay Private Cruise",
        "desc": "Private luxury junk, kayaking in sea caves, and sunset squid fishing."
      },
      {
        "day": "Day 6-9",
        "title": "Hoi An: Lanterns & Beach Luxury",
        "desc": "Four Seasons Nam Hai, ancient town walk, and cooking masterclass."
      },
      {
        "day": "Day 10-12",
        "title": "Saigon & Mekong Delta",
        "desc": "Park Hyatt Saigon, Mekong private boat expedition, and departure."
      }
    ],
    "included": [
      "5-star luxury hotels & private overnight cruise",
      "Domestic business class flights",
      "Private luxury vehicle transfers",
      "All private guided excursions & meals"
    ],
    "notIncluded": [
      "International flights",
      "Visa fees",
      "Gratuities"
    ]
  },
  {
    "slug": "new-zealand-epic",
    "name": "New Zealand Fiords & Alpine Wonder",
    "duration": "12 Nights / 13 Days",
    "destination": "New Zealand",
    "imageUrl": "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "Helicopter over Milford Sound, stay in legendary luxury lodges, sample Central Otago Pinot Noir, and explore geothermal wonders.",
    "highlights": [
      "Milford Sound Helicopter Flight with Hanging Glacier Landing",
      "Blanket Bay Luxury Lodge on Lake Wakatipu",
      "Huka Lodge Private Estate on the Waikato River",
      "Waiheke Island Private Vineyard & Helicopter Tour"
    ],
    "article": {
      "intro": "The ultimate exploration of Aotearoa, pairing jaw-dropping alpine landscapes with the finest wilderness lodges on the planet.",
      "body": [
        "In the North Island, stay at the historic Huka Lodge where Queen Elizabeth II and international luminaries have stayed since the 1930s. Listen to the roaring Waikato River from your suite terrace and fish for wild rainbow trout.",
        "Fly south to Queenstown, checking in to Blanket Bay. Take a private helicopter flight over the dramatic spires of the Southern Alps, touching down on a remote glacier before swooping into the sheer waterfalls of Milford Sound.",
        "Sip award-winning Pinot Noirs in Central Otago, explore Lake Wanaka by private launch, and experience the warm, unpretentious hospitality that defines New Zealand luxury."
      ],
      "quote": "New Zealand is a wild, pure paradise where nature commands your respect and rewards you with pure awe.",
      "quoteAuthor": "Sir Richard Taylor"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Auckland & Waiheke Island",
        "desc": "Harbour suite, private yacht charter to Waiheke Island vineyards."
      },
      {
        "day": "Day 4-6",
        "title": "Taupo & Huka Lodge",
        "desc": "Huka Lodge, geothermal geysers, and private Maori rock carving cruise."
      },
      {
        "day": "Day 7-10",
        "title": "Queenstown & Blanket Bay",
        "desc": "Blanket Bay lodge, Milford Sound heli-flight, and Central Otago wine tour."
      },
      {
        "day": "Day 11-13",
        "title": "Wanaka & Alpine Departure",
        "desc": "Wilderness lodge stay, mountain hikes, and departure."
      }
    ],
    "included": [
      "All luxury lodge suites",
      "Private helicopter charters & transfers",
      "All domestic flights",
      "Private wine tastings & national park fees"
    ],
    "notIncluded": [
      "International airfare",
      "Discretionary spending"
    ]
  },
  {
    "slug": "spain-gourmet",
    "name": "Culinary Secrets of Spain",
    "duration": "10 Nights / 11 Days",
    "destination": "Spain",
    "imageUrl": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "A gastronomic odyssey through San Sebasti\u00e1n, the vineyards of Rioja, the grand boulevards of Madrid, and Catalan Barcelona.",
    "highlights": [
      "Private Pintxos Crawl with Master Chef in San Sebasti\u00e1n",
      "Exclusive Rioja Vineyard & Century-Old Cellar Access",
      "Private After-Hours Prado Museum Tour",
      "Private Gaud\u00ed Architecture Access in Barcelona"
    ],
    "article": {
      "intro": "A sensory celebration of Spain's culinary and architectural renaissance, crafted for discerning epicures.",
      "body": [
        "Begin in San Sebasti\u00e1n, wandering cobblestone lanes in the Old Town with a celebrated culinary writer, enjoying exclusive access to private gastronomic societies (txokos) forbidden to casual tourists.",
        "In Rioja, tour avant-garde wineries designed by Frank Gehry and Santiago Calatrava, tasting rare vintage Tempranillos straight from the oak barrels with head winemakers.",
        "In Madrid and Barcelona, savor world-renowned dining at three-Michelin-star sanctuaries, explore royal art collections in after-hours silence, and sip cava on rooftop terraces overlooking the Mediterranean."
      ],
      "quote": "In Spain, cooking is an art form, and eating is the highest expression of friendship and love.",
      "quoteAuthor": "Chef Ferran Adri\u00e0"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "San Sebasti\u00e1n: The Culinary Mecca",
        "desc": "Hotel Mar\u00eda Cristina, Michelin-star dining, and private coastal yacht."
      },
      {
        "day": "Day 4-5",
        "title": "Rioja Wine Country",
        "desc": "Marqu\u00e9s de Riscal vineyard hotel, private cellar tastings."
      },
      {
        "day": "Day 6-8",
        "title": "Madrid: Royal Splendour",
        "desc": "Mandarin Oriental Ritz, private Prado tour, and tapas walk."
      },
      {
        "day": "Day 9-11",
        "title": "Barcelona: Modernist Wonders",
        "desc": "Gaud\u00ed private tour, Gothic Quarter secrets, and departure."
      }
    ],
    "included": [
      "5-star luxury hotels",
      "All Michelin dining reservations & tasting menus",
      "Private high-speed rail & chauffeur transfers",
      "All private guided tours"
    ],
    "notIncluded": [
      "International airfare",
      "Personal wine purchases"
    ]
  },
  {
    "slug": "dubai-luxury",
    "name": "Dubai & Emirates Ultra-Luxury",
    "duration": "6 Nights / 7 Days",
    "destination": "UAE",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "Experience the glamour of Dubai and Abu Dhabi: Burj Al Arab suites, private desert reserves, and superyacht charters.",
    "highlights": [
      "Burj Al Arab Duplex Suite with Butler Service",
      "Private Desert Safari in Royal Conservation Reserve",
      "Private Superyacht Sunset Cruise around Palm Jumeirah",
      "Abu Dhabi Louvre & Sheikh Zayed Mosque VIP Access"
    ],
    "article": {
      "intro": "The gold standard of modern Arabian luxury, where futuristic architecture meets desert heritage.",
      "body": [
        "In Dubai, check in to the legendary Burj Al Arab, where duplex suites overlook the Arabian Gulf with personal butlers on call 24 hours a day. Enjoy a private sunset yacht charter circling the Palm Jumeirah with champagne and caviar.",
        "Transition to the serene Dubai Desert Conservation Reserve, where luxury tented pavilions feature private plunge pools looking out over golden sand dunes where gazelles roam.",
        "In Abu Dhabi, marvel at the architecture of the Louvre Abu Dhabi and enjoy after-hours VIP access to the Sheikh Zayed Grand Mosque, admiring 82 white marble domes inlaid with semi-precious stones."
      ],
      "quote": "Dubai is where the impossible becomes the standard.",
      "quoteAuthor": "Sultan Al Nuaimi, Emirati Historian"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Dubai: Skyline & Yacht Glamour",
        "desc": "Burj Al Arab stay, private helicopter tour, and superyacht charter."
      },
      {
        "day": "Day 4-5",
        "title": "Desert Conservation Reserve",
        "desc": "Al Maha Luxury Resort & Spa, falconry demonstration, and dune dining."
      },
      {
        "day": "Day 6-7",
        "title": "Abu Dhabi: Cultural Icons",
        "desc": "Emirates Palace stay, Louvre VIP tour, and departure."
      }
    ],
    "included": [
      "All ultra-luxury suites & desert resort stays",
      "Private chauffeur in luxury Mercedes/Rolls-Royce",
      "Private yacht & helicopter charters",
      "All private excursions & VIP entries"
    ],
    "notIncluded": [
      "International airfare",
      "Personal discretionary purchases"
    ]
  },
  {
    "slug": "thailand-luxury",
    "name": "Kingdom of Siam: Bangkok & Islands",
    "duration": "9 Nights / 10 Days",
    "destination": "Thailand",
    "imageUrl": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "Royal Bangkok heritage, Chiang Mai elephant encounters, and the pristine limestone bays of Phuket and Koh Kood.",
    "highlights": [
      "Amanpuri Phuket Clifftop Pool Villa",
      "Four Seasons Tented Camp Golden Triangle",
      "Bangkok Private Longtail Canal & Palace Tour",
      "Private Yacht to Phi Phi & Similan Islands"
    ],
    "article": {
      "intro": "The golden soul of Southeast Asia, blending royal palaces, ethical wildlife encounters, and tropical barefoot luxury.",
      "body": [
        "In Bangkok, glide down the Chao Phraya River on a vintage teak boat to visit the Grand Palace before continuing to Chiang Mai, where luxury safari tents overlook the misty borders of Burma and Laos.",
        "Spend unforgettable moments caring for rescued elephants alongside expert veterinarians, and indulge in restorative herbal compresses in open-air spa pavilions.",
        "Conclude at Amanpuri in Phuket, resting in private pavilion villas tucked into coconut groves, with secluded white-sand beaches and private catamarans sailing the Andaman Sea."
      ],
      "quote": "Thailand touches your heart with its generosity, spiritual grace, and magnificent natural beauty.",
      "quoteAuthor": "Ananda Chareon, Thai Cultural Curator"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Bangkok: Royal Splendour",
        "desc": "Rosewood Bangkok stay, river temples, and Michelin culinary safari."
      },
      {
        "day": "Day 4-6",
        "title": "Golden Triangle: Tented Camp",
        "desc": "Four Seasons Tented Camp, elephant sanctuary, and bamboo river cruise."
      },
      {
        "day": "Day 7-10",
        "title": "Phuket: Andaman Island Bliss",
        "desc": "Amanpuri pool villa, private yacht to Similan Islands, and departure."
      }
    ],
    "included": [
      "5-star luxury resorts & tented camp",
      "All domestic flights & private transfers",
      "All private guided excursions & spa sessions",
      "All meals at Four Seasons Tented Camp"
    ],
    "notIncluded": [
      "International airfare",
      "Personal items"
    ]
  },
  {
    "slug": "south-africa-circuit",
    "name": "Cape Town, Winelands & Safari",
    "duration": "11 Nights / 12 Days",
    "destination": "South Africa",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "The ultimate South African journey: Table Mountain, Franschhoek vineyards, and Big Five safari at Singita Sabi Sand.",
    "highlights": [
      "The Silo Hotel Cape Town Waterfront Penthouse",
      "La Residence Franschhoek Vineyard Estate",
      "Singita Boulders Lodge Big Five Safari",
      "Private Helicopter Tour of the Cape Peninsula"
    ],
    "article": {
      "intro": "The definitive Grand Tour of South Africa, celebrating extraordinary wildlife, world-class gastronomy, and dramatic ocean panoramas.",
      "body": [
        "In Cape Town, stay at the iconic Silo Hotel overlooking the harbor, taking a private helicopter flight along the dramatic coastline of the Cape of Good Hope.",
        "In the Franschhoek Winelands, relax at La Residence amidst private vineyards, tasting rare vintages guided by estate winemakers before dining at award-winning restaurants.",
        "Fly to Sabi Sand for the gold standard of African safari at Singita Boulders Lodge. Track leopards on private dawn and evening drives, relaxing in riverfront plunge pools as elephant herds gather at the water's edge below."
      ],
      "quote": "South Africa is an emotional revelation. The wildlife, the wine, the landscapes \u2014 everything is unforgettable.",
      "quoteAuthor": "Thabo Mbeki, Wilderness Specialist"
    },
    "itinerary": [
      {
        "day": "Day 1-4",
        "title": "Cape Town: Atlantic Elegance",
        "desc": "The Silo stay, Table Mountain private access, and Cape Peninsula flight."
      },
      {
        "day": "Day 5-7",
        "title": "Franschhoek Winelands",
        "desc": "La Residence estate, private vineyard cellars, and Michelin-star dining."
      },
      {
        "day": "Day 8-11",
        "title": "Singita Sabi Sand: Big Five",
        "desc": "Singita Boulders Lodge, private 4x4 tracking, and bush boma dinners."
      },
      {
        "day": "Day 12",
        "title": "Departure via Johannesburg",
        "desc": "Federal Air charter to Johannesburg and international departure."
      }
    ],
    "included": [
      "All 5-star suites & Singita safari lodges",
      "Private Federal Air bush flights",
      "All game drives with ranger & tracker team",
      "All meals & fine wines at Singita"
    ],
    "notIncluded": [
      "International airfare",
      "Personal spa treatments"
    ]
  },
  {
    "slug": "egypt-nile",
    "name": "Pharaohs & The Eternal Nile",
    "duration": "9 Nights / 10 Days",
    "destination": "Egypt",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/adventure.mp4",
    "price": "Bespoke / On Request",
    "overview": "Private access to the Great Pyramids, a luxury Dahabiya cruise on the Nile, and the timeless temples of Luxor and Aswan.",
    "highlights": [
      "Private Access between the Paws of the Sphinx",
      "Luxury Private Dahabiya Sailing between Luxor & Aswan",
      "Sofitel Legend Old Cataract Aswan Suite Stay",
      "Sunrise Balloon Flight over Valley of the Kings"
    ],
    "article": {
      "intro": "A transcendent voyage through five thousand years of pharaonic civilization aboard an authentic wooden sailing ship on the Nile.",
      "body": [
        "In Cairo, stand between the colossal paws of the Sphinx at sunrise with a world-renowned Egyptologist, followed by private viewing of King Tutankhamun's gold mask at the Grand Egyptian Museum.",
        "In Luxor, board a private luxury Dahabiya sailboat to drift down the timeless Nile in absolute peace. Visit ancient temples at Kom Ombo and Edfu while sunbathing on teak sun decks as date palms pass by.",
        "Conclude in Aswan, staying in the legendary Churchill Suite at the Sofitel Legend Old Cataract, sipping afternoon tea overlooking granite islands in the Nile."
      ],
      "quote": "To see the Nile is to see the cradle of human dreams.",
      "quoteAuthor": "Dr. Miriam Farouk, Antiquities Curator"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Cairo & Giza Pyramids",
        "desc": "Mena House Pyramids view, private Sphinx access, and Egyptian Museum."
      },
      {
        "day": "Day 4-7",
        "title": "Private Dahabiya Nile Cruise",
        "desc": "Karnak temple, Valley of the Kings hot air balloon, and Kom Ombo."
      },
      {
        "day": "Day 8-9",
        "title": "Aswan & Philae Temple",
        "desc": "Sofitel Legend Old Cataract, Philae island temple, and felucca sailing."
      },
      {
        "day": "Day 10",
        "title": "Cairo & Departure",
        "desc": "Flight back to Cairo and international departure."
      }
    ],
    "included": [
      "5-star heritage hotels & private Dahabiya charter",
      "Private leading Egyptologist guide throughout",
      "All domestic flights & private transfers",
      "VIP permits for all archaeological sites"
    ],
    "notIncluded": [
      "International airfare",
      "Visa fees",
      "Gratuities"
    ]
  },
  {
    "slug": "australia-great-barrier",
    "name": "Sydney & The Great Barrier Reef",
    "duration": "10 Nights / 11 Days",
    "destination": "Australia",
    "imageUrl": "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/ocean.mp4",
    "price": "Bespoke / On Request",
    "overview": "Sydney Harbour glamour, Uluru's sacred red monolith, and private island luxury at the Great Barrier Reef.",
    "highlights": [
      "Qualia Luxury Pavilion on Hamilton Island",
      "Private Catamaran Sunset Cruise on Sydney Harbour",
      "Longitude 131\u00b0 Luxury Tented Pavilion at Uluru",
      "Helicopter Flight over Heart Reef & Whitehaven Beach"
    ],
    "article": {
      "intro": "A grand showcase of Australia's most iconic natural wonders and sophisticated harbor culture.",
      "body": [
        "In Sydney, wake up to views of the Opera House and Harbour Bridge from your waterfront suite at The Langham or Park Hyatt, dining at Quay overlooking the illuminated water.",
        "Fly inland to the Red Centre, staying at Longitude 131\u00b0 with uninterrupted views of sacred Uluru from your bed. Walk with indigenous Anangu elders and dine under a canopy of southern hemisphere stars.",
        "In tropical Queensland, Qualia on Hamilton Island offers world-class seclusion. Helicopter over Heart Reef, picnic on the pure silica sands of Whitehaven Beach, and dive amongst kaleidoscopic marine life."
      ],
      "quote": "Australia is vast, ancient, and breathtakingly alive. Every landscape touches you with its elemental power.",
      "quoteAuthor": "Liam O'Connor, Outback Naturalist"
    },
    "itinerary": [
      {
        "day": "Day 1-3",
        "title": "Sydney: Harbour Grandeur",
        "desc": "Waterfront suite, private yacht charter, and Opera House backstage tour."
      },
      {
        "day": "Day 4-6",
        "title": "Uluru: The Sacred Outback",
        "desc": "Longitude 131\u00b0 pavilion, sunrise base walk, and Field of Light dinner."
      },
      {
        "day": "Day 7-10",
        "title": "Great Barrier Reef: Qualia",
        "desc": "Qualia pavilion, Heart Reef helicopter flight, and Whitehaven beach."
      },
      {
        "day": "Day 11",
        "title": "Departure via Sydney",
        "desc": "Flight connection and international departure."
      }
    ],
    "included": [
      "All 5-star suites, Qualia pavilion & Longitude 131\u00b0",
      "All domestic flights & private airport transfers",
      "Private helicopter charters & boat cruises",
      "All meals & premium drinks at Outback & Reef lodges"
    ],
    "notIncluded": [
      "International flights",
      "Personal shopping"
    ]
  },
  {
    "slug": "paris-french-riviera",
    "name": "Parisian Splendour & The French Riviera",
    "duration": "10 Nights / 11 Days",
    "destination": "France",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=720&q=72&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    "videoUrl": "/videos/safari.mp4",
    "price": "Bespoke / On Request",
    "overview": "The pinnacle of French romance: Place Vend\u00f4me luxury in Paris, after-hours museum tours, and superyacht cruising on the C\u00f4te d'Azur.",
    "highlights": [
      "Ritz Paris Prestige Suite on Place Vend\u00f4me",
      "Private After-Hours Louvre Tour with Senior Art Historian",
      "H\u00f4tel du Cap-Eden-Roc Clifftop Palace Stay",
      "Private Superyacht Day Cruise along Cap d'Antibes & Saint-Tropez"
    ],
    "article": {
      "intro": "An ode to French elegance, pairing the cultural grandeur of the City of Light with the sun-drenched glamour of the Mediterranean coast.",
      "body": [
        "In Paris, reside at the legendary Ritz Paris, enjoying private shopping appointments at haute couture fashion houses and after-hours visits to the Louvre in complete tranquility.",
        "Board the high-speed TGV in first class to the French Riviera, checking in to H\u00f4tel du Cap-Eden-Roc. Swim in the iconic saltwater pool carved into the sea cliffs, sipping vintage ros\u00e9 under pine canopies.",
        "Charter a private yacht to cruise along Saint-Tropez, diving into hidden turquoise coves and dining at three-Michelin-star seaside restaurants beloved by tastemakers worldwide."
      ],
      "quote": "Paris is always a good idea, and combined with the C\u00f4te d'Azur, it becomes an unforgettable masterpiece.",
      "quoteAuthor": "Audrey Hepburn"
    },
    "itinerary": [
      {
        "day": "Day 1-4",
        "title": "Paris: Haute Couture & Art",
        "desc": "Ritz Paris, private Louvre access, Seine dinner cruise, and Versailles."
      },
      {
        "day": "Day 5-7",
        "title": "Cap d'Antibes: Mediterranean Palace",
        "desc": "H\u00f4tel du Cap-Eden-Roc, cliffside saltwater pool, and private cabana."
      },
      {
        "day": "Day 8-10",
        "title": "Saint-Tropez & Superyacht Cruising",
        "desc": "Private yacht charter, Pampelonne beach club, and Michelin dining."
      },
      {
        "day": "Day 11",
        "title": "Nice Departure",
        "desc": "Private VIP transfer to Nice airport and departure."
      }
    ],
    "included": [
      "5-star palace hotels in Paris & the Riviera",
      "Private yacht charters & high-speed first-class train",
      "All private guided tours & museum passes",
      "Daily champagne breakfast"
    ],
    "notIncluded": [
      "International airfare",
      "Personal haute couture purchases"
    ]
  }
];
