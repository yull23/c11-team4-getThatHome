import { useState } from 'react';
import "./select.css";
import { ImCheckboxChecked } from 'react-icons/im';
import { RxBox } from 'react-icons/rx';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function SelectActive() {
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
  const containerClassName = selectedCategory ? 'container__element selected' : 'container__element';

  return (
    <div>
      <button className='container__button' onClick={toggleSelected}>
        <div className={containerClassName}>{selectedCategory? selectedCategory:"Select a category"} 
            {showSelected ? <MdKeyboardArrowUp style={{ fontSize: '22px', color: '#616161'}}/> : <MdKeyboardArrowDown style={{ fontSize: '22px' }}/>}
        </div>
      </button>
      {showSelected && 
        <div className='container__property'>
        {category.map((property) => (
          <div key={property}>
            <label className='center-is'>
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
            </label>           
          </div>
          ))}
        </div>
      }
    </div>
    
  );
}
