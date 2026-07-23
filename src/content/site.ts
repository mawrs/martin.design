export type StageLayer =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string; layout?: "fill" | "portrait" }
  | {
      type: "stage";
      background: StageLayer;
      foreground: StageLayer;
      alt: string;
      /** frame = 16/10, content = inset device, tall = full-width tall stage */
      fit?: "frame" | "content" | "tall";
    }
  | { type: "color"; tint: string; alt: string };

export interface SubProject {
  text: string;
  media: Media[];
}

export interface Project {
  title: string;
  lead: string;
  media: Media[];
  sub?: SubProject[];
  quote?: {
    text: string;
    name: string;
    role: string;
  };
}

export const SITE = {
  name: "Martin Tejeda",
  title: "Martin Tejeda, Freelance Product Designer",
  email: "hi@martintejeda.com",
  linkedin: "https://www.linkedin.com/in/mawrs/",
  year: 2026,
};

/** Intro mirrors Tom.pe: one h1 block with inline company links */
export const INTRO = {
  /** JSX-friendly segments built in the page; this is the plain structure */
  companies: [
    { label: "Northline", href: "#" },
    { label: "Harbor", href: "#" },
    { label: "Meridian", href: "#" },
    { label: "Independent", href: "#" },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "SouthEast Bank",
    lead: "At SouthEast Bank, I redesigned the Deposits intake application end-to-end, turning a high-drop-off flow into one borrowers could actually finish.",
    media: [
      {
        type: "video",
        src: "/projects/seb-deposit-desktop.mp4",
        alt: "SouthEast Bank intake application",
      },
      {
        type: "stage",
        background: { type: "image", src: "/projects/seb-background.png" },
        foreground: { type: "video", src: "/projects/seb-mobile.mp4" },
        alt: "SouthEast Bank mobile deposit flow",
        fit: "tall",
      },
    ],
    sub: [
      {
        text: "I also built a brand new loan calculator for the student loans, replacing an outdated tool buried on the homepage with one that lived inside the flow and helped students make decisions with more confidence.",
        media: [
          {
            type: "video",
            src: "/projects/loan-calculator.mp4",
            alt: "Student loan calculator",
          },
        ],
      },
    ],
    quote: {
      text: "Martin is a lifesaver and we couldn't have redesigned our deposit flows without him.",
      name: "Tom Vernette",
      role: "CTO of SouthEast Bank",
    },
  },
  {
    title: "Slide",
    lead: "Slide needed a self-serve claims process so overworked agents weren't the only path forward. As Sr. Product Designer, I led the web experience for claims, policy details, and payments from start to finish.",
    media: [
      {
        type: "video",
        src: "/projects/slide-web-app.mp4",
        alt: "Brand website mockup",
      },
      {
        type: "stage",
        background: { type: "image", src: "/projects/slide-background.png" },
        foreground: { type: "video", src: "/projects/slide-user-testing.mp4?v=2" },
        alt: "Slide user testing",
        fit: "tall",
      },
    ],
    sub: [
      {
        text: "Before launch, the app was pressure-tested through user testing with customers.",
        media: [],
      },
    ],
    quote: {
      text: "Martin's approach to user-centric design is very innovative and created a stellar experience for our users.",
      name: "Bruce Lucas",
      role: "CEO of Slide",
    },
  },
  {
    title: "Facebook",
    lead: "Admins of large Public Figure Pages were drowning in daily notifications and missing the interactions that mattered. I collaborated with design, research, and product to redesign the system with smart filters, priority ranking, and custom preferences.",
    media: [
      {
        type: "video",
        src: "/projects/facebook-landscape.mp4",
        alt: "Meridian brand landscape",
      },
      {
        type: "video",
        src: "/projects/facebook-architecture.mp4",
        alt: "Architecture brand still",
      },
    ],
    quote: {
      text: "Martin ramped up extremely fast and made an impact immediately. He understood the need and collaborated with the rest of the team effectively.",
      name: "Terri McNutty",
      role: "Product Design Manager at Facebook",
    },
  },
  {
    title: "Square",
    lead: "A surge in phishing attacks against sellers pushed us to rethink how email led people into the dashboard. On the Risk team, I partnered with the design system team to redesign and componentize Square's email templates for a safer, clearer experience.",
    media: [
      {
        type: "video",
        src: "/projects/square-email.mp4",
        alt: "Abstract generative study",
      },
      {
        type: "video",
        src: "/projects/square-example-1.mp4",
        alt: "Writing and notes",
      },
    ],
    sub: [
      {
        text: "The new templates launched cleaner, more on-brand, and harder for scammers to imitate, giving sellers a more trustworthy path from inbox to dashboard.",
        media: [
          {
            type: "video",
            src: "/projects/square-example-2.mp4",
            alt: "Design process still",
          },
        ],
      },
    ],
    quote: {
      text: "Martin demonstrated excellent product thinking and was a true team player during our work together.",
      name: "Bryan Rees",
      role: "Product Design Manager at Square",
    },
  },
];
