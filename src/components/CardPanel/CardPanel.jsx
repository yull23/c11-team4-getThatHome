import styled from "@emotion/styled";
import CardList from "../CardList/CardList";
import SearchProperty from "../SearchProperty/SearchProperty";
import { properties, rentals } from "../../data/properties";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 7.5rem;
`;

const TextRegular = styled.p`
   {
    color: var(--Gray, #616161);
    /* Headline6 */
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.15px;
  }
`;
const ContainerCards = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContainerActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function CardPanel() {
  const cards = [
    ...properties,
    ...rentals,
    ...properties,
    ...rentals,
    ...properties,
    ...rentals,
  ];

  return (
    <ContainerPrimary>
      <ContainerCards>
        <ContainerActions>
          <SearchProperty />
        </ContainerActions>
        <TextRegular>4 Properties found</TextRegular>
        <CardList cards={cards} />
      </ContainerCards>
    </ContainerPrimary>
  );
}
