import urlImg from "../assets/images/Illustration 2.svg";
import styled from "@emotion/styled";
import Button from "../ui/Button";

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: -1; */
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 60px;
  right: 50%;
  transform: translate(50%, 0);
  text-align: center;
  color: black; /* Color de texto */
  display: flex;
  flex-direction: column;
  gap: 64px;
  h1 {
    //styleName: Headline2;
    font-family: Montserrat;
    font-size: 64px;
    font-weight: 300;
    line-height: 88px;
    letter-spacing: -0.5px;
    text-align: center;
    color: #373737;
    @media (max-width: 1000px) {
      font-size: 32px;
      font-weight: 500;
      line-height: 44px;
    }
  }
  p {
    //styleName: Headline5;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    color: #616161;
    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;
const SearchContainer = styled.div`
  background-color: red;
`;

function HeroSection() {
  return (
    <Container>
      <BackgroundImage src={urlImg} alt="Background" />
      <TextOverlay>
        <div>
          <h1>Meet your new Home</h1>
          <p>The easiest way to find where you belong</p>
        </div>
        <SearchContainer>colocar aqui el search</SearchContainer>
      </TextOverlay>
    </Container>
  );
}

export default HeroSection;
