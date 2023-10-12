import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function PaginatorCards({ pages, pageCurrent, setPageCurrent }) {
  const indexPages = Object.keys(pages);

  const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;

  const ButtonRegular = styled.button`
    display: flex;
    width: 31px;
    height: 31px;
    padding: 5px 0px 6px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--ShallowGray, rgba(97, 97, 97, 0.15));
    background: var(--White, #fff);
  `;

  const ButtonActive = styled.button`
    display: flex;
    width: 31px;
    height: 31px;
    padding: 5px 0px 6px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid var(--DarkPink, #bf5f82);
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  `;

  function handleClick(e) {
    setPageCurrent(e.target.textContent);
  }

  return (
    <ContainerButtons>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <RiArrowLeftSLine />
        {indexPages.map((index, id) => {
          if (pageCurrent == index) {
            return (
              <ButtonActive key={id} onClick={handleClick}>
                {index}
              </ButtonActive>
            );
          } else {
            return (
              <ButtonRegular key={id} onClick={handleClick}>
                {index}
              </ButtonRegular>
            );
          }
        })}
        <RiArrowRightSLine />
      </IconContext.Provider>
    </ContainerButtons>
  );
}

PaginatorCards.propTypes = {
  pages: PropTypes.object.isRequired,
  pageCurrent: PropTypes.string.isRequired,
  setPageCurrent: PropTypes.func.isRequired,
};
