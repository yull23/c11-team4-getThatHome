import styled from "@emotion/styled";
import PropTypes from "prop-types";

export function ContainerColumn({ gap, children, justify, align, pd }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap};
    padding: ${pd};
  `;
  return <Container>{children}</Container>;
}

export function ContainerRow({ gap, children, justify, align, pd }) {
  const Container = styled.div`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap};
    padding: ${pd};
  `;
  return <Container>{children}</Container>;
}

export function ContainerContent({ children, moreStyles }) {
  const Container = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: auto;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    ${moreStyles}
  `;
  return <Container>{children}</Container>;
}

export function ContainerGrid({
  children,
  columns,
  rows,
  rowGap,
  columnGap,
  gap,
}) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    row-gap: ${rowGap};
    column-gap: ${columnGap};
    gap: ${gap};
  `;
  return <Container>{children}</Container>;
}

ContainerColumn.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  pd: PropTypes.string,
};

ContainerRow.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  pd: PropTypes.string,
};
ContainerContent.propTypes = {
  children: PropTypes.node,
  moreStyles: PropTypes.string,
};

ContainerGrid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
  rows: PropTypes.string,
  rowGap: PropTypes.string,
  columnGap: PropTypes.string,
  gap: PropTypes.string,
};
