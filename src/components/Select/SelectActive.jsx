import { AiFillCheckSquare } from 'react-icons/ai';
import { RiCheckboxBlankCircleLine, RiCheckboxBlankLine } from 'react-icons/ri';
import { PiRadioButtonFill } from 'react-icons/pi';
import { useState } from 'react';
import { GrCheckbox } from 'react-icons/gr';
PiRadioButtonFill
AiFillCheckSquare
RiCheckboxBlankCircleLine
RiCheckboxBlankLine

export default function Select() {
  const category = ["Manufacturing", "Legal", "Education", "Government", "Sales"];
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  const selectOptions = category.map((property) => (
    <option key={property} value={property}>
        <GrCheckbox />{property}
    </option>
  ));

  return (
    <div>
      <GrCheckbox />
      <select value={selectedCategory} onChange={handleSelect}>
        {selectedCategory ? null : <option value="" disabled>Select property</option>}
        {selectOptions}
      </select>
    </div>
  );
}