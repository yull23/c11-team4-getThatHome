import styled from "@emotion/styled";
import {
  InputOptionHome,
  SelectOptionHome,
} from "../../ui/Inputs/InputOptionHome";

const Container = styled.form`
  display: flex;
  padding: 0.5rem 1rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background: var(--White, #fff);
  /* Elevation1 */
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
const SpaceLine = styled.div`
  margin: 0 0.5rem;
  border: 1px solid #e1e2e1;
  height: 100%;
`;

const ButtonSubmit = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  margin: auto;
  height: max-content;
  color: var(--White, #fff);
  text-align: center;
  border-radius: 1rem;
  background: var(--Pink, #f48fb1);

  /* Button */
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export default function SearchHome() {
  return (
    <Container>
      <SelectOptionHome
        label="i'm looking for"
        option={["An Apartament", "An Property"]}
      />
      <SpaceLine />
      <SelectOptionHome label="i want to" option={["Rent", "Sale"]} />
      <SpaceLine />
      <InputOptionHome
        label="where"
        option={["option"]}
        placeholder="Favorite district"
      />
      <SpaceLine />
      <ButtonSubmit>Search</ButtonSubmit>
    </Container>
  );
}
