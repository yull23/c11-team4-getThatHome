import styled from '@emotion/styled';
import { useState } from 'react';
import { ImCheckboxChecked } from 'react-icons/im';
import { RxBox } from 'react-icons/rx';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const ContainerButton = styled.button`
  background: var(--White, #FFF);
  padding: 8px;
  border-radius: 8px; 
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  border-color: #F48FB1; 
  width: 280px;
  margin: 4px 0px;
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
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px; 
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  color: var(--Gray, #616161);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
;`

const LabelCenter = styled.label`
  display: flex;
  align-items: center;
  height: 20px;
  gap: 8px;
;`

export default function SelectCheckBox() {
  const category = ["Manufacturing", "Legal", "Education", "Government", "Sales"];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSelected, setShowSelected] = useState(false);
  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
    setShowSelected(!showSelected);
  };
  const toggleSelected = () => {
    setShowSelected(!showSelected);
  };

  return (
    <div>
      <ContainerButton onClick={toggleSelected}>
        <ContainerElement selected={selectedCategory}>
            {selectedCategory ?  selectedCategory: "Select a property"}
            {showSelected ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#616161'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px' }}/>}
        </ContainerElement>
      </ContainerButton>
      {showSelected && 
        <ContainerProperty>
        {category.map((property) => (
          <div key={property}>
            <LabelCenter>
              {selectedCategory === property ? (
                <ImCheckboxChecked style={{ color: '#F48FB1', fontSize: '22px',padding: '1px' }}/> 
              ) : (
                <RxBox style={{ color: '#F48FB1', fontSize: '22px' }}/> 
              )}
              <input
                type="checkbox"
                value={property}
                checked={selectedCategory === property}
                onChange={handleRadioChange}
                style={{ display: 'none' }}
              />
              {property}
            </LabelCenter>           
          </div>
          ))}
        </ContainerProperty>
      }
    </div>
  );
}
