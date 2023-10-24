import { useState } from "react";

export default function RatioPropType() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="apartment"
        name="propertyType"
        value="apartment"
        checked={selectedOption === "apartment"}
        onChange={handleOptionChange}
      />
      <label htmlFor="apartment">Apartment</label>

      <input
        type="radio"
        id="house"
        name="propertyType"
        value="house"
        checked={selectedOption === "house"}
        onChange={handleOptionChange}
      />
      <label htmlFor="house">House</label>
    </div>
  );
}
