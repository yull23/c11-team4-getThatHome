import { Outlet, useMatch } from "react-router-dom";
import ContainerPage from "../components/Containers/ContainerPage";
import NavBar from "../components/Menu/NavBar";
import FooterHome from "../components/Footer/FooterHome";
import FooterContent from "../components/Footer/FooterContent";
import { createContext } from "react";
import { users } from "../data/users";
import { properties, rentals } from "../data/properties";

export const UserContext = createContext(null);

export default function Home() {
  // sessionStorage.setItem(tokenKey, token);
  const user = users[2];
  const haveToken = user != null;
  const inHome = useMatch("/");
  const bestProperties = properties.slice(0, 3);
  const cardsUser = [...properties, ...rentals];
  const cards = [...cardsUser, ...cardsUser, ...cardsUser];

  return (
    <UserContext.Provider
      value={{ user, haveToken, bestProperties, cards, cardsUser }}
    >
      <ContainerPage>
        <NavBar />
        <Outlet />
        {inHome ? <FooterHome /> : <FooterContent />}
      </ContainerPage>
    </UserContext.Provider>
  );
}
