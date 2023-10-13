import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ShowPropertyContext } from "../../pages/ShowPropertyPage";

const ContainerPrimary = styled.div`
  width: 100%;
  padding: 0 4rem;
`;

export default function CarouselPhoto() {
  const { data } = useContext(ShowPropertyContext);
  console.log(data);
  return (
    <ContainerPrimary>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum est
        aliquam laborum doloribus exercitationem enim repellendus, ut iure amet.
        Veritatis doloribus provident consequuntur laudantium esse unde velit,
        et sapiente quis!
      </div>
    </ContainerPrimary>
  );
}
CarouselPhoto.propTypes = {
  photos: PropTypes.array,
};
