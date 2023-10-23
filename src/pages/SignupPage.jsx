import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useAuth } from "../context/useAuth";

const ContainerSignup = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
  width: 100%;
  aspect-ratio: 2.05/1;
  margin-bottom: 70px;
  padding-top: 100px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  color: #373737;
  gap: 4px;
  label {
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-align: left;
  }
  input {
    //styleName: Body1;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #8e8e8e;
    padding: 8px;
    border-color: #f48fb1;
    border-radius: 8px;
  }
`;
const FormContainer = styled.div`
  max-width: 1000px;
  background-color: white;
  padding: 16px;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  button {
    margin: 16px auto 0;
  }
`;
const TitleForm = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
`;
export default function SignupPage() {
  let { state } = useLocation();
  const { signup } = useAuth();
  const navigate = useNavigate();

  console.log("role", state);

  function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);
    credentials.role_id = state.role;
    if (credentials.password_digest === credentials.password_confirmation) {
      console.log(credentials);
      signup(credentials);
      navigate("/");
    } else {
      console.log("Error");
    }
  }
  return (
    <>
      <ContainerSignup>
        <FormContainer>
          <TitleForm>Create your Account</TitleForm>
          <Form onSubmit={handleSignup}>
            <Input>
              <label htmlFor="">NAME</label>
              <input type="text" name="name" placeholder="John Doe" />
            </Input>
            <Input>
              <label htmlFor="">EMAIL</label>
              <input type="email" name="email" placeholder="user@mail.com" />
            </Input>
            <Input>
              <label htmlFor="">PHONE</label>
              <input type="text" name="phone" placeholder="999-999-999" />
            </Input>
            <Input>
              <label htmlFor="">PASSWORD</label>
              <input
                placeholder="******"
                type="password"
                name="password_digest"
              />
            </Input>
            <Input>
              <label htmlFor="">PASSWORD CONFIRMATION</label>
              <input
                placeholder="******"
                type="password"
                name="password_confirmation"
              />
            </Input>
            <Button type="primary">CREATE ACCOUNT</Button>
          </Form>
        </FormContainer>
      </ContainerSignup>
    </>
  );
}
