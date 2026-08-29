export type StackTool = {
  name: string;
  blurb?: string;
  href: string;
  icon: string;
};

export type StackGroup = {
  title: string;
  tools: StackTool[];
  comingSoon?: boolean;
};

export const recipe: {
  kicker: string;
  heading: string;
  note: string;
  body: string;
  groups: StackGroup[];
} = {
  kicker: "Day-To-Day",
  heading: "Recipe",
  note: "(App-Stack)",
  body: "I use a handful of wonderful apps that help me with productivity, focus, organization, business, automations, and of course--design. Check em’ out.",
  groups: [
    {
      title: "Design",
      tools: [
        { name: "Figma®", href: "https://www.figma.com", icon: "/icons/figma.svg" },
        {
          name: "Adobe Creative Suite®",
          href: "https://www.adobe.com/creativecloud.html",
          icon: "/icons/adobe.svg",
        },
      ],
    },
    {
      title: "Organization",
      tools: [
        {
          name: "Notion®",
          blurb: "All-in-one tool for notes, data, content management & more.",
          href: "https://www.notion.so",
          icon: "/icons/notion.svg",
        },
        {
          name: "Notion Calendar®",
          blurb: "Minimal calendar that works with Notion®",
          href: "https://www.notion.com/product/calendar",
          icon: "/icons/notion.svg",
        },
        {
          name: "Dropbox®",
          blurb: "File storage service that seamlessly connects to your device as a drive.",
          href: "https://www.dropbox.com",
          icon: "/icons/dropbox.svg",
        },
        {
          name: "Todoist®",
          blurb: "To do list app built to keep you organized.",
          href: "https://todoist.com",
          icon: "/icons/todoist.svg",
        },
      ],
    },
    {
      title: "Focus",
      tools: [
        {
          name: "Spotify®",
          blurb: "Music + podcast streaming app.",
          href: "https://www.spotify.com",
          icon: "/icons/spotify.svg",
        },
      ],
    },
    {
      title: "Learn + Inspo",
      tools: [
        {
          name: "Cosmos®",
          blurb: "Inspiration app built for creatives.",
          href: "https://www.cosmos.so",
          icon: "/icons/cosmos-stack.svg",
        },
        {
          name: "Layers®",
          blurb: "Inspiration app built for designers.",
          href: "https://www.layers.to",
          icon: "/icons/layers.svg",
        },
        {
          name: "Instagram®",
          blurb: "Image & video based social media app.",
          href: "https://www.instagram.com",
          icon: "/icons/instagram-stack.svg",
        },
        {
          name: "Twitter/X®",
          blurb: "Text, video, and image based social media app.",
          href: "https://x.com",
          icon: "/icons/twitter.svg",
        },
        {
          name: "Medium®",
          blurb: "A place to read about the things you’re interested in.",
          href: "https://medium.com",
          icon: "/icons/medium.svg",
        },
      ],
    },
    {
      title: "Communications",
      tools: [],
      comingSoon: true,
    },
    {
      title: "Automation",
      tools: [],
      comingSoon: true,
    },
  ],
};
