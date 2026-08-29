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
};

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
  },
];
