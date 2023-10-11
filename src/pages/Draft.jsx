import styled from "@emotion/styled";
import { InputSearch } from "../ui/Inputs/InputSearch";
import { InputForm } from "../ui/Inputs/InputForm";
import { InputRegular } from "../ui/Inputs/InputRegular";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Card } from "../components/Card/Card";

const ContainerDraft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1248px;
  align-items: center;
  margin: auto;
  gap: 1rem;
`;

const ContainerComponent = styled.div`
  display: flex;
  max-width: 1386px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: auto;
  // border: 1px solid black;
`;

const data1 = {
  // urlImage: "https://picsum.photos/id/1026/640",
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
  photo: "https://picsum.photos/id/1026/640",
  // role: "tenant",
  role: "tenant",
  active: false,
};
const data2 = {
  // urlImage: "https://picsum.photos/id/1026/640",
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
  photo: "https://picsum.photos/id/1026/640",
  // role: "tenant",
  role: "seller",
  active: true,
};
const data3 = {
  // urlImage: "https://picsum.photos/id/1026/640",
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
  photo: "https://picsum.photos/id/1026/640",
  // role: "tenant",
  role: "seller",
  active: false,
};

export default function Draft() {
  return (
    <ContainerDraft>
      {/* ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫ START COMPONENTS INPUT */}
      <ContainerComponent className="inputs__container">
        <h2>Input Search</h2>
        <p>Buscador con icono de flecha (List view)</p>
        <InputSearch color="#8E8E8E" maxWidth="22.5rem" haveArrow={true} />

        <p>Buscador sin Icono de Flecha (Property Form)</p>
        <InputSearch color="#8E8E8E" maxWidth="37.5rem" />
        <p>Input con icono de dolar (Property Form)</p>

        <InputRegular
          icon={<RiMoneyDollarCircleLine />}
          size="2rem"
          color="#8E8E8E"
        />

        <p>Input para formularios</p>
        <InputForm placeholder={"Address"} type="text" />
        <InputForm placeholder={"Password"} type="password" />
        <InputForm placeholder={"Email"} type="email" />
      </ContainerComponent>
      {/* ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫ END COMPONENTS INPUT */}
      {/* ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫ START COMPONENTS INPUT */}
      <ContainerComponent className="cards__container">
        <h2>Cards</h2>
        <div className="card__container">
          <Card data={data1} />
          <Card data={data1} />
          <Card data={data1} />
          <Card data={data2} />
          <Card data={data2} />
          <Card data={data2} />
          <Card data={data3} />
          <Card data={data3} />
          <Card data={data3} />
        </div>
      </ContainerComponent>
      {/* ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫ END COMPONENTS INPUT */}
    </ContainerDraft>
  );
}
