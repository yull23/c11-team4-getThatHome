import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./Home";
import { useContext } from "react";
import Button from "../ui/Button";
import { PiPlusCircle } from "react-icons/pi";

export default function ProfilePropertiesPage() {
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
    <div>
      <ButtonProperty />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit
      eos quisquam commodi, similique architecto aut, asperiores blanditiis
      repudiandae libero dolores quod assumenda at sit, eveniet perspiciatis
      iure error corrupti!
      <Outlet />
    </div>
  );
}
