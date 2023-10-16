import { useContext } from "react";
import CardPanel from "../components/CardPanel/CardPanel";
import { UserContext } from "./Home";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Button from "../ui/Button";

function ProfileViewPage() {
  const { user } = useContext(UserContext);
  const role = user ? user.role : null;

  const ButtonProperty = () => {
    return role == "tenant" ? (
      <Link>
        <Button type="primary" size="default">
          <PiPlusCircle style={{ fontSize: "1.5rem" }} />
          NEW PROPERTY
        </Button>
      </Link>
    ) : (
      ""
    );
  };

  return (
    <>
      <ButtonProperty />
      <CardPanel />
    </>
  );
}

export default ProfileViewPage;
