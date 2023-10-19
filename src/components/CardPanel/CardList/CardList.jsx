import styled from "@emotion/styled";
import { Card } from "../../Card/Card";
import { useContext } from "react";
import { CardsContext } from "../CardPanel";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 2rem;
  gap: 2rem;
`;

const ContainerCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;
`;

export default function CardList() {
  const { pages, pageCurrent, fromUser } = useContext(CardsContext);
  return (
    <ContainerPrimary>
      <ContainerCardList>
        {pages[pageCurrent].map((card, id) => (
          <Card key={id} data={card} fromUser={fromUser} />
        ))}
      </ContainerCardList>
    </ContainerPrimary>
  );
}
