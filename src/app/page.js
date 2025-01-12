import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import emailSection from "./components/emailSection";
import CommingSoon from "./components/ComingSoon";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">


      <div className="container mx-auto py-4 px-10">
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <emailSection />
        <CommingSoon/>
      </div>
    </main>


  );
}
