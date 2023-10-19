import styled from "@emotion/styled";
import PropTypes from "prop-types";
import CarouselPhoto from "./PhotoCarousel";
import PropertyDetails from "./PropertyDetails";
import PropertyContact from "./PropertyContact";
import "./a-styles.css";
import { ContainerContent } from "../Containers/ContainersDiv";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 7.5rem;
`;

const ContainerSecundary = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  gap: 1rem;
`;
const ContainerProperty = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
`;

export default function ViewProperty() {
  return (
    <ContainerContent>
      <ContainerPrimary>
        <ContainerSecundary>
          <ContainerProperty>
            <CarouselPhoto />
            <PropertyDetails />
          </ContainerProperty>
          <PropertyContact />
        </ContainerSecundary>
      </ContainerPrimary>
    </ContainerContent>
  );
}

ViewProperty.propTypes = {
  data: PropTypes.object,
};
