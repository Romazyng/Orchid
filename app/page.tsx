import WhyUs from "./ui/WhyUs";
import HeroSection from "./ui/HeroSection";
import Blocks from "./ui/Blocks";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:max-w-full" >
      <HeroSection/>
      <WhyUs/>
      <Blocks/>
    </main>
  );
}


