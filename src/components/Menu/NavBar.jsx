import styled from "@emotion/styled";
import logoHome from "./logo.svg";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import Button from "../../ui/Button";
import { PiMagnifyingGlass } from "react-icons/pi";
import { IconContext } from "react-icons";
import "./navbar.css";
import { RiUserAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { TbHome2 } from "react-icons/tb";
import { useContext } from "react";
import { UserContext } from "../../pages/Home";

const ContainerPrimary = styled.div`
  position: relative;
  width: 100%;
  padding: 0 7.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
`;
const ContainerSecundary = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContainerActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0;
`;

export default function NavBar() {
  const { haveToken, user } = useContext(UserContext);
  const role = user ? user.role : null;

  return (
    <ContainerPrimary>
      <ContainerSecundary>
        <img src={logoHome} alt="logo-home" className="navbar"></img>
      </ContainerSecundary>
      <ContainerActions>
        <button className="button-find__container">
          <div className="button-find__container-button">
            <IconContext.Provider value={{ size: "1.5rem", color: "#616161" }}>
              <PiMagnifyingGlass />
            </IconContext.Provider>
          </div>
          <span className="button-find__text">find a home</span>
        </button>

        {!haveToken ? (
          <>
            <Button type="secondary" size="default">
              <RiUserAddLine />
              JOIN
            </Button>
            <Button type="primary" size="default">
              <RiUserAddLine />
              LOGIN
            </Button>
          </>
        ) : (
          <>
            <Button type="secondary" size="default">
              <BiLogOutCircle />
              LOGOUT
            </Button>
            {role == "tenant" ? (
              <Button type="primary" size="default">
                <AiFillHeart />
                SAVED PROPERTIES
              </Button>
            ) : (
              <Button type="primary" size="default">
                <TbHome2 />
                MY PROPERTIES
              </Button>
            )}
            <Button type="primary" size="default">
              <BiUser />
              PROFILE
            </Button>
          </>
        )}
      </ContainerActions>
    </ContainerPrimary>
  );
}
