import styled from "@emotion/styled";
import { Form } from "react-router-dom";
import InputRegular from "../ui/Inputs/InputRegular";
import Button from "../ui/Button";
import { RiUserReceivedLine } from "react-icons/ri";

const Container = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    max-width: 24.5rem;
    height: max-content;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }
  h3 {
    color: #000;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }
`;
const ContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default function LoginPage() {
  return (
    <Container>
      <Form>
        <h3>Login</h3>
        <ContainerLabel>
          <label htmlFor="">Email</label>
          <InputRegular inputType="email" placeholder="user@mail.com" />
        </ContainerLabel>
        <ContainerLabel>
          <label htmlFor="">Password</label>
          <InputRegular inputType="password" placeholder="******" />
        </ContainerLabel>
        <Button type="primary">
          <RiUserReceivedLine size="1.5rem" />
          LOGIN
        </Button>
      </Form>
    </Container>
  );
}
