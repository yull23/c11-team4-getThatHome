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
import { Link } from "react-router-dom";
import { ContainerContent } from "../Containers/ContainersDiv";

const ContainerPrimary = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
`;
const ContainerSecundary = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0;
`;

export default function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <ContainerPrimary>
      <ContainerContent>
        <ContainerSecundary>
          <Link to="/">
            <img src={logoHome} alt="logo-home" className="navbar" />
          </Link>
          <ContainerActions>
            <Link to="/properties">
              <button className="button-find__container">
                <div className="button-find__container-button">
                  <IconContext.Provider
                    value={{ size: "1.5rem", color: "#616161" }}
                  >
                    <PiMagnifyingGlass />
                  </IconContext.Provider>
                </div>
                <span className="button-find__text">find a home</span>
              </button>
            </Link>

            {user == null ? (
              <>
                <Link to="/signup-home">
                  <Button type="secondary" size="default">
                    <RiUserAddLine />
                    JOIN
                  </Button>
                </Link>
                <Link to="/login">
                  <Button type="primary" size="default">
                    <RiUserAddLine />
                    LOGIN
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button type="secondary" size="default">
                  <BiLogOutCircle />
                  LOGOUT
                </Button>
                {user.role_id == 1 ? (
                  <Link to="/profile/active">
                    <Button type="primary" size="default">
                      <TbHome2 />
                      MY PROPERTIES
                    </Button>
                  </Link>
                ) : (
                  <Link to="/profile/favorites">
                    <Button type="primary" size="default">
                      <AiFillHeart />
                      SAVED PROPERTIES
                    </Button>
                  </Link>
                )}
                <Button type="primary" size="default">
                  <BiUser />
                  PROFILE
                </Button>
              </>
            )}
          </ContainerActions>
        </ContainerSecundary>
      </ContainerContent>
    </ContainerPrimary>
  );
}
