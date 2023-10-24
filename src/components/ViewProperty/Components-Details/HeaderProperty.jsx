import { ContainerColumn } from "../../Containers/ContainersDiv";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ShowPropertyContext } from "../../../pages/ShowPropertyPage";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function HeaderProperty() {
  const { property } = useContext(ShowPropertyContext);
  const address = property.name.split(", ");
  return (
    <div className="property__header">
      <ContainerColumn>
        <p className="property__direction">{address[0]}</p>
        <p className="property__place">
          {address.slice(1, address.length)
            ? address.slice(1, address.length).join(", ")
            : ""}
        </p>
      </ContainerColumn>

      <ContainerColumn className="property__price-container">
        <div className="property__price">
          <IconContext.Provider value={{ size: "3rem", color: "#616161" }}>
            <RiMoneyDollarCircleLine />
          </IconContext.Provider>
          <span className="card_1__price">
            {property.price.toLocaleString()}
          </span>
        </div>
        <p className="property__maintanance">
          {property.maintenance ? `+ ${property.maintenance}` : ""}
        </p>
      </ContainerColumn>
    </div>
  );
}
