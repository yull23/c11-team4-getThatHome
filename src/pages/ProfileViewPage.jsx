import CardPanel from "../components/CardPanel/CardPanel";
import NavBar from "../components/Menu/NavBar";

function ProfileViewPage() {
  return (
    <>
      <NavBar haveToken={true} role="tenant" />
      <CardPanel />
    </>
  );
}

export default ProfileViewPage;
