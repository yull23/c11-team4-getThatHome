import { createContext } from "react";
import CarrouselSection from "../components/LandingComponents/CarrouselSection";
import InfoSection from "../components/LandingComponents/InfoSection";
import TeamSection from "../components/LandingComponents/TeamSection";
import PanelHome from "../components/PanelHome/PanelHome";

export const LandingContext = createContext();

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
