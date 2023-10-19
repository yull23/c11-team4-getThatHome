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
  background: var(--White, #fff);
  border: 1px solid var(--Background, #FFF);
  &:hover {
    border: 1px solid var(--Background, #F5F5F6);
  }
`;
