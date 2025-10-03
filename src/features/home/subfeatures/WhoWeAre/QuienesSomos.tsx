import { HeroSection, MissionSection, ServicesSection, StatsSection, StorySection } from '@/src/features/home/subfeatures/WhoWeAre/components';

export function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StorySection />
      <StatsSection />
      <ServicesSection />
      <MissionSection />
    </div>
  )
}
