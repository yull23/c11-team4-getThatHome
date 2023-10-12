import CardPanel from "../components/CardPanel/CardPanel";
import NavBar from "../components/Menu/NavBar";
import Footer from "../ui/Footer";

function ProfileViewPage() {
  return (
    <>
      <NavBar haveToken={true} role="tenant" />
      <CardPanel />
      <Footer />
    </>
  );
}

export default ProfileViewPage;
