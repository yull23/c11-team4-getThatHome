import landlordUrl from "../assets/images/rafiki.png";
import homeseekerUrl from "../assets/images/pana.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContainerSignup = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 3.5rem;
`;
const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: Monserrat;
  h3 {
    color: var(--teal-teal-900, #1d4044);
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }
  h2 {
    color: var(--teal-teal-900, #1d4044);
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.375;
    letter-spacing: -0.5px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  gap: 54px;
  justify-content: center;
  a {
    background-color: white;
    text-align: center;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    aspect-ratio: 280/274;
    &:hover {
      background-color: #ccc2;
    }
    padding: 1rem;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.15000000596046448px;
    text-align: center;
    color: #373737;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    text-align: center;
    color: 373737;
  }
`;
export default function SignupHomePage() {
  return (
    <ContainerSignup>
      <TitleContainer>
        <h3>Selecciona el perfil con el que te identificas</h3>
        <h2>Que estas buscando?</h2>
      </TitleContainer>
      <ImgContainer>
        <Link to="/signup" state={{ role: "tenant" }}>
          <img src={landlordUrl} />
          <div>
            <h3>Landord</h3>
            <p>You want to rent or sell a home</p>
          </div>
        </Link>
        <Link to="/signup" state={{ role: "customer" }}>
          <img src={homeseekerUrl} />
          <div>
            <h3>Home seeker</h3>
            <p>You want to find a home</p>
          </div>
        </Link>
      </ImgContainer>
    </ContainerSignup>
  );
}
