import type { Metadata } from "next";
import { AI_WORKFLOW, AI_WORKFLOW_STAGES } from "@/content/site";
import { Shell } from "@/components/Shell";
import { AiWorkflowIntro } from "@/components/AiWorkflowIntro";
import { Divider } from "@/components/Divider";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: AI_WORKFLOW.title,
  description: AI_WORKFLOW.description,
};

export default function DesignWorkflowPage() {
  return (
    <Shell>
      <AiWorkflowIntro />
      <Divider />
      <Projects
        projects={AI_WORKFLOW_STAGES}
        homeNav={{ label: "Design workflow", logo: "" }}
      />
      <Footer />
    </Shell>
  );
}
