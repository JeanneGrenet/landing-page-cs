import CtaSection from "@/components/CtaSection";
import HeroSection from "../components/hero";
import ServicesSection from "../components/services";
import FooterSection from "@/components/footer";
import ProjectsSection from "@/components/projects";
import WorkingSection from "@/components/working";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CtaSection label="Prêt à travaillez avec nous ?" />
      <ProjectsSection />
      <WorkingSection />
      <CtaSection label="Alors, convaincu ?" />
      <FooterSection />
    </>
  );
}
