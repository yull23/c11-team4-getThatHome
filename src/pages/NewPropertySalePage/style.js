import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledH1 = styled.h1`
  font-size: 2.35rem;
  line-height: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 430px) {
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
`;

export const StyledLinksContainer = styled.div`
  font-family: ${fonts.secondary};
  font-size: 0.876rem;
  line-height: 1.26rem; 
  letter-spacing: 0.01564rem;
  margin-bottom: 1rem;

  .links-title {
    font-size: 0.626rem;
    line-height: 1rem;
    letter-spacing: 0.09374rem;
  }

  .links-container {
    display: flex;
    align-content:center;
  }

  .link-left {
    border: 0.0626rem solid ${(props) => props.theme.colors.background.darker};
    border-right: none;
    padding: 0.3rem;
    border-radius: 0.6rem 0 0 0.5rem;
  }

  .link-right {
    border: 0.0626rem solid ${(props) => props.theme.colors.background.darker};
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

  .form__error {
    min-height: 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.025rem;
  }

  .form__selects {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.25rem;
  }

  .input-area {
    max-width: 6rem;
  }

  .label {
    display: flex;
    gap: 0.25rem;
    font-size: 0.876rem;
    margin-bottom: 0.25rem;
  }

  .quote {
    color: ${(props) => props.theme.colors.text.light};
    font-size: 0.76rem;
    letter-spacing: 0.025rem;
    margin-bottom: 1rem;
  }

  .label__info {
    color: ${(props) => props.theme.colors.text.light};
    font-size: 0.625rem;
    font-family: ${fonts.secondary};
    letter-spacing: 0.09375rem;
  }

  .photos-title {
    font-family: ${fonts.primary};
    font-size: 1.26rem;
    font-weight: 520;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
  }

  .photos-instructions {
    font-size: 0.626rem;
    letter-spacing: 0.09375rem;
  }

  .images-container {
    background-color: ${(props) => props.theme.colors.background.light};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .images-container__no-image {
    background-color: ${(props) => props.theme.colors.background.lighter};
    height: 7.5rem;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
  }

  .images-container__container {
    position: relative;
  }

  .images-container__image {
    height: 7.5rem;
    width: 7.6rem;
    object-fit: cover;
  }

  .images-container__delete {
    border-radius: 0 0 0 0.5rem;
    border: 1px solid transparent;
    backdrop-filter: blur(0.5rem);
    position: absolute;
    top: 0;
    right: 0;
    fill: ${(props) => props.theme.colors.red[300]};
  }
`;

export const StyledTextArea = styled.textarea`
  font-family: ${fonts.secondary};
  padding: 0.5rem;
  font-size: 0.876rem;
  line-height: 1.25rem; /* 142.857% */
  width: 100%;
  letter-spacing: 0.01564rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.6rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;
