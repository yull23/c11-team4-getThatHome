import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "100%"};
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Pink, #f48fb1);
  background: var(--White, #fff);
  &:hover {
    border: 1px solid var(--DarkPink, #bf5f82);
  }
`;
const ContainerInput = styled.input`
  display: block;
  color: var(--DarkGray, #373737);

  width: 100%;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  letter-spacing: 0.5px;
  border: none;
`;

export default function InputRegular({
  placeholder,
  inputType,
  name,
  ...props
}) {
  return (
    <Container {...props}>
      <ContainerInput type={inputType} placeholder={placeholder} name={name} />
    </Container>
  );
}

InputRegular.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
};
