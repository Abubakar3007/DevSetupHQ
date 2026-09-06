/**
 * Static catalog data.
 *
 * This module is the single source of truth for categories, products and
 * articles. Every consumer reads through the helpers below, so swapping this
 * file for a CMS/database fetch later only changes this one module.
 */

import catDeveloper from "@/assets/cat-developer.jpg";
import catDesk from "@/assets/cat-desk.jpg";
import catHomeOffice from "@/assets/cat-home-office.jpg";
import catTech from "@/assets/cat-tech.jpg";
import catProductivity from "@/assets/cat-productivity.jpg";
import pKeyboard from "@/assets/p-keyboard.jpg";
import pStand from "@/assets/p-stand.jpg";
import pLamp from "@/assets/p-lamp.jpg";
import pHeadphones from "@/assets/p-headphones.jpg";
import pDock from "@/assets/p-dock.jpg";
import pMouse from "@/assets/p-mouse.jpg";
import aLaptopStands from "@/assets/a-laptop-stands.jpg";
import aHomeOffice from "@/assets/a-home-office.jpg";
import aKeyboards from "@/assets/a-keyboards.jpg";
import aDeskAccessories from "@/assets/a-desk-accessories.jpg";

export type Category = {
  slug: string;
  name: string;
  glyph: string;
  short: string;
  description: string;
  image: string;
  itemCount: number;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  tagline: string;
  description: string;
  rating: number;
  priceBand: "under-50" | "50-150" | "150-400" | "400-plus";
  priceLabel: string;
  image: string;
  pros: string[];
  cons: string[];
  features: string[];
  specs: { label: string; value: string }[];
  /** Placeholder — swap for a real affiliate URL later. */
  affiliateUrl: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  cover: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  sections: { id: string; heading: string; body: string[] }[];
  recommendedProducts: string[];
  pros: string[];
  cons: string[];
};

export const PRICE_BANDS = [
  { value: "under-50", label: "Under $50" },
  { value: "50-150", label: "$50 – $150" },
  { value: "150-400", label: "$150 – $400" },
  { value: "400-plus", label: "$400+" },
] as const;

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "rating", label: "Highest rated" },
  { value: "name", label: "A – Z" },
] as const;

export const ARTICLE_CATEGORIES = [
  "Setup Ideas",
  "Buying Guides",
  "Productivity",
  "Developer Tools",
  "Tech",
];

export const categories: Category[] = [
  {
    slug: "developer-setup",
    name: "Developer Setup",
    glyph: "💻",
    short: "Stands, splits, and peripherals built for long coding sessions.",
    description:
      "Keyboards, monitors, stands and terminals tuned for people who write code all day. Chosen for stability, key feel and how they hold up over a full week of work.",
    image: catDeveloper,
    itemCount: 24,
  },
  {
    slug: "desk-setup",
    name: "Desk Setup",
    glyph: "🖥️",
    short: "Surfaces, lighting, and layout that make a desk feel intentional.",
    description:
      "Desk mats, risers, cable management and lighting that turn a flat surface into a workspace you actually want to sit at.",
    image: catDesk,
    itemCount: 31,
  },
  {
    slug: "home-office",
    name: "Home Office",
    glyph: "🏠",
    short: "Chairs, ergonomics, and calm for working from anywhere.",
    description:
      "Seating, acoustics and light for rooms that double as studios. Comfort you notice on the third hour, not the first minute.",
    image: catHomeOffice,
    itemCount: 18,
  },
  {
    slug: "tech-accessories",
    name: "Tech Accessories",
    glyph: "⚡",
    short: "Docks, cables, and the small things that scale up.",
    description:
      "Hubs, docks, chargers and cables. Unglamorous gear that quietly decides whether the rest of your setup works.",
    image: catTech,
    itemCount: 27,
  },
  {
    slug: "productivity-gear",
    name: "Productivity Gear",
    glyph: "🎧",
    short: "Focus tools for deep work and quieter afternoons.",
    description:
      "Headphones, timers, notebooks and analogue tools that help you protect attention in a noisy house or office.",
    image: catProductivity,
    itemCount: 21,
  },
];

