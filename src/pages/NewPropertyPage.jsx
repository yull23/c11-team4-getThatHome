import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { NavNewProperty } from "../components/NewPropertyComponents/NavNewProperty";

export default function NewPropertyPage() {
  const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* Children */
    h3 {
      color: #000;
      /* Headline4 */
      font-family: Montserrat;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.25px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;

  return (
    <Container>
      <h3>Create a property listing</h3>
      <NavNewProperty />
      <Outlet />
    </Container>
  );
}

// export default function ProfilePropertiesPage() {
//   const { user } = useContext(UserContext);
//   const role = localStorage.getItem("role");

//   const ButtonProperty = () => {
//     return role == 1 ? (
//       <Link to="/">
//         <Button type="primary" size="default">
//           <PiPlusCircle style={{ fontSize: "1.5rem" }} />
//           NEW PROPERTY
//         </Button>
//       </Link>
//     ) : (
//       ""
//     );
//   };

//   const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     width: 100%;
//     padding: 2rem 9.5rem;
//   `;

//   return (
//     <ContainerContent>
//       <Container>
//         <ButtonProperty />
//         <NavBarProperty role={role} />
//         <Outlet />
//       </Container>
//     </ContainerContent>
//   );
// }
