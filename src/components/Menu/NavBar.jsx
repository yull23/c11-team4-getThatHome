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
import { Form, Link, useNavigate } from "react-router-dom";
import { ContainerContent } from "../Containers/ContainersDiv";
import { useAuth } from "../../context/useAuth";
import { ErrorBoundary } from "react-error-boundary";

const ContainerPrimary = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  .button-logout {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    border: 1px solid var(--Pink, #f48fb1);

    color: var(--Gray, #616161);
    text-align: center;

    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.71;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
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

function ErrorFallback({ error }) {
  return (
    <div className="px-4 py-2 m-4">
      <h1 className="mt-2 font-bold text-lg mb-1">Página en construccion:</h1>
      <p> {error.message} </p>
      <button
        className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
        onClick={() => (window.location.href = "/")}
      >
        Recargar la página{" "}
      </button>
    </div>
  );
}

export default function NavBar() {
  const { user, logout } = useAuth();
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <ContainerPrimary>
       <ErrorBoundary FallbackComponent={ErrorFallback}>
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
                <Form onSubmit={handleLogout}>
                  <button className="button-logout" type="submit">
                    <BiLogOutCircle />
                    LOGOUT
                  </button>
                </Form>
                {role == 1 ? (
                  <Link to="/profile/active" state={{ role: 1 }}>
                    <Button
                      type="primary"
                      size="default"
                      typeApplication="submit"
                    >
                      <TbHome2 />
                      MY PROPERTIES
                    </Button>
                  </Link>
                ) : (
               
                  <Link to="/profile/favorites" state={{ role: 2 }}>
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
      </ErrorBoundary>
    </ContainerPrimary>
  );
}
