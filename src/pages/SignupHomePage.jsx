import landlordUrl from "../assets/images/rafiki.png";
import homeseekerUrl from "../assets/images/pana.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContainerSignup = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  width: 100%;
  aspect-ratio: 2.05/1;
  margin-bottom: 70px;
`;
const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 64px auto;
  font-family: Monserrat;
  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
  }
  h2 {
    font-size: 64px;
    font-weight: 300;
    line-height: 88px;
    letter-spacing: -0.5px;
  }
`;
const ImgContainer = styled.div`
  display: flex;

  gap: 54px;
  justify-content: center;
  div {
    background-color: white;
    text-align: center;
    border-radius: 8px;
    &:hover {
      background-color: #ccc2;
    }
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
  .link {
    padding: 1rem;
  }
`;
function SignupHomePage() {
  return (
    <>
      <ContainerSignup>
        <TitleContainer>
          <h3>Selecciona el perfil con el que te identificas</h3>
          <h2>Que estas buscando?</h2>
        </TitleContainer>
        <ImgContainer>
          <Link to="/signup" state={{ role: "tenant" }}>
            <div
              className="link"
              style={{
                boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={landlordUrl} />
              <div>
                <h3>Landord</h3>
                <p>You want to rent or sell a home</p>
              </div>
            </div>
          </Link>
          <Link to="/signup" state={{ role: "customer" }}>
            <div
              className="link"
              style={{
                boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={homeseekerUrl} />
              <div>
                <h3>Home seeker</h3>
                <p>You want to find a home</p>
              </div>
            </div>
          </Link>
        </ImgContainer>
      </ContainerSignup>
    </>
  );
}

export default SignupHomePage;
