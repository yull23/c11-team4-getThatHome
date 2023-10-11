import CarrouselSection from "../components/CarrouselSection";
import InfoSection from "../components/InfoSection";
import NavBar from "../components/Menu/NavBar";
import PanelHome from "../components/PanelHome/PanelHome";

function LandingPage() {
  return (
    <>
      <NavBar haveToken={true} role="tenant" />
      <PanelHome />
      <CarrouselSection />
      <InfoSection />
    </>
  );
}

export default LandingPage;
