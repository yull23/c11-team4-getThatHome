import styled from "@emotion/styled";
import { Card } from "./Card/Card";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 64px 32px;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 48px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Header = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  h2 {
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #373737;
  }
  h3 {
    font-family: "Montserrat";
    font-size: 36px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.25px;
    color: #bf5f82;
  }
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
function CarrouselSection() {
  return (
    <Container>
      <Header>
        <h2>Find an Apartment you Love</h2>
        <h3>Homes for rent at the best prices</h3>
      </Header>

      <CardContainer>
        <Card data={data1} />
        <Card data={data1} />
        <Card data={data1} />
      </CardContainer>
    </Container>
  );
}

export default CarrouselSection;
