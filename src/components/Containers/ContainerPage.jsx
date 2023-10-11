import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  margin: auto;
  max-width: 1440px;
  border: 1px solid black;
`;

export default function ContainerPage({ children }) {
  return <Container>{children}</Container>;
}

ContainerPage.propTypes = {
  children: PropTypes.node,
};
