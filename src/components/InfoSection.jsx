import styled from "@emotion/styled";
import Button from "../ui/Button";

const Container = styled.div`
  background-color: #f48fb115;
  padding: 64px 32px;
  div {
    max-width: 824px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  h2 {
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.25px;
    color: #373737;
    text-align: center;
  }
`;
const ButtonStyled = styled(Button)`
  margin: 0 auto;
`;
function InfoSection() {
  return (
    <Container>
      <div>
        <h2>Geeting someone to rent your apartment has never been this easy</h2>
        <ButtonStyled type="primary" size="large">
          CREATE AN ACCOUNT NOW
        </ButtonStyled>
      </div>
    </Container>
  );
}

export default InfoSection;
