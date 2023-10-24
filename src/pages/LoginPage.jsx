import styled from "@emotion/styled";
import { Form,useNavigate  } from "react-router-dom";
import InputRegular from "../ui/Inputs/InputRegular";
import Button from "../ui/Button";
import { RiUserReceivedLine } from "react-icons/ri";
import { useAuth } from "../context/useAuth";
import { useState } from "react";

const Container = styled.div`
  background: linear-gradient(to bottom, #f48fb122 50%, white 50%);
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
`;
const ContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;


export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  

  const { login } = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Realiza la validación de datos aquí
    if (formData.email && formData.password) {
      try {
        // Intenta iniciar sesión
        await login(formData);
        navigate("/");
      } catch (error) {
        
        console.error("Error de inicio de sesión:", error);
      }
    } else {
      console.error("Campos de correo electrónico y contraseña son obligatorios");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h3>Login</h3>
        <ContainerLabel>
          <label htmlFor="email">Email</label>
          <InputRegular
            inputType="email"
            placeholder="user@mail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </ContainerLabel>
        <ContainerLabel>
          <label htmlFor="password">Password</label>
          <InputRegular
            inputType="password"
            placeholder="******"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </ContainerLabel>
        <Button type="primary" primary>
          <RiUserReceivedLine size="1.5rem" />
          LOGIN
        </Button>
      </Form>
    </Container>
  );
}
