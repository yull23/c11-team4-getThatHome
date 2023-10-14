import styled from "@emotion/styled";
import { useContext } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";
import { IconContext } from "react-icons";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";

export default function EnviorementsProperty() {
  const { data } = useContext(ShowPropertyContext);

  const ContainerPrimary = styled.div`
    padding: 1rem 0;
    border-top: 1px solid #bf5f82;
    border-bottom: 1px solid #bf5f82;
    span {
      color: var(--Gray, #616161);

      /* Headline5 */
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 133.333% */
    }
  `;

  return (
    <ContainerPrimary>
      <IconContext.Provider value={{ size: "2rem", color: "#606061" }}>
        <div className="card__footer">
          <div className="card__description">
            <BiBed />
            <span>{data.bedrooms} bedrooms</span>
          </div>
          <div className="card__description">
            <BiBath />
            <span>{data.bathromms} bathromms</span>
          </div>
          <div className="card__description">
            <BiArea />
            <span>{data.area} m2</span>
          </div>
          {data.petsAllowd ? (
            <p className="card__pets-allowed">
              <FaPaw /> Pets allowed
            </p>
          ) : (
            ""
          )}
        </div>
      </IconContext.Provider>
    </ContainerPrimary>
  );
}
