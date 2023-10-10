import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
const Container = styled.div`
  background-color: #f5f5f6;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  padding: 16px 31px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
const Source = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  div {
    display: flex;
    gap: 16px;
  }
  @media (max-width: 1000px) {
    div {
      flex-direction: column;
      gap: 0px;
    }
  }
`;
function Footer() {
  return (
    <Container>
      <FooterContainer>
        <span>&copy; {new Date().getFullYear()} - Find That Home</span>

        <Source>
          <span>Source Code</span>
          <div>
            <p>
              <DiRuby /> Ruby on Rails REST API
            </p>
            <p>
              <DiReact /> React responsive SPA
            </p>
          </div>
        </Source>
        <div>Codeable - Cohort 11 Final Project</div>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
