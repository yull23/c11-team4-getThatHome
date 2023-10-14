import styled from "@emotion/styled";
import {
  CardEdit,
  CardLogin,
  CardNoLogin,
  CardView,
} from "./Components-Details/CardContact";

const ContainerPrimary = styled.div`
  max-width: 290px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function PropertyContact() {
  return (
    <ContainerPrimary>
      <CardNoLogin />
      <CardLogin />
      <CardView />
      <CardEdit />
    </ContainerPrimary>
  );
}
