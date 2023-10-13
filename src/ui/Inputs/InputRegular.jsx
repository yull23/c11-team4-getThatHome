import PropTypes from "prop-types";
import { ContainerInputText, InputText } from "./Styles";
import { IconContext } from "react-icons";

export function InputRegular({ icon, placeholder, handleChange, ...props }) {
  return (
    <ContainerInputText maxWidth="22.25rem" {...props}>
      <IconContext.Provider value={{ ...props }}>{icon}</IconContext.Provider>
      <InputText placeholder={placeholder} onChange={handleChange} />
    </ContainerInputText>
  );
}

InputRegular.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  props: PropTypes.object,
  icon: PropTypes.element,
};
