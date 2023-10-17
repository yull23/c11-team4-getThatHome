import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 3rem;
  margin-bottom: 1rem;

`;

export const StyledLinksContainer = styled.div`
  font-family: ${fonts.secondary};
  font-size: 32px;
  line-height: 64px;
  letter-spacing: 0.01564rem;
  margin-bottom: 1rem;

  .links-title {
    font-size: 0.627rem;
    line-height: 1rem;
    letter-spacing: 0.09375rem;
  }

  .links-container {
    display: flex;
    align-items: center; 
  }

  .link-left {
    border: 0.0626rem solid ${(props) => props.theme.colors.background.darker};
    border-right: none;
    padding: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .link-right {
    border: 0.0627rem solid ${(props) => props.theme.colors.background.darker};
    padding: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .active {
    background-color: ${(props) => props.theme.colors.pink[400]};
  }
`;

export const StyledForm = styled.form`
  font-family: ${fonts.secondary};
  max-width: 36.5rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  /* ... (el resto del código no necesita correcciones) */
`;

export const StyledTextArea = styled.textarea`
  font-family: ${fonts.secondary};
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  letter-spacing: 0.01562rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;
