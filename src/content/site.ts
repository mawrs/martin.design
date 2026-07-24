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
  title: "Martin Tejeda, Product Designer with 7 years experience",
  description:
    "I'm Martin, a Designer with 7 years experience building clear, considered interfaces. Most recently I led product design at SouthEast Bank, a platform for personalized financial solutions. I simplified insurance claims at Slide, reduced notification noise at Facebook, rebuilt email systems at Square, and continue independent work under my own name.",
  email: "hi@martintejeda.com",
  linkedin: "https://www.linkedin.com/in/mawrs/",
  year: 2026,
};

export const PROJECTS: Project[] = [
  {
    title: "SouthEast Bank",
    lead: "A year-long initiative to systematically overhaul the Deposits intake application, one phase at a time. The result was a polished flow that felt intuitive and easy to finish.",
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
        text: "As an aside, I redesigned the Loan Calculator that educated college students on their financing options so they can make a decision with confidence.",
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
      text: "Martin was such a great addition to the team. I hope we get to work together again.",
      name: "Tom Vernette",
      role: "CTO of SouthEast Bank",
    },
  },
  {
    title: "Slide",
    lead: "Designed the self-serve claim process for Slide to augment a lot of the workload that was being done by manual agents over the phone.",
    media: [
      {
        type: "video",
        src: "/projects/slide-web-app.mp4",
        alt: "Brand website mockup",
      },
      {
        type: "stage",
        background: { type: "image", src: "/projects/slide-background.png" },
        foreground: { type: "video", src: "/projects/slide-executives.mp4" },
        alt: "Slide executive presentation",
        fit: "tall",
      },
    ],
    sub: [
      {
        text: "Our team flew to Tampa, Florida to scope out the work before starting the design & development using the Google Ventures playbook.",
        media: [],
      },
    ],
    quote: {
      text: "It's amazing how quick Martin's team came in and shaped the new direction of Slide. We're very thankful.",
      name: "Bruce Lucas",
      role: "CEO of Slide",
    },
  },
  {
    title: "Facebook",
    lead: "As part of a 3-month initiative, our PED team explored ways to optimize Notifications for admins who ran multiple Facebook Pages at once.",
    media: [
      {
        type: "video",
        src: "/projects/facebook-1.mp4",
        alt: "Meridian brand landscape",
      },
      {
        type: "video",
        src: "/projects/facebook-2.mp4",
        alt: "Architecture brand still",
      },
    ],
    sub: [
      {
        text: "The end result was what we now call Cross-Profile Notifications, giving admins a focused view of each Page's notifications.",
        media: [],
      },
    ],
    quote: {
      text: "Martin ramped up extremely fast and made an impact immediately. He understood our needs and collaborated with the rest of the team effectively.",
      name: "Terri McNutty",
      role: "Product Design Manager at Facebook",
    },
  },
  {
    title: "Square",
    lead: "A surge in phishing attacks against sellers pushed us to rethink Square's emails. Before the redesign, there was no set visual identity. Each department kinda did whatever they wanted.",
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
        text: "On the Risk team, I partnered with the design system team to redesign and componentize the templates so emails felt safer, more on-brand, and harder for scammers to imitate.",
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