export const products: Product[] = [
  {
    slug: "aegis-low-profile-keyboard",
    name: "Aegis Low-Profile",
    categorySlug: "developer-setup",
    tagline: "Cherry-tactile, silent, and machined to the millimetre.",
    description:
      "A 65% low-profile board with a gasket-mounted plate, hot-swap sockets and a machined aluminium case. Typing is muted and precise rather than clacky, which makes it easy to live with in a shared room.",
    rating: 4.8,
    priceBand: "150-400",
    priceLabel: "$150 – $400",
    image: pKeyboard,
    pros: [
      "Muted, consistent typing sound at any speed",
      "Hot-swap sockets make switch changes trivial",
      "Machined case has no flex under heavy typing",
    ],
    cons: ["No dedicated function row", "Heavier than most travel boards"],
    features: [
      "65% layout with gasket-mounted plate",
      "Hot-swappable low-profile switches",
      "Bluetooth and USB-C, three paired devices",
      "PBT keycaps with side-lit legends",
    ],
    specs: [
      { label: "Layout", value: "65% (68 keys)" },
      { label: "Switches", value: "Low-profile tactile, hot-swap" },
      { label: "Connectivity", value: "USB-C, Bluetooth 5.2" },
      { label: "Battery", value: "Up to 90 hours, backlight off" },
      { label: "Weight", value: "820 g" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "twin-rail-stand",
    name: "Twin Rail Stand",
    categorySlug: "developer-setup",
    tagline: "Adjustable dual-monitor riser in brushed steel.",
    description:
      "A two-column riser that lifts a laptop and a monitor to the same eye line. The rails adjust in 10 mm steps and the base is heavy enough to stay put when you push a keyboard around.",
    rating: 4.9,
    priceBand: "50-150",
    priceLabel: "$50 – $150",
    image: pStand,
    pros: [
      "Genuinely rigid at full height",
      "Rails adjust without tools",
      "Routes cables behind the column",
    ],
    cons: ["Takes real desk depth", "Only one finish available"],
    features: [
      "Brushed steel column with 10 mm height steps",
      "Weighted base with felt pads",
      "Integrated cable channel",
      "Supports up to 12 kg",
    ],
    specs: [
      { label: "Material", value: "Brushed steel, aluminium top" },
      { label: "Height range", value: "90 – 190 mm" },
      { label: "Max load", value: "12 kg" },
      { label: "Footprint", value: "260 × 210 mm" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "halo-s1-lamp",
    name: "Halo S1 Lamp",
    categorySlug: "desk-setup",
    tagline: "A steady, flicker-free pool of light for late sessions.",
    description:
      "A diffused sphere lamp with a wide, even beam and no visible flicker on camera. Tunable between 2700K and 5000K, with a dimmer that goes genuinely low for evening work.",
    rating: 4.7,
    priceBand: "50-150",
    priceLabel: "$50 – $150",
    image: pLamp,
    pros: ["Flicker-free on video calls", "Dims to a usable 3%", "No hotspot on glossy screens"],
    cons: ["Fixed height", "Cable is not braided"],
    features: [
      "2700K – 5000K tunable white",
      "Opal diffuser, 95 CRI",
      "Stepless dimming to 3%",
      "Memory recall of last setting",
    ],
    specs: [
      { label: "Colour temp", value: "2700K – 5000K" },
      { label: "CRI", value: "95" },
      { label: "Output", value: "480 lumens" },
      { label: "Power", value: "USB-C, 12 W" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "cadence-anc-headphones",
    name: "Cadence ANC",
    categorySlug: "productivity-gear",
    tagline: "Open-back clarity with adaptive noise cancelling.",
    description:
      "Over-ear headphones tuned flat enough for long listening, with adaptive cancelling that handles household noise better than traffic. Clamp force is light, so they stay comfortable past three hours.",
    rating: 4.6,
    priceBand: "150-400",
    priceLabel: "$150 – $400",
    image: pHeadphones,
    pros: ["Comfortable for long sessions", "Neutral tuning", "Multipoint pairing is reliable"],
    cons: ["Cancelling is average on low rumble", "Case is bulky"],
    features: [
      "Adaptive hybrid noise cancelling",
      "40 hour battery with ANC on",
      "Multipoint for two devices",
      "Replaceable ear pads",
    ],
    specs: [
      { label: "Drivers", value: "40 mm dynamic" },
      { label: "Battery", value: "40 h with ANC" },
      { label: "Codecs", value: "AAC, LDAC" },
      { label: "Weight", value: "268 g" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "portway-8-dock",
    name: "Portway 8 Dock",
    categorySlug: "tech-accessories",
    tagline: "Eight ports of aluminium that stays cool under load.",
    description:
      "A compact dock with dual display output, 100 W passthrough charging and an aluminium shell that spreads heat instead of trapping it. Handles a monitor, drive and peripherals from one cable.",
    rating: 4.5,
    priceBand: "50-150",
    priceLabel: "$50 – $150",
    image: pDock,
    pros: ["Runs cool under sustained transfer", "100 W passthrough", "Short, stiff host cable"],
    cons: ["No Ethernet on this model", "Ports are tightly spaced"],
    features: [
      "Dual 4K display output",
      "100 W USB-C passthrough charging",
      "10 Gbps data ports",
      "SD and microSD readers",
    ],
    specs: [
      { label: "Ports", value: "8 (2× USB-C, 3× USB-A, HDMI, SD, microSD)" },
      { label: "Display", value: "2× 4K60" },
      { label: "Charging", value: "100 W passthrough" },
      { label: "Shell", value: "Anodised aluminium" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "arc-vertical-mouse",
    name: "Arc Vertical Mouse",
    categorySlug: "home-office",
    tagline: "A neutral wrist angle you stop noticing after a week.",
    description:
      "A vertical mouse with a matte shell and quiet switches. The angle takes a few days to adapt to, after which most wrist strain from long editing sessions eases off.",
    rating: 4.4,
    priceBand: "under-50",
    priceLabel: "Under $50",
    image: pMouse,
    pros: ["Noticeably kinder on the wrist", "Quiet clicks", "Charges over USB-C"],
    cons: ["Adjustment period is real", "Not suited to gaming"],
    features: [
      "57° vertical grip angle",
      "Silent primary switches",
      "Adjustable 800 – 4000 DPI",
      "USB-C charging, 70 day battery",
    ],
    specs: [
      { label: "Sensor", value: "Optical, 4000 DPI" },
      { label: "Buttons", value: "6 programmable" },
      { label: "Battery", value: "Up to 70 days" },
      { label: "Weight", value: "112 g" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "monolith-desk-mat",
    name: "Monolith Desk Mat",
    categorySlug: "desk-setup",
    tagline: "A matte surface that resets the whole desk.",
    description:
      "A large stitched-edge mat in matte microfibre with a dense rubber base. It quiets keyboard noise, keeps a mouse tracking evenly and gives the desk an obvious visual boundary.",
    rating: 4.7,
    priceBand: "under-50",
    priceLabel: "Under $50",
    image: pKeyboard,
    pros: ["Lies flat out of the box", "Damps keyboard noise", "Edges do not fray"],
    cons: ["Shows dust on darker colours", "Only two sizes"],
    features: [
      "900 × 400 mm work surface",
      "4 mm dense rubber base",
      "Stitched, sealed edges",
      "Spill-resistant weave",
    ],
    specs: [
      { label: "Size", value: "900 × 400 mm" },
      { label: "Thickness", value: "4 mm" },
      { label: "Surface", value: "Matte microfibre" },
      { label: "Base", value: "Natural rubber" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "quarry-monitor-light",
    name: "Quarry Monitor Light",
    categorySlug: "desk-setup",
    tagline: "Asymmetric light that lands on the desk, not the screen.",
    description:
      "A screen-mounted bar that throws light forward onto the desk with almost no reflection on the panel. Useful for anyone working in a dim room with a bright display.",
    rating: 4.6,
    priceBand: "50-150",
    priceLabel: "$50 – $150",
    image: pLamp,
    pros: ["No screen glare", "Frees the whole desk surface", "Wired remote"],
    cons: ["Needs a flat-backed monitor", "Powered from the display's USB port"],
    features: [
      "Asymmetric reflector",
      "Stepless brightness and colour temp",
      "Counterweighted clip mount",
      "Wired puck control",
    ],
    specs: [
      { label: "Length", value: "460 mm" },
      { label: "Colour temp", value: "2700K – 6500K" },
      { label: "Output", value: "420 lux at 45 cm" },
      { label: "Power", value: "USB-A, 5 W" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "still-hours-timer",
    name: "Still Hours Timer",
    categorySlug: "productivity-gear",
    tagline: "A physical timer you flip instead of unlocking a phone.",
    description:
      "An analogue focus timer with three fixed intervals. Turning it over starts a session, which keeps deep work away from a screen that also holds every notification you have.",
    rating: 4.3,
    priceBand: "under-50",
    priceLabel: "Under $50",
    image: pDock,
    pros: ["No app, no account", "Silent countdown", "Sits flat or upright"],
    cons: ["Fixed intervals only", "Alarm is quiet in loud rooms"],
    features: [
      "25 / 50 / 90 minute intervals",
      "Flip-to-start mechanism",
      "Soft chime with mute switch",
      "USB-C rechargeable",
    ],
    specs: [
      { label: "Intervals", value: "25, 50, 90 minutes" },
      { label: "Display", value: "E-ink" },
      { label: "Battery", value: "6 weeks typical" },
      { label: "Body", value: "Aluminium and silicone" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "meridian-task-chair",
    name: "Meridian Task Chair",
    categorySlug: "home-office",
    tagline: "Support that shows up in hour three, not minute one.",
    description:
      "A mesh-back task chair with adjustable lumbar depth and a forward tilt lock. Firm rather than plush, which is what makes it comfortable across a whole working day.",
    rating: 4.8,
    priceBand: "400-plus",
    priceLabel: "$400+",
    image: catHomeOffice,
    pros: ["Genuine lumbar adjustment", "Forward tilt for focused work", "12 year warranty"],
    cons: ["Assembly needs two people", "Firmer than most home chairs"],
    features: [
      "Depth-adjustable lumbar support",
      "4D armrests",
      "Forward tilt lock",
      "Breathable mesh back",
    ],
    specs: [
      { label: "Seat height", value: "430 – 530 mm" },
      { label: "Max load", value: "136 kg" },
      { label: "Recline", value: "4 locking positions" },
      { label: "Warranty", value: "12 years" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "loom-cable-kit",
    name: "Loom Cable Kit",
    categorySlug: "tech-accessories",
    tagline: "Under-desk order in about twenty minutes.",
    description:
      "A kit of braided sleeves, adhesive channels and reusable ties, sized for a normal two-monitor desk. It is the cheapest thing on this list that changes how a setup looks.",
    rating: 4.5,
    priceBand: "under-50",
    priceLabel: "Under $50",
    image: catTech,
    pros: ["Adhesive holds on raw wood", "Ties are reusable", "Enough sleeving for two desks"],
    cons: ["Channels are visible from the side", "Cutting sleeves frays the ends"],
    features: [
      "3 m of braided sleeving",
      "6 adhesive cable channels",
      "40 reusable hook-and-loop ties",
      "Under-desk power tray",
    ],
    specs: [
      { label: "Sleeving", value: "3 m, 20 mm diameter" },
      { label: "Channels", value: "6 × 300 mm" },
      { label: "Ties", value: "40 reusable" },
      { label: "Tray", value: "Steel, 400 mm" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
  {
    slug: "atlas-27-monitor",
    name: "Atlas 27 Monitor",
    categorySlug: "developer-setup",
    tagline: "A 4K panel with text crisp enough for all-day code.",
    description:
      "A 27-inch 4K IPS display with a matte coating and a genuinely useful stand. Text rendering at 100% scaling is the reason to pick it over a cheaper 1440p panel.",
    rating: 4.7,
    priceBand: "400-plus",
    priceLabel: "$400+",
    image: catDesk,
    pros: ["Excellent text clarity", "Matte coating kills reflections", "Height and pivot adjustable"],
    cons: ["60 Hz only", "Speakers are an afterthought"],
    features: [
      "27-inch 4K IPS panel",
      "Matte anti-glare coating",
      "USB-C with 90 W charging",
      "Height, tilt, swivel and pivot",
    ],
    specs: [
      { label: "Panel", value: "27-inch IPS, 3840 × 2160" },
      { label: "Refresh", value: "60 Hz" },
      { label: "Brightness", value: "400 nits" },
      { label: "Inputs", value: "USB-C 90 W, 2× HDMI, DP" },
    ],
    affiliateUrl: "#affiliate-link-placeholder",
  },
];

export const articles: Article[] = [
  {
    slug: "best-desk-accessories-productive-workspace",
    title: "10 Best Desk Accessories for a More Productive Workspace",
    category: "Setup Ideas",
    excerpt:
      "The small additions that change how a desk feels to work at — ranked by how often we still reach for them a year later.",
    cover: aDeskAccessories,
    author: "SetupForge Editorial",
    publishedAt: "2026-08-14",
    readingTime: "9 min read",
    sections: [
      {
        id: "why-accessories-matter",
        heading: "Why accessories matter more than furniture",
        body: [
          "A desk is mostly a flat surface. What decides whether you enjoy sitting at it is the layer on top: where light falls, how cables run, whether your wrists rest at a sane angle. Those are accessory problems, and they are far cheaper to fix than a new desk.",
          "We spent a year rotating gear across four working setups — a shared living room, a small home office, a studio desk and a standing desk — and kept notes on what stayed in place. This list is the gear that survived.",
        ],
      },
      {
        id: "start-with-light",
        heading: "Start with light, not gadgets",
        body: [
          "Almost every uncomfortable desk we tested was under-lit. A bright screen in a dim room forces your eyes to keep adjusting, which reads as fatigue by mid-afternoon.",
          "An asymmetric monitor light or a diffused desk lamp fixes it for less than the cost of a keyboard. Look for a high CRI rating and a dimmer that goes genuinely low, so the same lamp works at 9am and 9pm.",
        ],
      },
      {
        id: "fix-the-cables",
        heading: "Fix the cables once",
        body: [
          "Cable management is the highest-return twenty minutes in this list. Sleeve the runs, stick two or three channels under the desk lip and put the power strip on a tray rather than the floor.",
          "The effect is mostly visual, but it also means you can move the desk, swap a monitor or vacuum underneath without dismantling anything.",
        ],
      },
      {
        id: "protect-attention",
        heading: "Protect attention with something physical",
        body: [
          "The tools that helped focus most were the ones that were not on a screen: a flip timer, a paper notebook for the day's three tasks, and headphones you can put on as a signal to the rest of the house.",
          "None of them are clever. That is the point — they work without asking for an account, an app or a notification.",
        ],
      },
    ],
    recommendedProducts: ["monolith-desk-mat", "quarry-monitor-light", "loom-cable-kit"],
    pros: [
      "Most items cost less than a keyboard",
      "Nearly all changes are reversible",
      "Improvements are noticeable within a day",
    ],
    cons: [
      "Easy to over-buy small accessories",
      "Some items depend on your desk material",
    ],
  },
  {
    slug: "best-laptop-stands-for-developers",
    title: "Best Laptop Stands for Developers",
    category: "Developer Tools",
    excerpt:
      "We tested 14 stands for stability, angle, and how they sit in a real split-screen workflow.",
    cover: aLaptopStands,
    author: "SetupForge Editorial",
    publishedAt: "2026-07-29",
    readingTime: "7 min read",
    sections: [
      {
        id: "what-matters",
        heading: "What actually matters in a stand",
        body: [
          "Height and rigidity, in that order. A stand that puts the screen at eye level but wobbles when you type is worse than no stand at all, because you will stop trusting the desk.",
          "Everything else — finish, folding, travel weight — is preference. Decide first whether the stand lives on your desk permanently or in a bag.",
        ],
      },
      {
        id: "single-vs-dual",
        heading: "Single laptop or laptop plus monitor",
        body: [
          "If a laptop is your only screen, a tall fixed riser is usually enough. Once a second display joins the desk, you want the laptop lifted to the same eye line, which means an adjustable column rather than a fixed wedge.",
          "The dual arrangement also changes where the keyboard goes: with the laptop raised, an external keyboard stops being optional.",
        ],
      },
      {
        id: "our-pick",
        heading: "Our pick",
        body: [
          "The Twin Rail Stand was the only one in the group that stayed rigid at full height while holding a heavy 16-inch machine, and its cable channel keeps the desk readable from the front.",
        ],
      },
    ],
    recommendedProducts: ["twin-rail-stand", "aegis-low-profile-keyboard", "atlas-27-monitor"],
    pros: ["Immediate posture improvement", "Works with any external keyboard"],
    cons: ["Raised laptops need a separate keyboard", "Cheap stands flex badly"],
  },
  {
    slug: "ultimate-home-office-setup-guide",
    title: "The Ultimate Home Office Setup Guide",
    category: "Buying Guides",
    excerpt:
      "A step-by-step plan, from cable routing to the last matte mat, for a desk you'll actually use.",
    cover: aHomeOffice,
    author: "SetupForge Editorial",
    publishedAt: "2026-07-02",
    readingTime: "12 min read",
    sections: [
      {
        id: "pick-the-room",
        heading: "Pick the corner before the gear",
        body: [
          "Where the desk goes decides more than what you put on it. A window to the side gives you daylight without glare; a window behind the screen guarantees squinting by 11am.",
          "Measure the depth you actually have. A 60 cm deep desk cannot comfortably hold a 27-inch monitor and a raised laptop, no matter what the product photos suggest.",
        ],
      },
      {
        id: "seat-first",
        heading: "Spend on the chair first",
        body: [
          "Of everything in a home office, the chair is the item you cannot work around. Look for lumbar depth adjustment and a firm seat rather than deep cushioning.",
        ],
      },
      {
        id: "one-cable",
        heading: "Aim for one cable to the laptop",
        body: [
          "A single dock cable that carries display, power and peripherals is what makes a home desk pleasant to leave and return to. Everything else stays plugged in.",
        ],
      },
      {
        id: "finish-with-sound",
        heading: "Finish with sound and light",
        body: [
          "Once the desk works, deal with the room: a lamp for the evening, headphones for the noisy hours, and a rug or curtain if calls sound echoey.",
        ],
      },
    ],
    recommendedProducts: ["meridian-task-chair", "portway-8-dock", "cadence-anc-headphones"],
    pros: ["Order of purchase saves money", "Works in shared rooms"],
    cons: ["Chair is the largest single cost", "Some steps need measuring first"],
  },
  {
    slug: "best-keyboards-for-programming",
    title: "Best Keyboards for Programming",
    category: "Developer Tools",
    excerpt:
      "Layouts, switch feel and noise levels — what to buy when you type for a living and share a room.",
    cover: aKeyboards,
    author: "SetupForge Editorial",
    publishedAt: "2026-06-18",
    readingTime: "8 min read",
    sections: [
      {
        id: "layout",
        heading: "Layout before switches",
        body: [
          "A 65% board keeps arrows without the numpad, which is the sweet spot for most programmers. Going smaller means learning layers, which is fine — but decide that deliberately rather than by accident.",
        ],
      },
      {
        id: "switch-feel",
        heading: "Switch feel and noise",
        body: [
          "Tactile switches give you feedback without the volume of clicky ones. If you share a room or take calls, a gasket-mounted case with tactile low-profile switches is the quietest combination that still feels good.",
        ],
      },
      {
        id: "split-boards",
        heading: "When a split board is worth it",
        body: [
          "Split boards help if your shoulders ache rather than your wrists. Expect a two-week adjustment and a real drop in speed before it comes back higher than before.",
        ],
      },
    ],
    recommendedProducts: ["aegis-low-profile-keyboard", "arc-vertical-mouse", "monolith-desk-mat"],
    pros: ["Hot-swap boards adapt as preferences change", "Big comfort gain for typists"],
    cons: ["Small layouts need relearning", "Good boards are not cheap"],
  },
  {
    slug: "quiet-desk-focus-tools",
    title: "Focus Tools That Aren't Another App",
    category: "Productivity",
    excerpt:
      "Physical timers, paper and headphones — the low-tech kit that held up across a year of deep work.",
    cover: catProductivity,
    author: "SetupForge Editorial",
    publishedAt: "2026-05-30",
    readingTime: "6 min read",
    sections: [
      {
        id: "why-analogue",
        heading: "Why analogue wins for focus",
        body: [
          "Every focus app lives on the device that also holds your notifications. A physical timer removes that conflict entirely: you flip it, and the phone can stay in another room.",
        ],
      },
      {
        id: "the-kit",
        heading: "The kit that stuck",
        body: [
          "A flip timer, a small notebook for the day's three tasks, and one pair of headphones reserved for focused work. Three items, no subscriptions.",
        ],
      },
    ],
    recommendedProducts: ["still-hours-timer", "cadence-anc-headphones"],
    pros: ["No accounts or subscriptions", "Works away from a desk"],
    cons: ["No tracking or history", "Easy to ignore at first"],
  },
  {
    slug: "one-cable-desk-docks",
    title: "The One-Cable Desk: Docks Worth Buying",
    category: "Tech",
    excerpt:
      "What to look for in a dock so a laptop connects to everything with a single plug — and stays cool doing it.",
    cover: catTech,
    author: "SetupForge Editorial",
    publishedAt: "2026-05-11",
    readingTime: "7 min read",
    sections: [
      {
        id: "power-first",
        heading: "Check charging power first",
        body: [
          "A dock that cannot charge your laptop at full speed defeats the point. For a 14-inch machine look for at least 90 W passthrough; a 16-inch machine wants 100 W.",
        ],
      },
      {
        id: "heat",
        heading: "Heat tells you the build quality",
        body: [
          "Plastic docks under sustained transfer get hot and start dropping displays. An aluminium shell is not styling — it is the heatsink.",
        ],
      },
      {
        id: "displays",
        heading: "Count the displays you actually need",
        body: [
          "Dual 4K60 output is the practical ceiling for most single-cable docks. Beyond that you are into Thunderbolt territory and a different budget.",
        ],
      },
    ],
    recommendedProducts: ["portway-8-dock", "loom-cable-kit", "atlas-27-monitor"],
    pros: ["One cable to leave and return", "Cleans up the desk surface"],
    cons: ["Good docks cost real money", "Port layouts vary widely"],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const categoryName = (slug: string) => getCategory(slug)?.name ?? slug;

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const relatedArticles = (slug: string, limit = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, limit);
