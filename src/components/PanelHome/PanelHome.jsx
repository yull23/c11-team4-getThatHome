import styled from "@emotion/styled";
import urlImg from "../../assets/images/Panel-Home.svg";
import SearchHome from "../SearchHome/SearchHome";

const ContainerPrimary = styled.div`
  aspect-ratio: 2.4 / 1;
  width: 100%;
  background: url(${urlImg}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 3.75rem;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export default function PanelHome() {
  return (
    <ContainerPrimary>
      <ContainerContent>
        <h1>Meet your new Home</h1>
        <p>The easiest way to find where you belong</p>
      </ContainerContent>
      <SearchHome />
    </ContainerPrimary>
  );
}
