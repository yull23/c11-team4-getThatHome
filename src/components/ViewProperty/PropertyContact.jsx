import styled from "@emotion/styled";
import {
  CardEdit,
  CardLogin,
  CardNoLogin,
  CardUser,
  CardView,
} from "./Components-Details/CardContact";
import { useContext, useEffect, useState } from "react";
import { ShowPropertyContext } from "../../pages/ShowPropertyPage";
import { statusPropertyUser } from "../../services/properties-services";
import { useAuth } from "../../context/useAuth";

const ContainerPrimary = styled.div`
  min-width: 290px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function PropertyContact() {
  const { property } = useContext(ShowPropertyContext);
  const role = sessionStorage.getItem("role");

  return (
    <ContainerPrimary>
      {role == 1 ? <CardEdit /> : <CardUser />}
    </ContainerPrimary>
  );
}
