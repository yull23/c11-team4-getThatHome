import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const InputText = styled.input`
  color: var(--DarkGray, #373737);
  width: 100%;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
  border: none;
`;

const ContainerInputText = styled.div`
  display: flex;
  max-width: 356px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--DarkPink, #bf5f82);
  background: var(--White, #fff);
`;

export default function Input() {
  return (
    <>
      <ContainerInputText>
        <BsSearch />
        <InputText />
        <RiArrowDownSLine />
      </ContainerInputText>
    </>
  );
}
