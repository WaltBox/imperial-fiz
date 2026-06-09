export type MediaItem = {
  kind: "Podcast" | "Video" | "Radio" | "Feature";
  show: string;
  title: string;
  /** YouTube video id — the part after watch?v= . This is what gets embedded. */
  youtubeId: string;
  /** display date, e.g. "Jul 2025" */
  date: string;
  /** YYYYMMDD upload date — used to sort newest → oldest */
  published: number;
  /** the hero video at the top of the section */
  featured?: boolean;
};

/**
 * PODS & MORE — embedded videos/podcasts.
 *
 * Each item embeds inline (lite YouTube player — see components/ui/YouTubeEmbed).
 * To add an appearance: copy the id from its YouTube URL into `youtubeId`, and
 * set `date` + `published` (upload date). The `featured` item is the hero; the
 * rest render in the carousel, sorted newest → oldest by `published`.
 *
 * Dates are the real YouTube upload dates. Titles are close paraphrases of each
 * video's title — confirm before launch.
 */
export const media: MediaItem[] = [
  {
    kind: "Podcast",
    show: "Podcast appearance",
    title: "Jon Alexis on Imperial Fizz & doing it backwards",
    youtubeId: "DhrCkqfxBC0",
    date: "Jul 2025",
    published: 20250714,
    featured: true,
  },
  {
    kind: "Video",
    show: "On The Spot · Venture",
    title: "On The Spot with Colin Beams & Jon Alexis",
    youtubeId: "ooBTD5Tez1U",
    date: "Sep 2025",
    published: 20250909,
  },
  {
    kind: "Video",
    show: "Tasting Tales",
    title: "Escondido: Mexican tile & Otomi folk art in Dallas",
    youtubeId: "wCPnZHYjveM",
    date: "Feb 2025",
    published: 20250212,
  },
  {
    kind: "Video",
    show: "CW33 (KDAF)",
    title: "The Ramble Room: fan favorites with a cool atmosphere",
    youtubeId: "Xz3GT1ePh7s",
    date: "Jun 2023",
    published: 20230620,
  },
  {
    kind: "Video",
    show: "Dallas Avenue",
    title: "Escondido Tex-Mex Patio",
    youtubeId: "uk76D8ldals",
    date: "Apr 2023",
    published: 20230430,
  },
  {
    kind: "Video",
    show: "Meatless with Amanda",
    title: "Meatless Monday at TJ’s Seafood",
    youtubeId: "07wmookJ7Wc",
    date: "Oct 2021",
    published: 20211004,
  },
  {
    kind: "Podcast",
    show: "Restaurant Unstoppable",
    title: "Jon Alexis on Reinventing Seafood in Dallas",
    youtubeId: "4RE9J16_s-A",
    date: "Mar 2020",
    published: 20200304,
  },
  {
    kind: "Video",
    show: "KVUE · Foodie Friday",
    title: "Making healthy, tasty bowls at Malibu Poke",
    youtubeId: "HdaHhfHboV4",
    date: "Feb 2019",
    published: 20190215,
  },
  {
    kind: "Video",
    show: "KVUE",
    title: "Raw interview: Malibu Poke’s Jon Alexis on healthy bowls",
    youtubeId: "fdOYSNQCvoM",
    date: "Feb 2019",
    published: 20190214,
  },
  {
    kind: "Video",
    show: "FOX 4 Dallas–Fort Worth",
    title: "Cooking a Whole Fish at TJ’s",
    youtubeId: "n24TZdJM8TU",
    date: "Jun 2018",
    published: 20180613,
  },
  {
    kind: "Podcast",
    show: "Growlersations",
    title: "Episode 5: Jon Alexis of Malibu Poke",
    youtubeId: "o6UXMTevdr0",
    date: "Dec 2017",
    published: 20171204,
  },
  {
    kind: "Video",
    show: "FirstClassDallas",
    title: "TJ’s Seafood on Oak Lawn Avenue, Dallas",
    youtubeId: "e1s2rzvIS4E",
    date: "Jul 2017",
    published: 20170710,
  },
  {
    kind: "Video",
    show: "Video feature",
    title: "TJ’s Seafood Market with Jon Alexis",
    youtubeId: "q6MLfD0KALg",
    date: "Mar 2013",
    published: 20130323,
  },
  {
    kind: "Video",
    show: "Thrillist",
    title: "TJ’s Seafood, From Start to Finish",
    youtubeId: "gCCgsvZpuX0",
    date: "Dec 2012",
    published: 20121205,
  },
];

/** Newest → oldest. */
export const mediaByDate = [...media].sort((a, b) => b.published - a.published);
