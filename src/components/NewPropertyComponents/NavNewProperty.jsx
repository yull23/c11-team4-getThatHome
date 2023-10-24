import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ContainerRow } from "../Containers/ContainersDiv";

export function NavNewProperty() {
  const Container = styled.div`
    // border: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: max-content;
    gap: 0.25rem;

    .container-link {
      background: var(--Pink, #f48fb1);
      display: flex;
      width: 50px;
      padding: 0.5rem;

      justify-content: center;
      align-items: center;
      color: var(--Gray, #fff);

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
    }
    .container-link-rent {
      border: 1px solid var(--LightGray, #8e8e8e);
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    .container-link-sale {
      border-top: 1px solid var(--LightGray, #8e8e8e);
      border-right: 1px solid var(--LightGray, #8e8e8e);
      border-bottom: 1px solid var(--LightGray, #8e8e8e);
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    .desactive {
      background: var(--White, #fff);
      color: var(--Gray, #616161);
    }
    .regular-text {
      color: var(--Gray, #616161);
      text-align: center;
      /* Overline */
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 160% */
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  `;

  return (
    <Container>
      <p className="regular-text">Operation Type</p>
      <ContainerRow>
        <NavLink
          to="/new-property/rent"
          key={1}
          className={({ isActive }) =>
            (isActive ? "" : "desactive") +
            " container-link container-link-rent"
          }
        >
          Rent
        </NavLink>
        <NavLink
          to="/new-property/sale"
          key={2}
          className={({ isActive }) =>
            (isActive ? "" : "desactive") +
            " container-link container-link-sale"
          }
        >
          Sale
        </NavLink>
      </ContainerRow>
    </Container>
  );
}

// export default function NavBarProperty() {
//   const role = localStorage.getItem("role");
//   const { user } = useAuth();

//   const allActions = {
//     1: ["active", "closed"],
//     2: ["favorites", "contacted"],
//   };
//   const actions = allActions[role];

//   return (
//     <Container>
//       {actions.map((action, index) => (
//         <NavLink to={`/profile/${action}`} key={index} state={{ role: role }}>
//           {({ isActive }) => {
//             return <p className={isActive ? "" : "desactive"}>{action}</p>;
//           }}
//         </NavLink>
//       ))}
//     </Container>
//   );
// }
