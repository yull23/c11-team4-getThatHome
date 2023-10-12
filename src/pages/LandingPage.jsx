// Esto para abrir los que encabezados del componente menu en el localhost.
// import { Menu } from "../components/Menu/Menu";

// function LandingPage() {
//   return <><Menu></Menu></>;
// }
// .............................................................................
// import { Card } from "../components/Card/Card";
import CarrouselSection from "../components/CarrouselSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Select from "../components/Select/SelectActive";
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
      <Select />
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

