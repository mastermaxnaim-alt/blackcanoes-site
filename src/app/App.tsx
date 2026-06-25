import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { BrandStorySection } from "./components/BrandStorySection";
import { PolynesianHeritageSection } from "./components/PolynesianHeritageSection";
import { ArtisanalFabricationSection } from "./components/ArtisanalFabricationSection";
import { CanoesCollectionSection } from "./components/CanoesCollectionSection";
import { EnvironmentalSection } from "./components/EnvironmentalSection";
import { OceanExperienceSection } from "./components/OceanExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-black">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <PolynesianHeritageSection />
      <ArtisanalFabricationSection />
      <CanoesCollectionSection />
      <EnvironmentalSection />
      <OceanExperienceSection />
      <ContactSection />
    </div>
  );
}
