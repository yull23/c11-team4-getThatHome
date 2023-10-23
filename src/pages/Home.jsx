import { Outlet, useLoaderData, useMatch } from "react-router-dom";
import ContainerPage from "../components/Containers/ContainerPage";
import NavBar from "../components/Menu/NavBar";
import FooterHome from "../components/Footer/FooterHome";
import FooterContent from "../components/Footer/FooterContent";
import { createContext } from "react";
import { useAuth } from "../context/useAuth";

export const UserContext = createContext(null);

export default function Home() {
  const { bestProperties } = useLoaderData();
  const { user } = useAuth();
  const inHome = useMatch("/");

  return (
    <UserContext.Provider value={{ user, bestProperties }}>
      <ContainerPage>
        <NavBar />
        <Outlet />
        {inHome ? <FooterHome /> : <FooterContent />}
      </ContainerPage>
    </UserContext.Provider>
  );
}
