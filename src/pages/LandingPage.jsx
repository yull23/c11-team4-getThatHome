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
      <Button size="small" type="primary">
        BUTTON
      </Button>
      <Button size="default" type="primary">
        BUTTON
      </Button>
      <Button size="large" type="primary">
        BUTTON
      </Button>
      <Button size="small" type="secondary">
        BUTTON
      </Button>
      <Button size="default" type="secondary">
        BUTTON
      </Button>
      <Button size="large" type="secondary">
        BUTTON
      </Button>
      <Button size="small" type="disable">
        BUTTON
      </Button>
      <Button size="default" type="disable">
        BUTTON
      </Button>
      <Button size="large" type="disable">
        BUTTON
      </Button>
      <Button size="small" type="ghost">
        BUTTON
      </Button>
      <Button size="default" type="ghost">
        BUTTON
      </Button>
      <Button size="large" type="ghost">
        BUTTON
      </Button>
    </>
  );
}

export default LandingPage;
