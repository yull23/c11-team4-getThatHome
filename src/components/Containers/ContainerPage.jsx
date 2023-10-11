import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  margin: auto;
  max-width: 1440px;
`;

export default function ContainerPage({ children }) {
  return <Container>{children}</Container>;
}
