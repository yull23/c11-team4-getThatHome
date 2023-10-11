import styled from "@emotion/styled";

const ContainerInput = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 8px;
`;

function InputOptionHome({ label, options }) {
  const allOptions = options.filter((_, id) => id != 0);
  return (
    <div>
      <p>{label}</p>
      <ContainerInput>
        <select name="options" id="" className="select__container">
          <option value={options[0]} defaultValue>
            {options[0]}
          </option>
          {allOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </ContainerInput>
    </div>
  );
}

export default InputOptionHome;

import PropTypes from "prop-types";

InputOptionHome.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};
