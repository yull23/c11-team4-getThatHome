import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { ButtonIcon, ContainerInputText, InputText } from "./Styles";

export function InputSearch({
  placeholder,
  handleClickArrow,
  handleClickSearch,
  handleChange,
  haveArrow,
  ...props
}) {
  return (
    <>
      <ContainerInputText maxWidth="22.25rem" {...props}>
        <ButtonIcon onClick={handleClickSearch}>
          <BsSearch />
        </ButtonIcon>
        <InputText
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
        {haveArrow ? (
          <ButtonIcon onClick={handleClickArrow}>
            <RiArrowDownSLine />
          </ButtonIcon>
        ) : (
          ""
        )}
      </ContainerInputText>
    </>
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
