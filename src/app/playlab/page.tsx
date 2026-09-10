import type { Metadata } from "next";
import { ABOUT, type Media } from "@/content/site";
import { Footer } from "@/components/Footer";
import { MediaItem } from "@/components/MediaItem";
import { Shell } from "@/components/Shell";
import { SiteNav } from "@/components/SiteNav";
import { TextLink } from "@/components/TextLink";

const PLAYLAB_PARAGRAPHS = [
  "I’ve spent my career at the intersection of education, community work, product design, and now AI. Playlab is one of the rare companies where all four intersect.",
  "In 2016, I helped start a nonprofit resource center after spending months canvassing South Los Angeles and talking directly with local business owners. We wanted to understand what they actually needed, then connect them with resources and support already available in their community.",
  "That work eventually caught the attention of the City of Los Angeles, and our team was recognized by the Mayor's Office for our work supporting local communities.",
  "At the same time, I was working at a local hospital teaching pediatric obesity management. We taught kids how to exercise and make healthier food choices. Our cohorts culminated in a grocery shopping spree at Food 4 Less to put their new knowledge to work.",
  "About a year later, I pitched the program to local schools. We received funding to expand it and began teaching the curriculum directly in classrooms after school.",
  "Trying to grow that program is actually what introduced me to design. I wanted to build a website and better communicate what we were doing, which eventually led me to UX and General Assembly. I didn't expect it at the time, but that curiosity completely changed my career.",
  "Seven years into my design career, I find myself coming back to a lot of the same things that got me started: education, building tools for people, and learning directly from the communities using them. The difference is that now I have years of product experience and I’m building with AI myself. That’s what made Playlab immediately stand out to me.",
];

const PLAYLAB_MEDIA: (Media | null)[] = [
  null,
  {
    type: "image",
    src: "/playlab/canvasing.png",
    alt: "Grassroots outreach across South Los Angeles",
  },
  {
    type: "image",
    src: "/playlab/award.png",
    alt: "Recognition from the City of Los Angeles",
  },
  {
    type: "image",
    src: "/playlab/whitememorial.png",
    alt: "Health education in South Los Angeles",
  },
  {
    type: "image",
    src: "/playlab/jumpstart.png",
    alt: "After-school health education program",
  },
  {
    type: "image",
    src: "/playlab/generalassembly.png",
    alt: "General Assembly HQ",
  },
  { ...ABOUT.media[2], alt: "AI-native transcript cleaner that I designed and coded" },
];

export const metadata: Metadata = {
  title: "Playlab — Martin Tejeda",
  description: "Why Martin Tejeda is a strong fit for Playlab.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PlaylabPage() {
  return (
    <Shell>
      <div className="project-content" id="playlab-intro">
        <div className="project-text">
          <SiteNav active="work" />
        </div>
        <div className="header-text about-intro-body">
          {PLAYLAB_PARAGRAPHS.map((paragraph, index) => {
            const media = PLAYLAB_MEDIA[index];

            return (
              <div key={paragraph} className="about-intro-block">
                <div className="about-intro-copy">
                  {index === 0 ? (
                    <>
                      <h1>{paragraph}</h1>
                      <hr className="divider playlab-intro-divider" />
                    </>
                  ) : index === PLAYLAB_PARAGRAPHS.length - 1 ? (
                    <p>
                      Seven years into my design career, I find myself coming back to a lot of
                      the same things that got me started: education, building tools for people,
                      and learning directly from the communities using them. The difference is
                      that now I have years of product experience and I’m{" "}
                      <TextLink href="/design-workflow">building with AI myself</TextLink>.
                      That’s what made Playlab immediately stand out to me.
                    </p>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
                {media && (
                  <div className="project-media">
                    <MediaItem media={media} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </Shell>
  );
}
