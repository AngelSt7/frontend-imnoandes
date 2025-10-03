import { BestPracticesSection } from "./components/BestPracticesSection";
import { EquipmentSection } from "./components/EquipmentSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { HeroSection } from "./components/HeroSection";
import { ImageSpecificationsSection } from "./components/ImageSpecificationsSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { TipsSection } from "./components/TipsSection";

export function GuidePhotos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <IntroductionSection />
      <ImageSpecificationsSection />
      <TipsSection />
      <BestPracticesSection />
      <EquipmentSection />
      <FinalCTASection />
    </div>
  )
}
