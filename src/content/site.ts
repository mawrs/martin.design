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
    "My design career started at a creative agency called Underbelly. People hear agency and picture a room full of designers, but we had four departments — design, marketing, development, and video production. I'd be working on notification settings for Facebook and look up to see a commercial being shot across the room.\n\nWe also built internal tools during our down time, including a project management app that predicted the earned value of a contract as we worked on it and told us whether we'd deliver on time based on our weekly updates. That's the kind of problem I keep getting pulled toward, where the design work and the business math turn out to be the same problem.",
    "After two years I took a risk and went out on my own. I ran a one-person studio and did the research, the design, and the development myself. If a client needed copywriting or motion design, I was there for that too. Somewhere in the middle of that I started building my own products. Transcript Shield is one of them, a browser based tool that cleans up interview transcripts and strips out the PII before they get shared, and it exists because I kept doing that by hand on my own research.\n\nShipping something alone means finding ways to move faster, so I've built AI into most of my process. It handles the first pass on research synthesis, early screens, and working code, which gets me to something clickable in a day and leaves the rest of the week to sharpen the visual details.",
    "Six years between the agency and my own studio made me curious about every discipline that goes into a company. I learned early that they all coexist, and that the design matters as much as the copy, which matters as much as the backend infrastructure holding it up.\n\nI'm dedicating the second half of 2026 to exploring in-house roles at companies that want a generalist who loves design and cares about the details while staying aware of the day to day work that brings it all together. Reach out and we can chat over a virtual coffee.",
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "Cross-profile notifications",
    slug: "facebook",
    lead: "Admins running three or more Pages got every notification in one stream, and they kept missing comments that needed a same-day answer.\n\nNotification ranking belonged to another team, so we worked inside the existing schema and shipped switching without the unified inbox we had sketched.\n\nI owned the notification settings, which meant deciding which Pages an admin hears from at all and which kinds of notifications come through from each one, so someone managing three Pages could turn off the ones they check weekly and still catch a comment on the one that matters.\n\nIt shipped as Cross-Profile Notifications.",
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
  },
  {
    title: "Email design",
    slug: "square",
    lead: "Sellers reported a spike in phishing attempts in 2020. On the Risk team we looked into it and found part of the problem was coming from us, because every department had built its own email templates and no two Square emails looked alike. A seller had no reliable way to tell a real one from a fake.\n\nNobody could force other teams to migrate, so I worked with the design system team on a component library and we moved the highest volume emails over ourselves as proof it worked.\n\nI owned the sender identity rules and the templates nobody wanted, which meant dynamic content, plain text fallbacks, and emails that still read as real with images blocked.\n\nFeel free to reach out to learn more about the results.",
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
      {
        type: "video",
        src: "/projects/square-example-2.mp4",
        alt: "Design process still",
      },
    ],
  },
  {
    title: "Insurance claims intake",
    slug: "slide",
    lead: "At Slide, insurance claims were being processed over the phone, an average of 20 minutes per claim.\n\nWe spent a week in Tampa learning how agents triaged a claim over the phone, and turned that into a flow customers could complete themselves on the Slide website.\n\nI owned intake and its edge cases, which meant claims with more than one kind of damage, filings from someone who isn't the policyholder, and a lookup that fails halfway through.\n\nWithin six months, 45% of claims came in without a phone call.",
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
  },
  {
    title: "Bank account opening",
    slug: "southeast-bank",
    lead: "Opening an account meant sitting with a branch manager while they clicked through an internal tool on your behalf. There was no version a customer could use alone.\n\nThey hired me to make it customer facing and to let someone open checking, savings, and a CD in one pass. That second part turned out to be a technical nightmare, so we scoped down to a single product flow and got one thing working properly instead of three things half working.\n\nI designed the whole deposit flow, from the first screen to funding, and I designed the states around it so a failed bank link, a transfer sitting pending for days, and someone returning a week later all had a defined screen.\n\nThat single product flow is the intake their customers use today.",
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
  },
  {
    title: "Loan calculator",
    slug: "southeast-bank-loan-calculator",
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
