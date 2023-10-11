import PropTypes from "prop-types";
import { ContainerInputText, InputText } from "./Styles";

export function InputForm({ type, placeholder, handleChange, ...props }) {
  return (
    <>
      <ContainerInputText maxWidth="22.25rem" {...props}>
        <InputText
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
        />
      </ContainerInputText>
    </>
  );
}

InputForm.propTypes = {
  handleChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
};
