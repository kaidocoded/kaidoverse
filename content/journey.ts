export type JourneyEntry = {
  start: string;
  end: string;
  title: string;
  org: string;
  detail: string;
  current: boolean;
  href?: string;
};

export const journey = {
  heading: "Journey",
  subhead: "Dive-in to my journey as a creative thinker and maker of things.",
  opportunity: "Have an opportunity?",
  entries: [
    {
      start: "02/22’",
      end: "Today",
      title: "Growing...",
      org: "Kaidoverse®",
 
      detail: "Personal brand",
      current: true,
      href: "/",
    },
    {
      start: "06/23’",
      end: "04/24’",
      title: "Graphic + UI Design",
      org: "Vitl Power®",
      detail: "Solar energy company",
      current: false,
    },
    {
      start: "03/22’",
      end: "03/23’",
      title: "Design + Photography",
      org: "Studiio™",
      detail: "Creative media agency",
      current: false,
    },
  ] satisfies JourneyEntry[],
};
