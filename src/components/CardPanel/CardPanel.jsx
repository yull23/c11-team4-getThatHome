import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import PaginatorCards from "./CardList/PaginatorCards";
import CardList from "./CardList/CardList";

const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextRegular = styled.p`
  color: var(--Gray, #616161);
  font-family: Montserrat;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.15px;
`;

export const CardsContext = createContext(null);

export default function CardPanel({ fromUser, cards }) {
  const [pageCurrent, setPageCurrent] = useState("1");
  const n = 8;

  const pages = {};
  const numPages = Math.ceil(cards.length / n);

  for (let i = 0; i < numPages; i++) {
    pages[i + 1] = cards.slice(n * i, n * i + n);
  }

  return (
    <CardsContext.Provider
      value={{
        fromUser,
        pages,
        pageCurrent,
        setPageCurrent,
      }}
    >
      <Container>
        <TextRegular>{cards.length} Properties found</TextRegular>
        <CardList />
        <PaginatorCards />
      </Container>
    </CardsContext.Provider>
  );
}

CardPanel.propTypes = {
  fromUser: PropTypes.bool,
  cards: PropTypes.array,
};
