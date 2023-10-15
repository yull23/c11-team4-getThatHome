import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { ButtonIcon, ContainerInputText, InputText } from "./Styles";
import { CiSaveUp2 } from "react-icons/ci";


export function Category({
    placeholder,
    handleClickArrow,
    handleClickSearch,
    handleChange,
    haveArrow,
    ...props
  }) {
    return (
      <ContainerInputText {...props}>
        <IconContext.Provider value={{ ...props }}>
          <ButtonIcon onClick={handleClickSearch}>
            <CiSaveUp2 />
          </ButtonIcon>
        </IconContext.Provider>
  
        <InputText placeholder={placeholder} onChange={handleChange} {...props} />
        {haveArrow ? (
          <IconContext.Provider value={{ ...props }}>
            <ButtonIcon onClick={handleClickArrow}>
            </ButtonIcon>
          </IconContext.Provider>
        ) : (
          ""
        )}
      </ContainerInputText>
    );
  }
  
  Input.propTypes = {
    handleClickArrow: PropTypes.func,
    handleClickSearch: PropTypes.func,
    handleChange: PropTypes.func,
    haveArrow: PropTypes.bool,
    placeholder: PropTypes.string,
    props: PropTypes.object,
  };
  