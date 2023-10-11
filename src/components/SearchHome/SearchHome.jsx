import styled from "@emotion/styled";
import InputOptionHome from "../../ui/Inputs/InputOptionHome";

const Container = styled.form`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
`;
const SpaceLine = styled.div`
  margin: 0 0.5rem;
  border: 1px solid #e1e2e1;
  height: 100%;
`;

const ButtonSubmit = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  height: max-content;
  color: var(--White, #fff);
  text-align: center;
  border-radius: 16px;
  background: var(--Pink, #f48fb1);

  /* Button */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export default function SearchHome() {
  return (
    <Container>
      <InputOptionHome
        isSelect={true}
        label="i'm looking for"
        options={["an apartament", "an property"]}
      />
      <SpaceLine />
      <InputOptionHome
        isSelect={true}
        label="i want to"
        options={["rent", "sale"]}
      />
      <SpaceLine />
      <InputOptionHome label="where" isSelect={false} />
      <SpaceLine />
      <ButtonSubmit>Search</ButtonSubmit>
    </Container>
  );
}
