import NavBar from "../components/Menu/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar haveToken={true} role="tenant" />
    </>
  );
}

export default LandingPage;
