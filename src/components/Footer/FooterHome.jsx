import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
import { ContainerContent } from "../Containers/ContainersDiv";

const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  padding: 0 7.5rem;
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
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

    /* Regular/Subtitle2 */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: 0.1px;
  }

  .container__text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;
function FooterHome() {
  return (
    <Container>
      <ContainerContent>
        <FooterContainer>
          <span>&copy; {new Date().getFullYear()} - Find That Home</span>

          <Source>
            <span>Source Code</span>
            <div>
              <div className="container__text">
                <DiRuby /> <p>Ruby on Rails REST API</p>
              </div>
              <div className="container__text">
                <DiReact /> <p>React responsive SPA</p>
              </div>
            </div>
          </Source>
          <span>Codeable - Cohort 11 Final Project</span>
        </FooterContainer>
      </ContainerContent>
    </Container>
  );
}

export default FooterHome;
