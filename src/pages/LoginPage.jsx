import styled from "@emotion/styled";
import { Form, redirect } from "react-router-dom";
import InputRegular from "../ui/Inputs/InputRegular";
import Button from "../ui/Button";
import { RiUserReceivedLine } from "react-icons/ri";
import { tokenKey } from "../services/api-fetch/config";
import apiFetch from "../services/api-fetch/api-fetch";

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

export async function actionLogin({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  const response = await apiFetch("login", { body: credentials });

  if (!response.ok) {
    return redirect("/error");
  } else {
    const { token } = await response.json();
    sessionStorage.setItem(tokenKey, token);
    return redirect(`/`);
  }
}

export default function LoginPage() {
  return (
    <Container>
      <Form method="post">
        <h3>Login</h3>
        <ContainerLabel>
          <label htmlFor="email">Email</label>
          <InputRegular
            inputType="email"
            placeholder="user@mail.com"
            name="email"
          />
        </ContainerLabel>
        <ContainerLabel>
          <label htmlFor="">Password</label>
          <InputRegular
            inputType="password"
            placeholder="******"
            name="password"
          />
        </ContainerLabel>
        <Button type="primary">
          <RiUserReceivedLine size="1.5rem" />
          LOGIN
        </Button>
        {/* <button type="submit">login</button> */}
      </Form>
    </Container>
  );
}
