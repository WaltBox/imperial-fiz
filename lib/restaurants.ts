export type Restaurant = {
  /** kebab slug, used for anchors + image keys */
  slug: string;
  name: string;
  /** short concept descriptor */
  type: string;
  neighborhood: string;
  established: number;
  url: string;
  /** one-line editorial headline */
  tagline: string;
  /** 2–3 sentence editorial body for the spread */
  blurb: string;
  /** verbatim or close-paraphrase signature line; confirm voice w/ client */
  note: string;
  /** the concept's own accent — used as a tab/swatch only, never the page palette */
  accent: string;
  /** readable text color to sit on `accent` */
  accentInk: string;
  /** art-direction note for the photo slot that belongs here */
  shot: string;
  /** real photo in /public */
  image: string;
  /** the restaurant's own careers / apply page (embedded on /careers) */
  careersUrl: string;
};

/**
 * The portfolio. TJ's and Malibu predate the Imperial Fizz banner (the legacy
 * brands); Escondido, Ramble Room and Birdie's were built under it. Order is
 * chronological so the section reads like a dated ledger of openings.
 *
 * NOTE TO CLIENT: founding years, neighborhoods and the `note` lines are drawn
 * from press + each restaurant's own site — confirm before launch.
 */
export const restaurants: Restaurant[] = [
  {
    slug: "tjs-seafood",
    image: "/tjs.avif",
    careersUrl: "https://www.tjsseafood.com/contact/",
    name: "TJ's Seafood Market & Grill",
    type: "Seafood market & grill",
    neighborhood: "Preston Royal & Oak Lawn",
    established: 1989,
    url: "https://www.tjsseafood.com",
    tagline: "The origin. Casual, coastal, fresh.",
    blurb:
      "The family fish market Jon and Natalie Alexis took over in 2009 — and the standard every other table here is measured against. Part market, part grill, part the busiest catering kitchen in the neighborhood. The seafood that threads through all five concepts starts on this counter.",
    note: "“I consider myself an apostle of seafood.”",
    accent: "#1F3A4D",
    accentInk: "#EAF1F4",
    // TJ's Seafood: wide of the market counter on ice — whole fish, hand-lettered
    // signage, morning light through the front glass. People over plate macros.
    shot: "Market counter on crushed ice, whole fish and hand-lettered price cards, morning light",
  },
  {
    slug: "malibu-poke",
    image: "/malibu.jpg",
    careersUrl: "https://www.malibupoke.com/contact/",
    name: "Malibu Poke",
    type: "Southern-California poke",
    neighborhood: "Oak Lawn",
    established: 2017,
    url: "https://www.malibupoke.com",
    tagline: "Sea the view. Bring the kids. Have a seat.",
    blurb:
      "Sashimi-grade fish, scratch sauces, and a build-your-own line that treats poke like the elevated SoCal staple it is — a chef collaboration with Matt McAllister. Bright, fast, and good for you, without ever feeling like a compromise.",
    note: "Freshness, nutrition, and sunshine on a counter.",
    accent: "#1F9E97",
    accentInk: "#03201F",
    // Malibu Poke: overhead of a just-built bowl — sashimi-grade tuna, scratch
    // sauces, vivid vegetables on a bright counter. Clean SoCal daylight.
    shot: "Overhead of a freshly built poke bowl, vivid ingredients, bright daylight counter",
  },
  {
    slug: "escondido",
    image: "/escondido.jpg",
    careersUrl: "https://fohandboh.com/jobs/general-manager-86-problems-escondido-dallas",
    name: "Escondido",
    type: "Classic Tex-Mex",
    neighborhood: "Preston Royal",
    established: 2022,
    url: "https://www.escondidodallas.com",
    tagline: "Happy food. Preston Hollow's largest patio.",
    blurb:
      "Classic Tex-Mex under Otomi folk art and hand-painted Mexican tile, opening onto the biggest patio in the neighborhood. Built to be loud, warm and family-first — the kind of room where nobody flinches when a kid spills the salsa. 2025's Best Queso.",
    note: "“This is happy food, and it should make people happy.”",
    accent: "#C2552B",
    accentInk: "#FCEEE5",
    // Escondido: the patio at golden hour — string lights, Otomi-pattern textiles,
    // painted tile, tables full of families. Warm and full, not styled-empty.
    shot: "Patio at golden hour, string lights and painted tile, full tables of families",
  },
  {
    slug: "ramble-room",
    image: "/ramble.jpg",
    careersUrl: "https://www.rambleroomdallas.com/join-our-team/",
    name: "Ramble Room",
    type: "American bistro",
    neighborhood: "Snider Plaza · University Park",
    established: 2023,
    url: "https://www.rambleroomdallas.com",
    tagline: "A grown-up restaurant for the neighborhood.",
    blurb:
      "Refined American with no pretense — a leathered-marble horseshoe bar, a residential spiral staircase, martinis on tap and a wall of wine. The room Snider Plaza was missing: somewhere you'd happily eat a few times a week. Culinary direction from Stan Rodrigues, ex–Union Square Hospitality Group.",
    note: "“Old-school hospitality, with no pretense.”",
    accent: "#33453B",
    accentInk: "#E9F0EA",
    // Ramble Room: the leathered-marble horseshoe bar in warm evening light —
    // martinis on tap, the wine wall behind, the spiral staircase just in frame.
    shot: "Leathered-marble horseshoe bar, warm evening light, wine wall and spiral staircase",
  },
  {
    slug: "birdies-eastside",
    image: "/birdies.jpg",
    careersUrl: "https://www.birdieseastside.com/join-our-team/",
    name: "Birdie's Eastside",
    type: "Neighborhood bar & grill",
    neighborhood: "East Dallas · Lakewood",
    established: 2023,
    url: "https://www.birdieseastside.com",
    tagline: "Casually Texan. Room for everyone.",
    blurb:
      "A bar and grill on a patio bigger than a basketball court — live music, weekend brunch, a kids' play area, and seafood curated by TJ's. Bright, boho-Texan and easygoing, built so a closed deal, a ballgame and a stroller can all share the same afternoon.",
    note: "“Casually Texan, a little boho, super comfy, and easygoing.”",
    accent: "#D79A2A",
    accentInk: "#241803",
    // Birdie's Eastside: the enormous patio mid-afternoon — live music in the
    // corner, families and dogs, reclaimed wood and turquoise accents, big sky.
    shot: "Enormous patio mid-afternoon, live music, families and dogs, big Texas sky",
  },
];

/** Convenience for the footer / nav. */
export const restaurantLinks = restaurants.map((r) => ({
  name: r.name,
  url: r.url,
  slug: r.slug,
}));
