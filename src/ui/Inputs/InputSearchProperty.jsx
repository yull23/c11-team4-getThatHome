import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./styles.css";
import { useState } from "react";
import { ContainerInputText, InputText } from "./Styles";
import { ImCheckboxChecked } from "react-icons/im";
import { RxBox } from "react-icons/rx";
import { RiMoneyDollarCircleFill, RiSearchLine } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";

const Container = styled.div`
  gap: 0;
  padding: 0;
`;

const ContainerLine = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--LightGray, #8E8E8E);  
  width: 100%;
  overflow: hidden;
  > div {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }
`;

const LabelCenter = styled.label`
  display: flex;
  align-items: center;
  height: 2.35rem;
  margin: 0;
  gap: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  justify-content: space-between;
`;

const Option = styled.div`
  padding: 0.25rem 1rem;
  border: 1px solid var(--LightGray, #8E8E8E);  
  background-color: ${(props) => (props.isSelected ? '#F48FB1' :'transparent')};
  color: ${(props) => (props.isSelected ? '#FFF' : '#616161')};
`;

const ContainerButton = styled.button`
  border: 0px;
  display: inline-flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  background: var(--Pink, #F48FB1);
  color: var(--White, #FFF);
  text-align: center;
  z-index: 1;
  /* Button */
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase; 
  `;
  
  const ContainerPropertyLine = styled.div`
  background: var(--White, #FFF);
  font-family: "Inter", sans-serif;
  color: var(--Gray, #616161);
  
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--Background, #F5F5F6);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
  margin: 0.375rem 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
  position: absolute; /* Agregamos la posición absoluta */
  z-index: 2;
  &:hover {
    width: 100%;
  }
`;

const ContainerProperty = styled.div`
  background: var(--White, #FFF);
  align-items: flex-start;
  border-radius: 0 0 0.5rem 0.5rem;
  font-family: "Inter", sans-serif;
  color: var(--Gray, #616161);
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--DarkPink, #BF5F82);
  margin: 0.25rem 0rem;
  gap: 1rem;
  > * {
    width: 100%;
  }
`;

const LabelInput = styled.label`
  align-items: center;
  height: 2.35rem;
  padding: 0.5rem;
  gap: 0.25rem;
  display: flex;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
;`

const ContainerDone = styled.button`
  background: var(--Pink, #F48FB1);
  border-radius: 0.5rem; 
  text-align: center;
  border: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0.5rem; 
  color: var(--White, #FFF);
  text-align: center;
  /* Button */
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-left: auto;
  `;

const ContainerLabel = styled.div`
  gap: 0.5rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ElementInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Pink, #F48FB1);
  background: var(--White, #FFF);
  padding: 0.5rem;
  input {
    width: 3.625rem;
    border: none; 
    outline: none;
  }
`;

const Checkbox = styled.input`
  display: none;
`;

export function InputOptionPrice({ type, placeholder, label, range, placeholderMin, placeholderMax, ...props }) {
  const [showOptions, setShowOptions] = useState(false);
  const [numMin, setnumMin] = useState('');
  const [numMax, setnumMax] = useState('');
  const [result, setResult] = useState('');
  
  const filtrarRange = () => {
    event.preventDefault();
    const num1 = parseInt(numMin);
    const num2 = parseInt(numMax);

    if (!isNaN(num1) && !isNaN(num2)) {
      const rangeFiltrados = range.filter(num => num >= num1 && num <= num2);
      setResult(rangeFiltrados.join(', '));
    } 
    setShowOptions(!showOptions);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setShowOptions(!showOptions);
  };

  return (
    <Container>
      <ContainerButton onClick={handleInputChange}>
      { (numMax && numMin)? `$${(numMin / 1000).toFixed(1)}k - $${(numMax / 1000).toFixed(1)}k`: (numMax ? `<= $${(numMax / 1000).toFixed(1)}k` : (numMin ? `>= $${(numMin / 1000).toFixed(1)}k` : "price")) 
  }      </ContainerButton>
  
      {showOptions && 
        <ContainerPropertyLine style={{transform: 'translateX(-30%)', maxWidth: '16.125rem'}}>
          <Container>
            <p className="input-search-home__label">{label}</p>
            <ContainerLabel>
              <ElementInput>
                <RiMoneyDollarCircleFill style={{ fontSize:"20px", color: "#8E8E8E"}} />
                <input
                  type="number"
                  placeholder={placeholderMin}
                  value={numMin}
                  onChange={(e) => setnumMin(e.target.value)}
                />
                </ElementInput>
              <AiOutlineMinus/>
              <ElementInput>
                <RiMoneyDollarCircleFill style={{ fontSize:"20px", color: "#8E8E8E"}} />                
              <input
                  type="number"
                  placeholder={placeholderMax}
                  value={numMax}
                  onChange={(e) => setnumMax(e.target.value)}
                />
              </ElementInput>
            </ContainerLabel>
          </Container>
          <ContainerDone onClick={filtrarRange}>done</ContainerDone>
        </ContainerPropertyLine>
      }
    </Container>
  );
}

export function SelectPropertyType({ type, label, placeholder, option, ...props }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const handleInputChange = (event) => {
    event.preventDefault();
    setShowOptions(!showOptions);
  };
  const handleOptionChange = (event) => {
    event.preventDefault();
    const clickedOption = event.target.value;
    {(selectedOptions.includes(clickedOption))? 
      setSelectedOptions(selectedOptions.filter(option => option !== clickedOption)):setSelectedOptions([...selectedOptions, clickedOption]);
    }
  };

  return (
    <Container>   
      <ContainerButton onClick={handleInputChange} selected={selectedOptions}>
        {selectedOptions.length > 0 ? selectedOptions.join(' & ') : 'Property type'}
      </ContainerButton>
      {showOptions && 
        <ContainerPropertyLine style={{transform:  'translateX(-5%)', maxWidth: '13.3rem'}}>
        <Container>
            <p className="input-search-home__label">{label}</p>
            <ContainerLabel>
            {option.map((property) => (
              <LabelCenter key={property}>
                {selectedOptions.includes(property) ?  (
                  <ImCheckboxChecked style={{ color: '#F48FB1', fontSize: '22px',padding: '1px' }}/> 
                ) : (
                  <RxBox style={{ color: '#F48FB1', fontSize: '22px' }}/> 
                )}
                <input
                  type="checkbox"
                  value={property}
                  checked={selectedOptions.includes(property)}
                  onChange={handleOptionChange}
                  style={{ display: 'none' }}
                />
                {property}
              </LabelCenter>
              ))}
            </ContainerLabel>
            <ContainerDone onClick={handleInputChange}>
                DONE
            </ContainerDone>
          </Container>
        </ContainerPropertyLine>
      }
    </Container>
  );
}

export function InputOptionMore({ type, placeholder, option, label, range, placeholderMin, placeholderMax, ...props }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [numMin, setnumMin] = useState('');
  const [numMax, setnumMax] = useState('');
  const [result, setResult] = useState('');

  const filtrarRange = () => {
    event.preventDefault();
    const num1 = parseInt(numMin);
    const num2 = parseInt(numMax);

    if (!isNaN(num1) && !isNaN(num2)) {
      const rangeFiltrados = range.filter(num => num >= num1 && num <= num2);
      setResult(rangeFiltrados.join(', '));
    } 
    setShowOptions(!showOptions);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setShowOptions(!showOptions);
  };
  const handleOptionChange = (event) => {
    event.preventDefault();
    const clickedOption = event.target.value;
    {(selectedOptions.includes(clickedOption))? 
      setSelectedOptions(selectedOptions.filter(option => option !== clickedOption)):setSelectedOptions([...selectedOptions, clickedOption]);
    }
  };

  return (
    <Container>   
      <ContainerButton onClick={handleInputChange} selected={selectedOptions}>
        MORE
        {showOptions ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#fff'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px', color: '#fff'}}/>}
      </ContainerButton>
      {showOptions && 
        <ContainerPropertyLine style={{transform: 'translateX(-38%)', maxWidth: '16.4rem'}}>
        <ContainerLabel>
        {option.map((property) => (
          <LabelCenter key={property}>
              {selectedOptions.includes(property) ?  (
                <ImCheckboxChecked style={{ color: '#F48FB1', fontSize: '22px',padding: '1px' }}/> 
              ) : (
                <RxBox style={{ color: '#F48FB1', fontSize: '22px' }}/> 
              )}
              <input 
                type="checkbox"
                value={property}
                checked={selectedOptions.includes(property)}
                onChange={handleOptionChange}
                style={{ display: 'none'}}
              />
              {property}
            </LabelCenter>
          ))}
          </ContainerLabel>   
          <Container>
            <p className="input-search-home__label">{label}</p>
            <ContainerLabel>
              <ElementInput>
                <input
                  type="number"
                  placeholder={placeholderMin}
                  value={numMin}
                  onChange={(e) => setnumMin(e.target.value)}
                  style={{ width: '5.475rem'}}
                />
              </ElementInput>

              <AiOutlineMinus/>
              <ElementInput>
              <input
                  type="number"
                  placeholder={placeholderMax}
                  value={numMax}
                  onChange={(e) => setnumMax(e.target.value)}
                  style={{ width: '5.475rem'}}
                />
              </ElementInput>
            </ContainerLabel>

          </Container>
          <ContainerDone onClick={filtrarRange}>
            done
          </ContainerDone>
        </ContainerPropertyLine>
      }
    </Container>
  );
}

export function InputOptionProperty({ type, placeholder, handleChange, ...props }) {
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
      <ContainerInputText maxWidth="15rem" {...props}>
      <RiSearchLine style={{ color: "#8E8E8E", fontSize: "20px" }} />
        <InputText
          placeholder={placeholder}
          type={type}
          onChange={handleInputChange}
          value={searchText}
        />
      </ContainerInputText>
        {showOptions && 
          <ContainerProperty>
            {filteredOptions.map((option, index) => (
              <LabelInput key={index} onClick={() => handleOptionClick(option)}>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleRadioChange}
                  style={{ display: 'none' }}
                />
                {option}
              </LabelInput>
            ))}
          </ContainerProperty>
        }
    </Container>
  );
}

export function SelectOptionBeds({ option, label1, label2 }) {
  const [selectedOptions, setSelectedOptions] = useState({ beds: '', baths: '' });
  const [showSelected, setShowSelected] = useState(false);

  const toggleSelected = () => {
    event.preventDefault();
    setShowSelected(!showSelected);
  };

  const handleOptionChange = (type, value) => {
    event.preventDefault();
    setSelectedOptions({ ...selectedOptions, [type]: value });
  };

  return (
    <Container>
      <ContainerButton onClick={toggleSelected}>
        {selectedOptions.beds || selectedOptions.baths
          ? `${selectedOptions.beds} BD, ${selectedOptions.baths} BA`
          : 'BEDS & BATHS'}
      </ContainerButton>
      {showSelected && (
        <ContainerPropertyLine style={{transform:  'translateX(-24%)', maxWidth: '18.125rem'}}>
        <Container>
            <p className="input-search-home__label">{label1}</p>
            <ContainerLine>
              {option.map((property) => (
                <Option
                  key={property}
                  isSelected={selectedOptions.beds === property}
                  onClick={() => handleOptionChange('beds', property)}
                >
                    <Checkbox
                      type="checkbox"
                      value={property}
                      checked={selectedOptions.beds === property}
                      onChange={() => handleOptionChange('beds', property)}
                    />
                    {property}
                </Option>
              ))}
            </ContainerLine>
          </Container>
          <Container>
            <p className="input-search-home__label">{label2}</p>
            <ContainerLine>
              {option.map((property) => (
                <Option
                  key={property}
                  isSelected={selectedOptions.baths === property}
                  onClick={() => handleOptionChange('baths', property)}
                >
                    <Checkbox
                      type="checkbox"
                      value={property}
                      checked={selectedOptions.baths === property}
                      onChange={() => handleOptionChange('baths', property)}
                    />
                    {property}
                </Option>
              ))}
            </ContainerLine>
          </Container>
          <ContainerDone onClick={toggleSelected}>DONE</ContainerDone>

        </ContainerPropertyLine>
      )}
    </Container>
  );
}
