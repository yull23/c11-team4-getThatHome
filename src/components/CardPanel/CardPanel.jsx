import styled from "@emotion/styled";
import CardList from "../CardList/CardList";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 7.5rem;
`;

const TextActions = styled.p`
  /* Regular/Button */
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 1.25px;
  text-transform: uppercase;
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

const data1 = {
  // urlImage: "https://picsum.photos/id/1026/640",
  address: "86872 Jacob Gateway, Durganport, WV 48044",
  price: 3000,
  rent: 2000,
  maintanance: 100,
  typeSale: "rental",
  typeProperty: "Apartament",
  bedrooms: 2,
  bathromms: 2,
  area: 100.0,
  petsAllowd: true,
  about:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel atque quo? Nobis quibusdam libero culpa nisi sed non, eius ad soluta at amet doloremque atque est in fuga qui.",
  photo: "https://picsum.photos/id/1026/640",
  // role: "tenant",
  role: "tenant",
  active: false,
};

const data = [data1, data1, data1, data1, data1, data1, data1];
const data2 = [
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
  ...data,
];

export default function CardPanel() {
  return (
    <ContainerPrimary>
      <ContainerCards>
        <ContainerActions>
          <TextActions>favorite</TextActions>
          <TextActions>closed</TextActions>
        </ContainerActions>
        <TextRegular>4 Properties found</TextRegular>
        <CardList cards={data2} />
      </ContainerCards>
    </ContainerPrimary>
  );
}
