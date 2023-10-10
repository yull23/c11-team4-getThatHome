import { IconContext } from "react-icons";
import {
  RiBuildingLine,
  RiCoinsLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import "./card.css";

export function Card() {
  const data = {
    // urlImage: "https://picsum.photos/id/1026/640",
    address: "86872 Jacob Gateway, Durganport, WV 48044",
    price: 3000,
    rent: 2000,
    maintanance: 100,
    typeSale: "rental",
    typeProperty: "Apartament",
    bedrooms: 2,
    bathromms: 2,
    area: 100.0,
    petsAllowd: true,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vel atque quo? Nobis quibusdam libero culpa nisi sed non, eius ad soluta at amet doloremque atque est in fuga qui.",
    photo: "https://picsum.photos/id/1026/640",
  };
  return (
    <div className="card">
      <img src={data.photo} alt="property" className="card__photo" />
      <div className="card__type">
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <RiCoinsLine />
        </IconContext.Provider>
        <p className="card__type-sale">For {data.typeSale}</p>
      </div>
      <div>
        <div className="card__content">
          <div className="card__header">
            <div className="card__price-container">
              <IconContext.Provider value={{ size: "2rem" }}>
                <RiMoneyDollarCircleLine />
              </IconContext.Provider>
              <span className="card__price">{data.price.toLocaleString()}</span>
            </div>
            <div className="card__apartament-container">
              <IconContext.Provider
                value={{ size: "1.5rem", color: "#606061" }}
              >
                <RiBuildingLine />
              </IconContext.Provider>
              <span className="card__apartament">{data.typeProperty}</span>
            </div>
          </div>
          <div className="card__descriptions">
            <p className="card__address">{data.address}</p>

            <IconContext.Provider value={{ size: "1.5rem", color: "#606061" }}>
              <div className="card__footer">
                <div className="card__description">
                  <BiBed />
                  <span>{data.bedrooms}</span>
                </div>
                <div className="card__description">
                  <BiBath />
                  <span>{data.bathromms}</span>
                </div>
                <div className="card__description">
                  <BiArea />
                  <span>{data.area} m2</span>
                </div>
                {data.petsAllowd ? <FaPaw /> : ""}
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="card__border"></div>
      </div>
    </div>
  );
}

// ri RiMoneyDollarCircleLine
// RiMoneyDollarCircleLine;
