import styled from "@emotion/styled";
import logoHome from "./logo.svg";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import Button from "../../ui/Button";
import { PiMagnifyingGlass } from "react-icons/pi";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import "./navbar.css";
import { RiUserAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { TbHome2 } from "react-icons/tb";

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

export default function NavBar({ haveToken, role }) {
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
            <Button type="secondary" size="small">
              <RiUserAddLine />
              JOIN
            </Button>
            <Button type="primary" size="small">
              <RiUserAddLine />
              LOGIN
            </Button>
          </>
        ) : (
          <>
            <Button type="secondary" size="small">
              <BiLogOutCircle />
              LOGOUT
            </Button>
            {role == "tenant" ? (
              <Button type="primary" size="small">
                <AiFillHeart />
                SAVED PROPERTIES
              </Button>
            ) : (
              <Button type="primary" size="small">
                <TbHome2 />
                MY PROPERTIES
              </Button>
            )}
            <Button type="primary" size="small">
              <BiUser />
              PROFILE
            </Button>
          </>
        )}
      </ContainerActions>
    </ContainerPrimary>
  );
}

NavBar.propTypes = {
  haveToken: PropTypes.bool,
  role: PropTypes.string,
};
