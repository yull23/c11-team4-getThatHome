// import { Card } from "../components/Card/Card";
// import CarrouselSection from "../components/CarrouselSection";
// import HeroSection from "../components/HeroSection";
// import InfoSection from "../components/InfoSection";
// import TeamSection from "../components/TeamSection";
// import Footer from "../ui/Footer";
// import Header from "../ui/Header";
import { InputForm } from "../ui/Inputs/InputForm";
import { InputSearch } from "../ui/Inputs/InputSearch";
function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeroSection /> */}
      {/* <CarrouselSection /> */}
      {/* <InfoSection /> */}
      {/* <TeamSection /> */}
      {/* <Footer /> */}
      <InputSearch haveArrow={true} placeholder={"Address"} />
      <InputForm placeholder={"Address"} />
      <InputForm placeholder={"Password"} type="password" />
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
