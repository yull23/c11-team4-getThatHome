import PropTypes from "prop-types";

import { IconContext } from "react-icons";
import {
  RiBuildingLine,
  RiCoinsLine,
  RiMoneyDollarCircleLine,
  RiUploadLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { BiArea, BiBath, BiBed, BiEdit } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import "./card.css";

export function Card({ data }) {
  const Actions = () => {
    return (
      <div className="card__actions">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          {data.active ? (
            <>
              <div className="card__action-container">
                <BiEdit />
                <p className="card__action">Edit</p>
              </div>
              <div className="card__action-container">
                <AiOutlineCloseCircle />
                <p className="card__action">Close</p>
              </div>
            </>
          ) : (
            ""
          )}
          {!data.active ? (
            <>
              <div className="card__action-container">
                <RiUploadLine />
                <p className="card__action">Restore</p>
              </div>
              <div className="card__action-container">
                <RiDeleteBin6Line />
                <p className="card__action">Delete</p>
              </div>
            </>
          ) : (
            ""
          )}
        </IconContext.Provider>
      </div>
    );
  };

  return (
    <div className="card">
      <img src={data.photos[0]} alt="property" className="card__photo" />
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
            <img src="" alt="" />

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
        {data.role == "tenant" ? "" : <Actions></Actions>}
        <div className="card__border"></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};
