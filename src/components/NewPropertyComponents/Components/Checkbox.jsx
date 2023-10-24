import styled from "@emotion/styled";
import { useState } from "react";
import imgCheck from "./checkbox.svg";

export default function CheckBoxProperty() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);

  const ContainerPrimary = styled.div`
    display: flex;
    flex-direction: column;
    p {
      color: var(--Gray, #616161);

      /* Caption */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
      letter-spacing: 0.4px;
    }
  `;

  const Container = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding: 0.5rem 0;
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
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid var(--Pink, #f48fb1);
      background: var(--White, #fff);

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

    input::before {
    }
  `;

  return (
    <ContainerPrimary>
      <Container>
        <input
          type="checkbox"
          id="singleOption"
          name="pets_allowed"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="singleOption">Pets Allowed</label>
      </Container>
      <p>
        Allowing pets increases the likehood of renters liking the property by
        9001%.
        <br />
        It also makes you a better person.
      </p>
    </ContainerPrimary>
  );
}
