import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  padding: 0 7.5rem;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  padding: 1rem 2rem;
  margin: 0 auto;
  span {
    color: var(--DarkGray, #373737);
    text-align: center;

    /* Regular/Subtitle2 */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.1px;
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
  span,
  p {
    color: var(--DarkGray, #373737);
    text-align: center;

    /* Regular/Subtitle2 */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.1px;
  }
`;
function FooterHome() {
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
        <span>Codeable - Cohort 11 Final Project</span>
      </FooterContainer>
    </Container>
  );
}

export default FooterHome;
