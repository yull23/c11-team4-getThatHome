import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { ContainerContent } from "../Containers/ContainersDiv";
import { useLoaderData } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 64px 132px;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 48px;
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

function CarrouselSection() {
  const bestProperties = useLoaderData();
  console.log(bestProperties[0]);
  return (
    <ContainerContent>
      <Container>
        <Header>
          <h2>Find an Apartment you Love</h2>
          <h3>Homes for rent at the best prices</h3>
        </Header>

        <CardContainer>
          <Card data={bestProperties[0]} role="customer" />
          <Card data={bestProperties[1]} role="customer" />
          <Card data={bestProperties[2]} role="customer" />
        </CardContainer>
      </Container>
    </ContainerContent>
  );
}

export default CarrouselSection;
