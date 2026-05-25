import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import OOPPrinciples from "@/components/OOPPrinciples";
import ClassDiagram from "@/components/ClassDiagram";
import Languages from "@/components/Languages";
import Pipeline from "@/components/Pipeline";
import TechStack from "@/components/TechStack";
import Download from "@/components/Download";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Overview />
        <Architecture />
        <UseCases />
        <OOPPrinciples />
        <ClassDiagram />
        <Languages />
        <Pipeline />
        <TechStack />
        <Download />
        <Team />
      </main>
      <Footer />
    </>
  );
}
