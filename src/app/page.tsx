import CustomLayout from "./customlayout/CustomLayout";
import IntroSection from "./Components/LandingPage/Sections/IntroSection";
import PortFolioSection from "./Components/LandingPage/Sections/PortFolioSection";
import TeamSection from "./Components/LandingPage/Sections/TeamSection";
import PricingSection from "./Components/LandingPage/Sections/PricingSection";
import FaqSection from "./Components/LandingPage/Sections/FaqSection";
import FeedBackSection from "./Components/LandingPage/Sections/FeedBackSection";
import ContactUsSection from "./Components/LandingPage/Sections/ContactUsSection";

export default function Home() {
  return (
    <CustomLayout>
      <main>
        <IntroSection />

        <PortFolioSection />

        <TeamSection />

        <FeedBackSection />

        <PricingSection />

        <FaqSection />
        <ContactUsSection />
      </main>
    </CustomLayout>
  );
}
