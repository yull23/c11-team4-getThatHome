import styled from "@emotion/styled";
import InputOptionHome from "../../ui/Inputs/InputOptionHome";

const Container = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
`;

export default function SearchHome() {
  return (
    <Container>
      <InputOptionHome
        label="i'm looking for"
        options={["an apartament", "an property"]}
      />
    </Container>
  );
}
