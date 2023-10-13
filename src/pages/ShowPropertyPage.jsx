import NavBar from "../components/Menu/NavBar";
import Footer from "../ui/Footer";
import ViewProperty from "../components/ViewProperty/ViewProperty";
import React from "react";

export const ShowPropertyContext = React.createContext(null);

function ShowPropertyPage() {
  const data = {
    address: "86872 Jacob Gateway, Durganport, WV 48044",
    price: 3000,
    rent: 2000,
    maintanance: 100,
    typeSale: "rental",
    typeProperty: "Apartament",
    bedrooms: 2,
    bathromms: 2,
    area: 100.0,
    petsAllowd: true,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel atque quo? Nobis quibusdam libero culpa nisi sed non, eius ad soluta at amet doloremque atque est in fuga qui.",
    photos: [
      "https://picsum.photos/id/1026/640",
      "https://fastly.picsum.photos/id/100/640",
      "https://picsum.photos/id/1019/640",
    ],
    // role: "tenant",
    role: "tenant",
    active: false,
    coordinates: ["-12.025107", "-76.895063"],
  };

  return (
    <>
      <NavBar haveToken={false} role="tenant" />
      <ShowPropertyContext.Provider value={{ data }}>
        <ViewProperty />
      </ShowPropertyContext.Provider>
      <Footer />
    </>
  );
}

export default ShowPropertyPage;
