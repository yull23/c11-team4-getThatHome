import styled from "@emotion/styled";
import { Form, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useAuth } from "../context/useAuth";
import InputRegular from "../ui/Inputs/InputRegular";

const ContainerSignup = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  padding-top: 7.25rem;
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
  label {
    color: var(--DarkGray, #373737);
    /* Regular/Overline */
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  p {
    color: var(--LightGray, #8e8e8e);

    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
  }
`;

const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default function SignupPage() {
  let { state } = useLocation();
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);
    credentials.role_id = state.role;
    if (credentials.password_digest === credentials.password_confirmation) {
      signup(credentials);
      navigate("/");
    } else {
      console.log("Error");
    }
  }
  return (
    <ContainerSignup>
      <Form onSubmit={handleSignup}>
        <h3>Create your Account</h3>
        <ContainerInputs>
          <ContainerLabel>
            <label htmlFor="">NAME</label>
            <InputRegular inputType="text" placeholder="John Doe" name="name" />
          </ContainerLabel>
          <ContainerLabel>
            <label htmlFor="">EMAIL</label>
            <InputRegular
              inputType="email"
              placeholder="user@mail.com"
              name="email"
            />
          </ContainerLabel>
          <ContainerLabel>
            <label htmlFor="">PHONE</label>
            <InputRegular
              inputType="text"
              placeholder="999-999-999"
              name="phone"
            />
          </ContainerLabel>
          <ContainerLabel>
            <label htmlFor="">PASSWORD</label>
            <InputRegular
              inputType="password"
              placeholder="******"
              name="password_digest"
            />
          </ContainerLabel>
          <p>At least 6 characteres</p>
          <ContainerLabel>
            <label htmlFor="">PASSWORD CONFIRMATION</label>
            <InputRegular
              inputType="password"
              placeholder="******"
              name="password_confirmation"
            />
          </ContainerLabel>
        </ContainerInputs>
        <Button type="primary">CREATE ACCOUNT</Button>
      </Form>
    </ContainerSignup>
  );
}
