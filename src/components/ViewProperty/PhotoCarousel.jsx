import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ShowPropertyContext } from "../../pages/ShowPropertyPage";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttons {
    display: flex;
    align-items: center;
    border: none;
  }
  img {
    width: 100;
    aspect-ratio: 1.33/1;
  }

  .slide {
    width: 100%;
    heigth: auto;
    opcity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .slide.active {
    opcity: 1;
  }
`;

export default function CarouselPhoto() {
  const { data } = useContext(ShowPropertyContext);
  const [imgCurrent, setImgCurrent] = useState(0);
  const photos = data.photos;

  const handleClickPrev = () => {
    if (imgCurrent <= 0) {
      return;
    } else {
      setImgCurrent(imgCurrent - 1);
    }
  };
  const handleClickPost = () => {
    if (imgCurrent >= photos.length - 1) {
      return;
    } else {
      setImgCurrent(imgCurrent + 1);
    }
  };

  return (
    <ContainerPrimary>
      <div>
        <button onClick={handleClickPrev} className="buttons">
          <RiArrowLeftSLine style={{ fontSize: "2rem" }} />
        </button>
      </div>
      <img src={photos[imgCurrent]} alt={`img-${imgCurrent}`} />
      <div>
        <button onClick={handleClickPost} className="buttons">
          <RiArrowRightSLine style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </ContainerPrimary>
  );
}
CarouselPhoto.propTypes = {
  photos: PropTypes.array,
};
