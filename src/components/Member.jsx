import styled from "@emotion/styled";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 15rem;
  h3 {
    font-family: "Montserrat";
    font-weight: 400;
  }
`;
const Imagen = styled.img`
  border-radius: 55%;
  width: 180px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 32px;
  color: #616161;
`;

function Member({ name, url }) {
  return (
    <Container>
      <Imagen src={url} />
      <h3>{name}</h3>
      <SocialContainer>
        <AiFillGithub size={20} style={{ cursor: "pointer" }} />
        <AiFillLinkedin size={20} style={{ cursor: "pointer" }} />
      </SocialContainer>
    </Container>
  );
}

export default Member;
