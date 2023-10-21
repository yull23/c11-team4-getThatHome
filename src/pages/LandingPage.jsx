import CarrouselSection from "../components/LandingComponents/CarrouselSection";
import InfoSection from "../components/LandingComponents/InfoSection";
import TeamSection from "../components/LandingComponents/TeamSection";
import PanelHome from "../components/PanelHome/PanelHome";

function LandingPage() {
  return (
    <>
      <PanelHome />
      <CarrouselSection />
      <InfoSection />
      <TeamSection />
    </>
  );
}

export default LandingPage;
