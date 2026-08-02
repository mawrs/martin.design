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
  /** Unique section id when title is shared across projects */
  slug?: string;
  /** Optional mark shown beside the project title */
  logo?: string;
  /** Logo height in px; width scales with aspect ratio. Default 22. */
  logoHeight?: number;
  lead: string;
  media: Media[];
  sub?: SubProject[];
}

export const SITE = {
  name: "Martin Tejeda",
  title: "Martin Tejeda, Product Designer with 7 years experience",
  description:
    "I'm Martin, a Designer with 7 years experience building clear, considered interfaces. Most recently I led product design at SouthEast Bank, a platform for personalized financial solutions. I simplified insurance claims at Slide, reduced notification noise at Facebook, rebuilt email systems at Square, and continue independent work under my own name.",
  email: "contact@martin.design",
  linkedin: "https://www.linkedin.com/in/mawrs/",
  year: 2026,
};

export const ABOUT = {
  title: "About Martin Tejeda",
  description:
    "Product designer with a background in health — agency work, independent practice, and a focus on clear interfaces.",
  paragraphs: [
    "I'm Martin Tejeda. Born and raised in San Diego, and now residing in Salt Lake City where I'm slowly turning into a snowboarder and a fly fisherman.",
    "My design career started at a creative agency called Underbelly. People hear agency and picture a room full of designers, but we had four departments — design, marketing, development, and video production. During my free time I used the cyc wall to sharpen my photography and videography skills.",
    "After two years I took a risk and branched out on my own. I ran a one-person studio and offered research, design, and development. Along the way I built internal tools to speed up my workflow. Transcript Shield is the latest, a tool that cleans up interview transcripts and strips out the PII before they get used in AI analysis.\n\nAI was a big part of why the one-person setup works. Over time I built a tight research-to-design-to-development workflow that let me move faster and get work to clients sooner.",
    "Design, copywriting, engineering, and support are links on the same chain. A customer experiences all of it at once and doesn't care which team owned which part.\n\nThe tradeoff with contract work was seeing that chain from the outside. You're with a team for a finite amount of time. On shorter projects, you hand it off and leave before you get to see how it performed in the real world.\n\nI'm dedicating the second half of 2026 to finding an in-house role where I can stay with a product and a team past the handoff. If you're looking for a design generalist who cares about the craft as much as the overall company direction, reach out and we can chat over a virtual coffee.",
  ],
  /** Media shown after each paragraph block except the last */
  media: [
    { type: "image" as const, src: "/projects/fishing.webp", alt: "Fly fishing in Montana" },
    { type: "image" as const, src: "/projects/underbelly.webp", alt: "Underbelly team photo" },
    { type: "video" as const, src: "/projects/ts-demo.mp4", alt: "Transcript Shield demo" },
  ] satisfies Media[],
};

export const PROJECTS: Project[] = [
  {
    title: "Cross-profile notifications",
    slug: "facebook",
    logo: "/projects/facebook-logo.svg",
    logoHeight: 19,
    lead: "Facebook users running three or more Pages felt overwhelmed by the volume of notifications they got day to day.\n\nWe tested several solutions and landed on a way to toggle between notifications from different Pages without swapping the entire Facebook account.\n\nI worked on the Page-switching interaction and the notification settings, where admins chose which types of notifications they wanted and from which Pages.\n\nIt shipped as Cross-Profile Notifications.",
    media: [
      {
        type: "video",
        src: "/projects/facebook-1.mp4",
        alt: "Filtering through notifications",
      },
      {
        type: "video",
        src: "/projects/facebook-2.mp4",
        alt: "Managing the Page settings",
      },
    ],
  },
  {
    title: "Email design",
    slug: "square",
    logo: "/projects/square-logo.svg",
    logoHeight: 19,
    lead: "A surge in phishing attempts on Square sellers prompted our team to revisit outgoing marketing workflows and risk profiles.\n\nAs it turned out, every department had built their own email templates over the years and no two Square emails looked alike. A seller had no reliable way to tell a real one from a fake.\n\nI worked with the design system team on a bespoke component library for emails, and we categorized them into seven thematic buckets.\n\nThe result was a structured email design system that stayed modular and on brand.",
    media: [
      {
        type: "video",
        src: "/projects/square-email.mp4",
        alt: "Opening a new Square marketing email",
      },
      {
        type: "video",
        src: "/projects/square-example-1.mp4",
        alt: "Before & after of a marketing email",
      },
      {
        type: "video",
        src: "/projects/square-example-2.mp4",
        alt: "Before & after of a marketing email",
      },
    ],
  },
  {
    title: "Insurance claims intake",
    slug: "slide",
    logo: "/projects/slide-logo.svg",
    logoHeight: 18,
    lead: "At Slide, insurance claims were being processed over the phone, an average of 20 minutes per claim.\n\nWe spent a week in Tampa learning how agents triaged a claim over the phone, and turned that into a flow customers could complete themselves on the Slide website.\n\nI owned the digitization of choosing the right claim online and providing the minimum information for Slide to get started.\n\nThe web app was a huge success. Within six months, 45% of claims came in without a phone call. Months later, Slide raised a $35M round to expand into other parts of Florida.",
    media: [
      {
        type: "video",
        src: "/projects/slide-web-app.mp4",
        alt: "Slide self-service claims process",
      },
      {
        type: "stage",
        background: { type: "image", src: "/projects/slide-background.png" },
        foreground: { type: "video", src: "/projects/slide-executives.mp4" },
        alt: "Week-long sprint with Slide executives",
        fit: "tall",
      },
    ],
  },
  {
    title: "Bank account opening",
    slug: "southeast-bank",
    logo: "/projects/seb-logo.svg",
    logoHeight: 18,
    lead: "Opening an account at SouthEast Bank meant sitting with a branch manager while they clicked through an internal tool on your behalf. There was no version a customer could use alone.\n\nThey hired me to make it customer facing and to let someone open checking, savings, and CD accounts all in one pass. The multi-product flow turned out to be a technical nightmare, so we scoped down to a single product flow and let customers open one of those products at a time.\n\nI designed the deposit flow end-to-end, from the first screen to funding, including the states around insufficient funds, invalid KYC, and joint owner flows.\n\nThat single product flow is the intake their customers use today.",
    media: [
      {
        type: "video",
        src: "/projects/seb-deposit-desktop.mp4",
        alt: "Desktop intake application",
      },
      {
        type: "stage",
        background: { type: "image", src: "/projects/seb-background.png" },
        foreground: { type: "video", src: "/projects/seb-mobile.mp4" },
        alt: "Mobile intake application",
        fit: "tall",
      },
    ],
  },
  {
    title: "Loan calculator",
    slug: "southeast-bank-loan-calculator",
    logo: "/projects/seb-logo.svg",
    logoHeight: 18,
    lead: "Students were abandoning the loan application partway through, and the bank assumed it was the form. I talked to students and it was the rates. They were being asked to choose between fixed and variable without understanding what either one would cost them, so they closed the tab rather than guess.\n\nI designed a calculator that showed both rate types side by side over the life of the loan, so a student could see what variable actually means when it moves and pick with a reason instead of a guess.\n\nRebuilding the entire screen would have taken months we didn't have, so we placed it under the existing loan options where students were already deciding.",
    media: [
      {
        type: "video",
        src: "/projects/loan-calculator.mp4",
        alt: "Student loan calculator",
      },
    ],
  },
];
