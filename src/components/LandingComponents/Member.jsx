import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ContainerRow } from "../Containers/ContainersDiv";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 15rem;
  p {
    font-family: "Montserrat";
    font-weight: 400;
    color: #000;
    text-align: center;

    /* Regular/Headline5 */
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .container__anchor {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;
const Img = styled.img`
  border-radius: 55%;
  width: 180px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 32px;
  color: #616161;
`;

function Member({ name, url, urlGitHub, urlLinkedin }) {
  return (
    <Container>
      <Img src={url} />
      <p>{name}</p>
      <SocialContainer>
        <ContainerRow gap={"2rem"}>
          <a href={`${urlGitHub}`} target="BLANK" className="container__anchor">
            <AiFillGithub size={"1.5rem"} />
          </a>
          <a
            href={`${urlLinkedin}`}
            target="blank"
            className="container__anchor"
          >
            <AiFillLinkedin size={"1.5rem"} />
          </a>
        </ContainerRow>
      </SocialContainer>
    </Container>
  );
}

export default Member;

Member.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  urlGitHub: PropTypes.string,
  urlLinkedin: PropTypes.string,
};
