import { Outlet } from "react-router-dom";
import { NavNewProperty } from "../components/NewPropertyComponents/NavNewProperty";

function NewPropertyPage() {
  return (
    <div>
      <NavNewProperty />
      <Outlet />
    </div>
  );
}

export default NewPropertyPage;

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
