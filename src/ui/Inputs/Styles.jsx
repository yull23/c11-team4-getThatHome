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
  position: relative; 
  z-index: 2;
`;
export const ContainerInputText = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--Pink, #F48FB1);
  background: var(--White, #fff);
  
`;
