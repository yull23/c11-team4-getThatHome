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
import { Link, useNavigate, useNavigation } from "react-router-dom";
import {
  deleteProperty,
  updateActiveStatus,
} from "../../services/properties-services";
import { useContext, useState } from "react";
import { CardsContext } from "../CardPanel/CardPanel";

export function Card({ data, fromUser }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteProperty(data.propertyID);
    window.location.reload();
  };
  const handleUpdateActive = () => {
    updateActiveStatus(data.propertyID);
    window.location.reload();
  };

  const Actions = () => {
    return (
      <div className="card__actions">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          {data.active ? (
            <>
              <button className="card__action-container">
                <BiEdit />
                <p className="card__action">Edit</p>
              </button>
              <button
                className="card__action-container"
                onClick={handleUpdateActive}
              >
                <AiOutlineCloseCircle />
                <p className="card__action">Close</p>
              </button>
            </>
          ) : (
            <>
              <button
                className="card__action-container"
                onClick={handleUpdateActive}
              >
                <RiUploadLine />
                <p className="card__action">Restore</p>
              </button>
              <button className="card__action-container" onClick={handleDelete}>
                <RiDeleteBin6Line />
                <p className="card__action">Delete</p>
              </button>
            </>
          )}
        </IconContext.Provider>
      </div>
    );
  };

  return (
    <div className="card">
      <Link to={`/properties/${data.propertyID}`}>
        <div className="card__photo-container">
          <img src={data.photo_url[0]} alt="property" className="card__photo" />
          <div
            className={`card__type card__type-${data.operation.toLowerCase()}`}
          >
            <IconContext.Provider value={{ size: "1.25rem" }}>
              <RiCoinsLine />
            </IconContext.Provider>
            <p className="card__type-sale">For {data.operation}</p>
          </div>
        </div>
        <div>
          <div className="card__content">
            <div className="card__header">
              <div className="card__price-container">
                <IconContext.Provider value={{ size: "2rem" }}>
                  <RiMoneyDollarCircleLine />
                </IconContext.Provider>
                <span className="card__price">
                  {data.price.toLocaleString()}
                </span>
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
              <p className="card__address">{data.name}</p>
              <img src="" alt="" />

              <IconContext.Provider
                value={{ size: "1.5rem", color: "#606061" }}
              >
                <div className="card__footer">
                  <div className="card__description">
                    <BiBed />
                    <span>{data.bedrooms}</span>
                  </div>
                  <div className="card__description">
                    <BiBath />
                    <span>{data.bathrooms}</span>
                  </div>
                  <div className="card__description">
                    <BiArea />
                    <span>{data.area} m²</span>
                  </div>
                  {data.pets_allowed ? <FaPaw /> : ""}
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </Link>
      <div>
        {fromUser ? "" : <Actions />}
        <div className="card__border"></div>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   data: PropTypes.object,
//   fromUser: PropTypes.bool,
// };
