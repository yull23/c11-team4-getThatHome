import landlordUrl from "../assets/images/rafiki.png";
import homeseekerUrl from "../assets/images/pana.png";
import Footer2 from "../ui/Footer/Footer2";
import { Menu } from "../components/Menu/Menu";
import styled from "@emotion/styled";

const ContainerSignup = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  width: 1440px;
  height: 704px;
`;
const TitleContainer = styled.div`
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
    margin: 9px;
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
    letter-spacing: 0.10000000149011612px;
    text-align: center;
    color: 373737;
  }
`;
function SignupPage() {
  return (
    <>
      <ContainerSignup>
        <TitleContainer>
          <h3>Selecciona el perfil con el que te identificas</h3>
          <h2>Que estas buscando?</h2>
        </TitleContainer>
        <ImgContainer>
          <div
            style={{
              boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img src={landlordUrl} />
            <div>
              <h3>Landord</h3>
              <p>You want to rent or sell a home</p>
            </div>
          </div>
          <div
            style={{
              boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img src={homeseekerUrl} />
            <div>
              <h3>Home seeker</h3>
              <p>You want to find a home</p>
            </div>
          </div>
        </ImgContainer>
      </ContainerSignup>
    </>
  );
}

export default SignupPage;
