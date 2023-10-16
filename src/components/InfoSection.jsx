import styled from "@emotion/styled";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    max-width: 832px;
    color: var(--DarkGray, #373737);
    text-align: center;
    /* Headline4 */
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 133.333% */
    letter-spacing: 0.25px;
  }
`;
const ButtonStyled = styled(Button)`
  margin: 0 auto;
`;
function InfoSection() {
  return (
    <Container>
      <h2>Geeting someone to rent your apartment has never been this easy</h2>
      <Link to="/signup">
        <ButtonStyled type="primary" size="large">
          CREATE AN ACCOUNT NOW
        </ButtonStyled>
      </Link>
    </Container>
  );
}

export default InfoSection;
