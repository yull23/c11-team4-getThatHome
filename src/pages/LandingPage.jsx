import NavBar from "../components/Menu/NavBar";
import PanelHome from "../components/PanelHome/PanelHome";

function LandingPage() {
  return (
    <>
      <NavBar haveToken={true} role="tenant" />
      <PanelHome />
    </>
  );
}

export default LandingPage;
