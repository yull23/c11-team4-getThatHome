import styled from "@emotion/styled";

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const InputText = styled.input`
  color: var(--DarkGray, #373737);
  width: 100%;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
  border: none;
`;
export const ContainerInputText = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Pink, #f48fb1);
  background: var(--White, #fff);

  &:hover {
    border: 1px solid var(--DarkPink, #bf5f82);
  }
  &:active {
    border: 1px solid var(--DarkPink, #bf5f82);
  }
`;
