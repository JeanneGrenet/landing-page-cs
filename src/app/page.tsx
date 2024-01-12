import MainCtaSection from "@/components/maintCtaSection";
import HeroSection from "../components/hero";
import ServicesSection from "../components/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MainCtaSection label="Prêt à travaillez avec nous ?" />
      <MainCtaSection label="Alors, convaincu ?" />
    </>
  );
}
