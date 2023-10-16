import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./styles.css";
import { useState } from "react";
import { ContainerInputText, InputText } from "./Styles";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
`;
const ContainerButton = styled.button`
  background: var(--White, #FFF);
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  padding: 0.5rem;
  border-color: #FFF; 
  width: 10.375rem;
  height: auto;
  position: relative;
  z-index: 1;
  &:hover {
    border: 1px solid var(--Background, #F5F5F6);
  }
  `;
const ContainerElement = styled.div`
  color: ${props => props.selected ? 'var(--DarkGray, #373737)' : 'var(--LightGray, #8E8E8E)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContainerProperty = styled.div`
  background: var(--White, #FFF);
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  color: var(--Gray, #616161);
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--Background, #F5F5F6);
  margin: 0.75rem 0rem;
;`

const LabelCenter = styled.label`
  display: flex;
  align-items: center;
  width: 10.25rem;
  height: 100%;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  &:hover {
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
;`

export function InputOptionHome({ label, type, placeholder, handleChange, ...props }) {
  return (
    <Container>
      <p className="input-search-home__label">{label}</p>
    <ContainerInputText maxWidth="22.25rem" {...props}>
      <InputText
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
      />
    </ContainerInputText>
    </Container>
  );
}

InputOptionHome.propTypes = {
  handleChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
};

export function SelectOptionHome({ label, option }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [showSelected, setShowSelected] = useState(false);
  const handleRadioChange = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
    setShowSelected(!showSelected);
  };
  const toggleSelected = (event) => {
    event.preventDefault();
    setShowSelected(!showSelected);
  };
  return (
      <Container>
      <p className="input-search-home__label">{label}</p>
      <ContainerButton onClick={toggleSelected}>
        <ContainerElement selected={selectedOption}>
            {selectedOption ?  selectedOption: "Select"}
            {showSelected ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#616161'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px' }}/>}
        </ContainerElement>
      </ContainerButton>
      {showSelected && 
        <ContainerProperty>
        {option.map((property) => (
          <div key={property}>
            <LabelCenter>
              <input
                type="checkbox"
                value={property}
                checked={selectedOption === property}
                onChange={handleRadioChange}
                style={{ display: 'none' }}
              />
              {property}
            </LabelCenter>           
          </div>
          ))}
        </ContainerProperty>
      }
      </Container>
  );
}
