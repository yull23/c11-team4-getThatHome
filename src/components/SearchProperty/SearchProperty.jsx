import styled from "@emotion/styled";
import { InputOptionMore, InputOptionPrice, InputOptionProperty, SelectOptionBeds, SelectPropertyType } from "../../ui/Inputs/InputSearchProperty";
import SelectOperationType from "../Select/Select";


const Container = styled.div`
  width: 71rem;
  display: flex;
  height: 42px;
  /* Elevation1 */
  gap: 0.5rem;
  position: absolute;
  z-index: 2;
  
`;

const SpaceLine = styled.div`
  margin: 0 auto;
  height: 100%;
`;

export default function SearchProperty() {
    return (
      <Container>
        <InputOptionProperty/>
        <SpaceLine/>
          <InputOptionPrice
          label={["price range"]}
          placeholderMax = "max"
          placeholderMin = "min"
          range={[1, 2, 3, 4, 5, 6, 11, 23, 34, 32, 56, 76, 66, 44]}
          />
          <SelectPropertyType
          label="Property Type"
          option={["Houses", "Apartments"]}
          />
          <SelectOptionBeds
          option={["Any","1+", "2+", "3+", "4+"]}
          option2={["Any", "2+", "3+", "4+"]}
          label1={["beds"]}
          label2={["baths"]}
          />
          <InputOptionMore
          label={["area in m2"]}
          placeholderMax = "max"
          placeholderMin = "min"
          option={["Pets Allowed"]}   
          range={[1, 2, 3, 4, 5, 6, 11, 23, 34, 32, 56, 76, 66, 44]}   
          />
        <SpaceLine/>
          <SelectOperationType 
          option={["Both", "Buying", "Renting"]}
          />
      </Container>
    );
  }
  