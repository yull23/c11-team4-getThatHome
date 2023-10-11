import styled from "@emotion/styled";
import { InputSearch } from "../ui/Inputs/InputSearch";
import { InputForm } from "../ui/Inputs/InputForm";
import { InputRegular } from "../ui/Inputs/InputRegular";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Card } from "../components/Card/Card";
import Footer from "../ui/Footer";
import TeamSection from "../components/TeamSection";
import InfoSection from "../components/InfoSection";
import CarrouselSection from "../components/CarrouselSection";
import HeroSection from "../components/HeroSection";
import { Menu } from "../components/Menu/Menu";
import ContainerPage from "../components/Containers/ContainerPage";

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
    <>
      <Menu />
      <HeroSection />
      <CarrouselSection />
      <InfoSection />
      <TeamSection />
      <Footer />
    </>
  );
}
