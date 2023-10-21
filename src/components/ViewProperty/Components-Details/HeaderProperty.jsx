import { ContainerColumn } from "../../Containers/ContainersDiv";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function HeaderProperty() {
  const { data2 } = useContext(ShowPropertyContext);

  const address = data2.address.split(", ");
  return (
    <div className="property__header">
      <ContainerColumn>
        <p className="property__direction">{address[0]}</p>
        <p className="property__place">{address.slice(1).join(", ")}</p>
      </ContainerColumn>

      <ContainerColumn className="property__price-container">
        <div className="property__price">
          <IconContext.Provider value={{ size: "3rem", color: "#616161" }}>
            <RiMoneyDollarCircleLine />
          </IconContext.Provider>
          <span className="card_1__price">{data.price.toLocaleString()}</span>
        </div>
        <p className="property__maintanance">+ {data.maintanance}</p>
      </ContainerColumn>
    </div>
  );
}
