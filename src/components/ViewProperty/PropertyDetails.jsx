import styled from "@emotion/styled";
import PropTypes from "prop-types";
import HeaderProperty from "./Components-Details/HeaderProperty";
import EnviorementsProperty from "./Components-Details/EnviorementsProperty";
import AboutProperty from "./Components-Details/AboutProperty";
import LocationProperty from "./Components-Details/LocationProperty";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function PropertyDetails() {
  return (
    <ContainerPrimary>
      <HeaderProperty />
      <EnviorementsProperty />
      <AboutProperty />
      {/* <LocationProperty /> */}
    </ContainerPrimary>
  );
}

PropertyDetails.propTypes = {
  data: PropTypes.object,
};
