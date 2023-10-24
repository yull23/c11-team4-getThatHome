import styled from "@emotion/styled";
import imgCheck from "./checkbox.svg";
import { ContainerRow } from "../../Containers/ContainersDiv";

export default function RatioPropType() {
  const Container = styled.div`
    display: flex;
    padding: 0.5rem 0;
    gap: 1rem;

    label {
      color: var(--Gray, #616161);

      /* Regular/Body2 */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.25px;
    }

    input {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 1px solid var(--Pink, #f48fb1);
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
    }
    input:checked {
      background-color: var(--Pink, #f48fb1);
      background-image: url(${imgCheck});
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: center;
      background-size: cover;
    }
  `;
  return (
    <Container>
      <ContainerRow gap="0.25rem">
        <input
          type="radio"
          id="apartment"
          name="propertyType"
          value="apartment"
        />
        <label htmlFor="apartment">Apartment</label>
      </ContainerRow>
      <ContainerRow gap="0.25rem">
        <input type="radio" id="house" name="propertyType" value="house" />
        <label htmlFor="house">House</label>
      </ContainerRow>
    </Container>
  );
}
