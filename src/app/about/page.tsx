import type { Metadata } from "next";
import { ABOUT } from "@/content/site";
import { Shell } from "@/components/Shell";
import { AboutIntro } from "@/components/AboutIntro";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: ABOUT.title,
  description: ABOUT.description,
};

export default function AboutPage() {
  return (
    <Shell>
      <AboutIntro />
      <Footer />
    </Shell>
  );
}
