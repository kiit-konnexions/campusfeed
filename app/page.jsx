import HeroSection from '@/components/sections/HeroSection'
import AboutUsSection from "@/components/sections/AbousUsSection";
import Features from "@/components/sections/Features";

export default function Landing() {
   return (
    <div>
      <HeroSection/>
      <Features />
      <AboutUsSection/>
    </div>
  );
}
