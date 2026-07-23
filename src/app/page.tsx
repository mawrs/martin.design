import { PROJECTS } from "@/content/site";
import { Shell } from "@/components/Shell";
import { Intro } from "@/components/Intro";
import { Divider } from "@/components/Divider";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Shell>
      <Intro />
      <Divider />
      <Projects projects={PROJECTS} />
      <Footer />
    </Shell>
  );
}
