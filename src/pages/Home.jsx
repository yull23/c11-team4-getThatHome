import { Outlet, useMatch } from "react-router-dom";
import ContainerPage from "../components/Containers/ContainerPage";
import NavBar from "../components/Menu/NavBar";
import FooterHome from "../components/FooterHome";
import Footer from "../ui/Footer";
import { createContext } from "react";
import { users } from "../data/users";

export const UserContext = createContext(null);

export default function Home() {
  const user = users[0];
  const haveToken = user == null;
  const inHome = useMatch("/");
  console.log(inHome);

  return (
    <UserContext.Provider value={{ user, haveToken }}>
      <ContainerPage>
        <NavBar />
        <Outlet />
        {inHome ? <FooterHome /> : <Footer />}
      </ContainerPage>
    </UserContext.Provider>
  );
}
