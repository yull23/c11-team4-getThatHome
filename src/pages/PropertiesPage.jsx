import styled from "@emotion/styled";
import SearchProperty from "../components/SearchProperty/SearchProperty";
import { ContainerContent } from "../components/Containers/ContainersDiv";
import CardPanel from "../components/CardPanel/CardPanel";
import { useLoaderData } from "react-router-dom";

export default function PropertiesPage() {
  const cards = useLoaderData();
  console.log(cards);

  const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    min-height: 100%;
    padding: 2rem 9.5rem;
  `;

  return (
    <ContainerContent moreStyles={"min-height: 100%;"}>
      <Container>
        <SearchProperty />
        <CardPanel fromUser={true} cards={cards} />
      </Container>
    </ContainerContent>
  );
}
