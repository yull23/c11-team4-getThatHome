import styled from "@emotion/styled";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";
import { useContext } from "react";
import Location from "./Location";

export default function LocationProperty() {
  const { property } = useContext(ShowPropertyContext);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .title {
      color: var(--DarkPink, #bf5f82);

      /* Headline6 */
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 140% */
      letter-spacing: 0.15px;
    }
    .address {
      color: var(--DarkGray, #373737);

      /* Body1 */
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 0.5px;
    }
  `;
  return (
    <Container>
      <p className="title">Location</p>
      <p className="address">{property.address}</p>
      <Location />
    </Container>
  );
}
