import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { useState } from "react";
import PaginatorCards from "./PaginatorCards";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContainerCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 4.25rem;
  row-gap: 2rem;
  justify-content: center;
`;

export default function CardList({ cards }) {
  const [pageCurrent, setPageCurrent] = useState("12");

  const pages = {};
  const numPages = Math.ceil(cards.length / 6);

  for (let i = 0; i < numPages; i++) {
    pages[i + 1] = cards.slice(6 * i, 6 * i + 6);
  }

  return (
    <ContainerPrimary>
      <ContainerCardList>
        {pages[pageCurrent].map((card, id) => (
          <Card key={id} data={card} />
        ))}
      </ContainerCardList>
      <PaginatorCards
        pages={pages}
        pageCurrent={pageCurrent}
        setPageCurrent={setPageCurrent}
      />
    </ContainerPrimary>
  );
}

CardList.propTypes = {
  cards: PropTypes.array,
};
