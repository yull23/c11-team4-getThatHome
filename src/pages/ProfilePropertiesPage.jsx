import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./Home";
import { useContext } from "react";
import Button from "../ui/Button";
import { PiPlusCircle } from "react-icons/pi";
import NavBarProperty from "../components/CardList/NavBarProperty";

export default function ProfilePropertiesPage() {
  const { user } = useContext(UserContext);
  const role = user ? user.role : null;

  const ButtonProperty = () => {
    return role == "tenant" ? (
      <Link to="/">
        <Button type="primary" size="default">
          <PiPlusCircle style={{ fontSize: "1.5rem" }} />
          NEW PROPERTY
        </Button>
      </Link>
    ) : (
      ""
    );
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem 9.5rem;
  `;

  return (
    <Container>
      <ButtonProperty />
      <NavBarProperty />
      <Outlet />
    </Container>
  );
}
