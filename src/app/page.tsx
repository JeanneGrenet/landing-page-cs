"use client";
import CtaSection from "@/components/CtaSection";
import HeroSection from "../components/hero";
import ServicesSection from "../components/services";
import FooterSection from "@/components/footer";
import ProjectsSection from "@/components/projects";
import WorkingSection from "@/components/working";
import PresentationSection from "@/components/presentation";
import NavSection from "@/components/nav";

export default function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <ServicesSection />
      <CtaSection label="Ça vous intéresse ?" />
      <PresentationSection />
      <WorkingSection />
      <ProjectsSection />
      <CtaSection label="Alors, convaincu ?" />
      <FooterSection />
    </>
  );
}
