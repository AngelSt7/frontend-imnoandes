import { ChecklistSection } from "./components/ChecklistSection";
import { FinalCTA } from "./components/FinalCTA";
import { HeroSection } from "./components/HeroSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { SecurityTipsSection } from "./components/SecurityTipsSection";

export function GuideBuyingRenting() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <IntroductionSection />
            <ChecklistSection />
            <SecurityTipsSection />
            <ProcessTimeline />
            <FinalCTA />
        </div>
    )
}
