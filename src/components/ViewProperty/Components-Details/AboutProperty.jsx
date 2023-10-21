import styled from "@emotion/styled";
import { useContext } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: var(--DarkGray, #373737);

    /* Body1 */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
  }
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
`;

export default function AboutProperty() {
  const { property } = useContext(ShowPropertyContext);

  return (
    <Container>
      <p className="title">About this property</p>
      <p>{property.description}</p>
    </Container>
  );
}
