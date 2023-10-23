import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
import abc from "../../../src/components/Menu/logo.svg";
import { AiFillGithub } from "react-icons/ai";
import {
  ContainerColumn,
  ContainerContent,
  ContainerGrid,
} from "../Containers/ContainersDiv";
import { IconContext } from "react-icons";

const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  color: #616161;
  .user-github,
  .technologies_used {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--Gray, #616161);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
  }
  span {
    color: var(--Gray, #616161);

    /* Caption */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat";
  padding: 1rem 2rem;
`;

function FooterContent() {
  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <Container>
        <ContainerContent>
          <FooterContainer>
            <ContainerColumn gap="0.5rem" justify="start">
              <div>
                <img src={abc} />
              </div>
              <ContainerColumn gap="0.25rem" pd="0 0.5rem">
                <p className="user-github">
                  &copy; {new Date().getFullYear()} - Find That Home
                </p>
                <p className="user-github">
                  Codeable - Cohort 11 Final Project
                </p>
              </ContainerColumn>
            </ContainerColumn>
            <ContainerColumn gap="0.5rem">
              <span>Build with ❤ by:</span>
              <ContainerGrid columns="1fr 1fr 1fr" gap="0.25rem">
                <p className="user-github">
                  <AiFillGithub /> Paty Apaestegui
                </p>
                <p className="user-github">
                  <AiFillGithub /> Katya Anco
                </p>
                <p className="user-github">
                  <AiFillGithub /> David Garcia
                </p>
                <p className="user-github">
                  <AiFillGithub /> Yull Timoteo
                </p>
                <p className="user-github">
                  <AiFillGithub /> Kevin Cajahuanca
                </p>
                <p className="user-github">
                  <AiFillGithub /> Betsabe Escate
                </p>
              </ContainerGrid>
            </ContainerColumn>
            <ContainerColumn gap="0.5rem">
              <span>Source code:</span>
              <ContainerColumn gap="0.25rem">
                <p className="technologies_used">
                  <DiRuby />
                  Ruby on Rails REST API
                </p>
                <p className="technologies_used">
                  <DiReact />
                  React responsive SPA
                </p>
              </ContainerColumn>
            </ContainerColumn>
          </FooterContainer>
        </ContainerContent>
      </Container>
    </IconContext.Provider>
  );
}

export default FooterContent;
