import PropTypes from "prop-types";
import styled from "@emotion/styled";
import InputRegular from "../../../ui/Inputs/InputRegular";
import { BiSearch } from "react-icons/bi";

export default function LabelContainer({
  name,
  maxWidth,
  icon,
  content,
  placeholder,
  inputType,
  step,
}) {
  const ContainerLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    label {
      color: var(--DarkGray, #373737);
      /* Regular/Overline */
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  `;
  return (
    <ContainerLabel>
      <label htmlFor={name}>{content}</label>
      <InputRegular
        placeholder={placeholder}
        maxWidth={maxWidth}
        name={name}
        inputType={inputType}
        step={step}
      >
        {icon}
      </InputRegular>
    </ContainerLabel>
  );
}

LabelContainer.propTypes = {
  name: PropTypes.string,
  maxWidth: PropTypes.string,
  placeholder: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
  inputType: PropTypes.string,
  step: PropTypes.string,
};
