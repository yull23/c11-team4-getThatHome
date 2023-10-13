import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShowPropertyContext } from "../../pages/ShowPropertyPage";
import HeaderProperty from "./Components-Details/HeaderProperty";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default function PropertyDetails() {
  const { data } = useContext(ShowPropertyContext);

  return (
    <ContainerPrimary>
      <HeaderProperty />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quia
        voluptatibus eius perferendis expedita aperiam. Rem quo amet quos ipsum
        eum eos veniam, in quisquam esse, adipisci eaque alias animi!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quia
        voluptatibus eius perferendis expedita aperiam. Rem quo amet quos ipsum
        eum eos veniam, in quisquam esse, adipisci eaque alias animi!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quia
        voluptatibus eius perferendis expedita aperiam. Rem quo amet quos ipsum
        eum eos veniam, in quisquam esse, adipisci eaque alias animi!
      </div>
    </ContainerPrimary>
  );
}

PropertyDetails.propTypes = {
  data: PropTypes.object,
};
