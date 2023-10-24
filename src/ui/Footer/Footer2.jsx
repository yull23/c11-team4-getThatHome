import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
import abc from "../../../src/components/Menu/logo.svg";
import { AiFillGithub } from "react-icons/ai";
const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  padding: 0 7.5rem;
  color: #616161;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat";
  padding: 1rem 2rem;
  margin: 0 auto;
  span {
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
  span,
  p {
    display: flex;
    gap: 4px;
    align-items: center;
    text-align: center;

    /* Regular/Subtitle2 */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 128.571% */
    letter-spacing: 0.25px;
  }
  p span {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
const CodeContainer = styled.div`
  p span {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
function FooterHome() {
  return (
    <Container>
      <FooterContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <img src={abc} />
          <span>&copy; {new Date().getFullYear()} - Find That Home</span>
          <span>Codeable - Cohort 11 Final Project</span>
        </div>
        <Source>
          <span>Build with love by:</span>
          <div>
            <p>
              <AiFillGithub /> Paty <span>Apaestegui</span>
            </p>
            <p>
              <AiFillGithub /> Katya <span>Anco</span>
            </p>
            <p>
              <AiFillGithub /> David <span>Garcia</span>
            </p>
            <p>
              <AiFillGithub /> Yull <span>Timoteo</span>
            </p>
            <p>
              <AiFillGithub /> Kevin <span>Cajahuanca</span>
            </p>
            <p>
              <AiFillGithub /> Betsabe <span>Escate</span>
            </p>
          </div>
        </Source>
        <CodeContainer>
          <span>Source code:</span>
          <p>
            <DiRuby /> <span>Ruby on Rails REST API</span>
          </p>
          <p>
            <DiReact /> <span>React responsive SPA</span>
          </p>
        </CodeContainer>
      </FooterContainer>
    </Container>
  );
}

export default FooterHome;
