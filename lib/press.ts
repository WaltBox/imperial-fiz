export type PressItem = {
  outlet: string;
  title: string;
  /** Verified to resolve via research. Swap/extend freely. */
  url: string;
  /** Display date. Approximate where noted — confirm against source. */
  date: string;
  /** sort key, YYYYMM — used only for ordering newest-first */
  sort: number;
  subject: string;
  /** pull a short hook from the piece */
  excerpt?: string;
  featured?: boolean;
  /** the article's own hero/featured image, pulled from each source. These are
   * hotlinked from the publisher's CDN — for production, download and re-host
   * under /public (and confirm usage rights with each outlet). */
  image?: string;
};

/**
 * IN THE NEWS — seed set.
 *
 * URLs + images were pulled from each live article. Headlines and dates are
 * close but APPROXIMATE — confirm against the source before launch. Add objects
 * to keep loading in coverage; newest `sort` floats to the top.
 */
export const press: PressItem[] = [
  {
    outlet: "Dallas Innovates",
    title:
      "How Imperial Fizz Is Building a Dallas Restaurant Portfolio ‘By Doing It Backwards’",
    url: "https://dallasinnovates.com/how-imperial-fizz-is-building-a-dallas-restaurant-portfolio-by-doing-it-backwards/",
    date: "2023",
    sort: 202306,
    subject: "Imperial Fizz",
    excerpt:
      "“We find a great spot in a great neighborhood, and figure out what those neighbors need.”",
    featured: true,
    // Dallas Innovates' CDN blocks hotlinking, so this routes through the
    // weserv image proxy (strips referer). For production, re-host under /public.
    image:
      "https://images.weserv.nl/?url=s24806.pcdn.co/wp-content/uploads/2022/12/Rendering-of-Ramble-Room-in-Snider-Plaza.jpeg&w=1200&output=webp",
  },
  {
    outlet: "Dallas Innovates",
    title:
      "Birdie’s Eastside, a New Marfa-Like Gathering Place from Jon Alexis, Is Coming to East Dallas",
    url: "https://dallasinnovates.com/birdies-eastside-a-new-marfa-like-gathering-place-from-jon-alexis-is-coming-to-east-dallas/",
    date: "2023",
    sort: 202304,
    subject: "Birdie’s Eastside",
    excerpt:
      "A patio bigger than a basketball court, on the old Luby’s site near Mockingbird & Abrams.",
    featured: true,
    // Hotlink-blocked CDN — proxied via weserv. Re-host for production.
    image:
      "https://images.weserv.nl/?url=s24806.pcdn.co/wp-content/uploads/2023/08/BirdiesEastside1-970.jpg&w=1200&output=webp",
  },
  {
    outlet: "CultureMap Dallas",
    title:
      "Birdie’s Eastside Lands in Former Luby’s With Seafood Curated by TJ’s",
    url: "https://dallas.culturemap.com/news/restaurants-bars/birdies-eastside-lubys-tjs-seafood/",
    date: "2023",
    sort: 202305,
    subject: "Birdie’s Eastside",
    image:
      "https://dallas.culturemap.com/media-library/birdie-s.jpg?id=50639563&width=2000&height=1500&quality=50&coordinates=83%2C0%2C83%2C0",
  },
  {
    outlet: "PaperCity",
    title: "Inside Escondido, the Tex-Mex Patio Taking Over Preston Royal",
    url: "https://www.papercitymag.com/restaurants/escondido-tex-mex-patio-tjs-seafood-jon-alexis-preston-royal/",
    date: "2022",
    sort: 202209,
    subject: "Escondido",
    excerpt: "“This is happy food, and it should make people happy.”",
    image:
      "https://www.papercitymag.com/wp-content/smush-webp/2022/08/Escondido-Rendering-1024x659.jpg.webp",
  },
  {
    outlet: "CraveDFW",
    title: "Jon Alexis to Open Ramble Room in Snider Plaza",
    url: "https://cravedfw.com/2022/12/12/jon-alexis-to-open-ramble-room-in-sider-plaza/",
    date: "Dec 2022",
    sort: 202212,
    subject: "Ramble Room",
    excerpt:
      "“A grown-up restaurant where you can have a happy hour, a business meeting, a mom’s night out, or a date.”",
    image:
      "https://i0.wp.com/cravedfw.com/wp-content/uploads/2022/12/unnamed-2022-12-12T093017.387.jpg?w=1024&ssl=1",
  },
  {
    outlet: "PaperCity",
    title: "TJ’s Seafood Market & Grill Turns 30",
    url: "https://www.papercitymag.com/restaurants/dallas-seafood-restaurant-tjs-seafood-market-and-grill/",
    date: "2019",
    sort: 201906,
    subject: "TJ’s Seafood",
    excerpt: "“I consider myself an apostle of seafood.”",
    image:
      "https://www.papercitymag.com/wp-content/smush-webp/2020/02/Curry-Mussels-1-1024x749.jpeg.webp",
  },
  {
    outlet: "Voyage Dallas",
    title: "Meet Jon Alexis of TJ’s Seafood, Malibu Poke & More",
    url: "https://voyagedallas.com/interview/meet-jon-alexis-tjs-seafood-market-grill-malibu-poke-central-dallas/",
    date: "—",
    sort: 202001,
    subject: "Jon Alexis",
    image:
      "https://voyagedallas.com/wp-content/uploads/2017/09/personal_photo-91-e1504971874838-1000x600.jpg",
  },
];

export const pressSorted = [...press].sort((a, b) => b.sort - a.sort);
