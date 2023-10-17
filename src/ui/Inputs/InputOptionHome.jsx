import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./styles.css";
import { useState } from "react";
import { ContainerInputText, InputText } from "./Styles";

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
  font-style: normal; 
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
  margin: 0.375rem 0rem;
  > * {
    width: 100%;
  }
;`
const LabelCenter = styled.label`
  display: flex;
  align-items: center;
  height: 2.35rem;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  &:hover {
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
;`

export function InputOptionHome({ label, type, placeholder, handleChange, ...props }) {
  const option = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'España', 'Estados Unidos', 'Francia', 'Italia', 'México', 'Perú', 'Uruguay', 'Venezuela', 'Alemania', 'Canadá', 'Australia', 'Reino Unido', 'India', 'China',];
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const filteredOptions = option.filter(search =>
    search.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleInputChange = (event) => {
    const value = event.target.value;
    setShowOptions(value.length > 1);
    setSearchText(value);
    handleChange(value);
  };
  const handleRadioChange = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
    setSearchText(!searchText);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchText(option);
    setShowOptions(!showOptions);
  };
  return (
    <Container>
      <p className="input-search-home__label">{label}</p>
      <ContainerInputText maxWidth="22.25rem" {...props}>
        <InputText
          placeholder={placeholder}
          type={type}
          onChange={handleInputChange}
          value={searchText}
        />
        {showOptions ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#616161'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px' }}/>}
      </ContainerInputText>
      
        {showOptions && 
          <ContainerProperty>
            {filteredOptions.map((option, index) => (
              <LabelCenter key={index} onClick={() => handleOptionClick(option)}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleRadioChange}
                  style={{ display: 'none' }}
                />
                {option}
              </LabelCenter>
            ))}
          </ContainerProperty>
        }
      
    </Container>
  );
}

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
