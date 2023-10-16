import styled from "@emotion/styled";
import PropTypes from "prop-types";
import CardList from "../CardList/CardList";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../pages/Home";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export default function CardPanel() {
  const { cardsUser, cards } = useContext(UserContext);
  const location = useLocation();
  const currentPath = location.pathname.split("/").slice(-1)[0];

  return (
    <Container>
      <TextRegular>{cardsUser.length} Properties found</TextRegular>
      <CardList cards={cardsUser} />
    </Container>
  );
}

CardPanel.propTypes = {
  cards: PropTypes.array,
};
