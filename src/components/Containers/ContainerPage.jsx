import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export default function ContainerPage({ children }) {
  return <Container>{children}</Container>;
}

ContainerPage.propTypes = {
  children: PropTypes.node,
};
