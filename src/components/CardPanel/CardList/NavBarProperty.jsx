import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";

const Container = styled.nav`
  display: flex;
  gap: 1rem;

  p {
    padding: 0 0 0.375rem 0;
    border-bottom: 2px solid #f48fb1;
    color: var(--DarkGray, #373737);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 1.25px;
    text-transform: uppercase;
    text-align: center;
  }
  .desactive {
    color: var(--DarkGray, #8e8e8e);
    border-bottom: 2px solid #bdbdbd;
  }
`;

export default function NavBarProperty() {
  const role = localStorage.getItem("role");
  const { user } = useAuth();

  const allActions = {
    1: ["active", "closed"],
    2: ["favorites", "contacted"],
  };
  const actions = allActions[role];

  return (
    <Container>
      {actions.map((action, index) => (
        <NavLink to={`/profile/${action}`} key={index} state={{ role: role }}>
          {({ isActive }) => {
            return <p className={isActive ? "" : "desactive"}>{action}</p>;
          }}
        </NavLink>
      ))}
    </Container>
  );
}
