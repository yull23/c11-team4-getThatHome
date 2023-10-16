import styled from "@emotion/styled";
import PropTypes from "prop-types";

export function ContainerColumn({ gap, children }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${gap};
  `;
  return <Container>{children}</Container>;
}

export function ContainerRow({ gap, children }) {
  const Container = styled.div`
    display: flex;
    gap: ${gap};
  `;
  return <Container>{children}</Container>;
}

ContainerColumn.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
};

ContainerRow.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
};
