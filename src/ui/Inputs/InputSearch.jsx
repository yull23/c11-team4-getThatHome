import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { ButtonIcon, ContainerInputText, InputText } from "./Styles";
import { IconContext } from "react-icons";

export function InputSearch({
  placeholder,
  handleClickArrow,
  handleClickSearch,
  handleChange,
  haveArrow,
  ...props
}) {
  return (
    <ContainerInputText maxWidth="22.25rem" {...props}>
      <IconContext.Provider value={{ ...props }}>
        <ButtonIcon onClick={handleClickSearch}>
          <BsSearch />
        </ButtonIcon>
      </IconContext.Provider>

      <InputText placeholder={placeholder} onChange={handleChange} {...props} />
      {haveArrow ? (
        <IconContext.Provider value={{ ...props }}>
          <ButtonIcon onClick={handleClickArrow}>
            <RiArrowDownSLine />
          </ButtonIcon>
        </IconContext.Provider>
      ) : (
        ""
      )}
    </ContainerInputText>
  );
}

InputSearch.propTypes = {
  handleClickArrow: PropTypes.func,
  handleClickSearch: PropTypes.func,
  handleChange: PropTypes.func,
  haveArrow: PropTypes.bool,
  placeholder: PropTypes.string,
  props: PropTypes.object,
};
