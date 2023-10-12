import styled from "@emotion/styled";
import { RiArrowDownSLine } from "react-icons/ri";

import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
`;

const ContainerInput = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  align-items: center;
`;

function InputOptionHome({ label, options, isSelect }) {
  return (
    <Container>
      <p className="input-search-home__label">{label}</p>
      <ContainerInput>
        {isSelect ? (
          <select name="options" id="" className="input-search-home__select">
            <option
              value={options[0]}
              defaultValue
              className="input-search-home__option"
            >
              {options[0]}
            </option>
            <option
              value={options[1]}
              defaultValue
              className="input-search-home__option"
            >
              {options[1]}
            </option>
          </select>
        ) : (
          <>
            <input
              type="text"
              className="input-search-home__input"
              placeholder="Favorite district"
            />
            <RiArrowDownSLine></RiArrowDownSLine>
          </>
        )}
      </ContainerInput>
    </Container>
  );
}

export default InputOptionHome;

import PropTypes from "prop-types";

InputOptionHome.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};
