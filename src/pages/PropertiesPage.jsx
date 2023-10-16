import styled from "@emotion/styled";
import SearchProperty from "../components/SearchProperty/SearchProperty";
import CardPanel from "../components/CardPanel/CardPanel";

export default function PropertiesPage() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem 9.5rem;
  `;
  return (
    <Container>
      <SearchProperty />
      <CardPanel fromUser={false} />
    </Container>
  );
}
