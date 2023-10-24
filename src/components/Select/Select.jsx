import styled from '@emotion/styled';
import { useState } from 'react';
import { ImCheckboxChecked } from 'react-icons/im';
import { RxBox } from 'react-icons/rx';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Container = styled.div`
  gap: 10px;
  padding: 0px;
`;
const ContainerButton = styled.button`
  background: var(--White, #FFF);
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  border-color: #F48FB1; 
  width: 11.75rem;
  height: auto;
  &:hover {
    border: 1px solid var(--DarkPink, #BF5F82);
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
border-radius: 0 0 0.5rem 0.5rem; 
font-family: "Inter", sans-serif;
color: var(--Gray, #616161);
width: 100%;
display: flex;
flex-direction: column;
border: 1px solid var(--DarkPink, #BF5F82); 
margin: 0.25rem 0rem;
position: relative;
z-index: 2;
> * {
  width: 100%;
}
;`
const LabelCenter = styled.label`
display: flex;
align-items: center;
height: 2.35rem;
margin: 0;
gap: 0.5rem;
font-size: 0.875rem;
line-height: 1.25rem;
padding: 0.5rem;
&:hover {
  background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
}
;`

export default function SelectOperationType({ option }) {
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
      <ContainerButton onClick={toggleSelected}>
        <ContainerElement selected={selectedOption}>
            {selectedOption ?  selectedOption: "Buying & Renting"}
            {showSelected ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#616161'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px' }}/>}
        </ContainerElement>
      </ContainerButton>
      {showSelected && 
        <ContainerProperty>
        {option.map((property) => (
          <div key={property}>
            <LabelCenter>
              {selectedOption === property ? (
                <ImCheckboxChecked style={{ color: '#F48FB1', fontSize: '22px',padding: '1px' }}/> 
              ) : (
                <RxBox style={{ color: '#F48FB1', fontSize: '22px' }}/> 
              )}
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