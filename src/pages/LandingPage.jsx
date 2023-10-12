import CarrouselSection from "../components/CarrouselSection";
import FooterHome from "../components/FooterHome";
import InfoSection from "../components/InfoSection";
import NavBar from "../components/Menu/NavBar";
import PanelHome from "../components/PanelHome/PanelHome";
import TeamSection from "../components/TeamSection";

function LandingPage() {
  return (
    <>
      <NavBar haveToken={false} role="tenant" />
      <PanelHome />
      <CarrouselSection />
      <InfoSection />
      <TeamSection />
      <FooterHome />
    </>
  );
}

export default LandingPage;