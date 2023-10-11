// import { Card } from "../components/Card/Card";
// import CarrouselSection from "../components/CarrouselSection";
// import HeroSection from "../components/HeroSection";
// import InfoSection from "../components/InfoSection";
// import TeamSection from "../components/TeamSection";
// import Footer from "../ui/Footer";
// import Header from "../ui/Header";
import { InputForm } from "../ui/Inputs/InputForm";
import { InputRegular } from "../ui/Inputs/InputRegular";
import { InputSearch } from "../ui/Inputs/InputSearch";

import { RiMoneyDollarCircleLine } from "react-icons/ri";

function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeroSection /> */}
      {/* <CarrouselSection /> */}
      {/* <InfoSection /> */}
      {/* <TeamSection /> */}
      {/* <Footer /> */}
      <div>
        <InputSearch haveArrow={true} placeholder={"Address"} color="#8E8E8E" />
        <InputForm placeholder={"Address"} />
        <InputForm placeholder={"Password"} type="password" />
        <InputRegular
          icon={<RiMoneyDollarCircleLine />}
          size="2rem"
          color="#8E8E8E"
        />
      </div>
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
