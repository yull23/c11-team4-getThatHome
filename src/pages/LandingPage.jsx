// import { Card } from "../components/Card/Card";
import CarrouselSection from "../components/CarrouselSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import TeamSection from "../components/TeamSection";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CarrouselSection />
      <InfoSection />
      <TeamSection />
      <Footer />
      {/* <div className="card__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </>
  );
}

export default LandingPage;

