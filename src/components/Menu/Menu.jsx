import { AiFillHeart } from "react-icons/ai";
import { TbHome2 } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { PiMagnifyingGlass } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import Button from "../../ui/Button";
import abc from "./logo.svg";
import styled from "@emotion/styled";
const Container = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export function Menu() {
  const menu1 = (
    <Container>
      <img src={abc}></img>{" "}
      <ButtonContainer>
        <Button type="ghost" size="small">
          <BiUser />
          BUTTON
        </Button>
        <Button type="secondary" size="small">
          <BiUser />
          BUTTON
        </Button>
        <Button type="secondary" size="small">
          <BiUser />
          BUTTON
        </Button>
      </ButtonContainer>
    </Container>
  );

  const menu2 = (
    <Container>
      <img src={abc}></img>{" "}
      <ButtonContainer>
        <Button type="ghost" size="small">
          <PiMagnifyingGlass />
          FIND A HOME
        </Button>
        <Button type="secondary" size="small">
          <RiUserAddLine />
          JOIN
        </Button>
        <Button type="primary" size="small">
          <RiUserAddLine />
          LOGIN
        </Button>
      </ButtonContainer>
    </Container>
  );

  const menu3 = (
    <Container>
      <img src={abc}></img>{" "}
      <ButtonContainer>
        <Button type="ghost" size="small">
          <PiMagnifyingGlass />
          FIND A HOME
        </Button>
        <Button type="secondary" size="small">
          <BiLogOutCircle />
          LOGOUT
        </Button>
        <Button type="primary" size="small">
          <AiFillHeart />
          SAVED PROPERTIES
        </Button>
        <Button type="primary" size="small">
          <BiUser />
          PROFILE
        </Button>
      </ButtonContainer>
    </Container>
  );

  const menu4 = (
    <Container>
      <img src={abc}></img>{" "}
      <ButtonContainer>
        <Button type="ghost" size="small">
          <PiMagnifyingGlass />
          FIND A HOME
        </Button>
        <Button type="secondary" size="small">
          <BiLogOutCircle />
          LOGOUT
        </Button>
        <Button type="primary" size="small">
          <TbHome2 />
          MY PROPERTIES
        </Button>
        <Button type="primary" size="small">
          <BiUser />
          PROFILE
        </Button>
      </ButtonContainer>
    </Container>
  );

  return menu2;
}
