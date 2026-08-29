export type ProjectIndexItem = {
  title: string;
  years: string[];
  status?: "wip";
};

export type ProjectDetail = {
  aboutHeading: string;
  aboutBody: string;
  indexHeading: string;
  indexBody: string;
  index: ProjectIndexItem[];
};

export type Project = {
  slug: string;
  client: string;
  href: string;
  image: string;
  imageFit: "cover" | "contain";
  height: "short" | "tall";
  chrome: "website" | "graphic";
  urlLabel?: string;
  fileLabel?: string;
  featured: boolean;
  detail: ProjectDetail;
};

const placeholderAbout =
  "Lorem ipsum dolor sit amet consectetur. Sagittis pretium sed risus posuere semper. Aliquam tincidunt id dignissim vitae. Ut mattis aliquet at ipsum.";

export const projects: Project[] = [
  {
    slug: "stachehaus",
    client: "Stachehaus™",
    href: "https://stache.haus",
    image: "/images/projects/stachehaus.jpg",
    imageFit: "cover",
    height: "short",
    chrome: "website",
    urlLabel: "https://stache.haus",
    featured: true,
    detail: {
      aboutHeading: "About Them",
      aboutBody: placeholderAbout,
      indexHeading: "Project Index (Stachehaus)",
      indexBody: placeholderAbout,
      index: [
        {
          title: "-> Brand-Deck (Bad Birdie®)",
          years: ["2024"],
          status: "wip",
        },
        {
          title: "-> Website-Dsgn (Bartleby & Sage®)",
          years: ["2024"],
          status: "wip",
        },
        {
          title: "-> Sub Website-Dsgn (Stachehaus™)",
          years: ["2024"],
        },
        {
          title: "-> Primary Website-Dsgn (Stachehaus™)",
          years: ["2024"],
        },
        {
          title: "-> Brand-Kit + Brand-Deck (Stachehaus™)",
          years: ["2023", "2024"],
        },
      ],
    },
  },
  {
    slug: "palm-ocean",
    client: "Palm & Ocean®",
    href: "#",
    image: "/images/projects/palm-ocean.png",
    imageFit: "contain",
    height: "tall",
    chrome: "graphic",
    fileLabel: "logo-mark.dsgn",
    featured: true,
    detail: {
      aboutHeading: "About Them",
      aboutBody: placeholderAbout,
      indexHeading: "Project Index (Palm & Ocean)",
      indexBody: placeholderAbout,
      index: [
        {
          title: "-> Logo-Mark (Palm & Ocean®)",
          years: ["2024"],
        },
        {
          title: "-> Brand-Kit (Palm & Ocean®)",
          years: ["2024"],
          status: "wip",
        },
      ],
    },
  },
  {
    slug: "houston-ray",
    client: "Houston Ray™",
    href: "#",
    image: "/images/projects/houston-ray.png",
    imageFit: "contain",
    height: "tall",
    chrome: "graphic",
    fileLabel: "logo-mark.dsgn",
    featured: true,
    detail: {
      aboutHeading: "About Them",
      aboutBody: placeholderAbout,
      indexHeading: "Project Index (Houston Ray)",
      indexBody: placeholderAbout,
      index: [
        {
          title: "-> Logo-Mark (Houston Ray™)",
          years: ["2024"],
        },
        {
          title: "-> Brand-Deck (Houston Ray™)",
          years: ["2024"],
          status: "wip",
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
