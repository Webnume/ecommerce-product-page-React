import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Modal from "../Modal/Modal.js";
import useModal from "../Modal/useModal";
import { ReactComponent as ChevronLeft } from "./assets/chevron-left.svg";
import { ReactComponent as ChevronRight } from "./assets/chevron-right.svg";
import data from "./data";

const Gallery = () => <Slideshow items={data} />;

const Slideshow = (props) => {
  const { isShowing, toggle } = useModal();
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0, // begin with the first item
    modalOpen: false,
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  const escFunction = (event) => {
    if (event.key === "Escape" && isShowing) {
      return toggle();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [isShowing]);

  return (
    <SlideWrapper>
      <Modal isShowing={isShowing} toggle={toggle}>
        <ImageBoxModal>
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggle}
            >
              &#215;
            </button>
          </div>
          <img
            alt={items[activeIndex].caption}
            src={items[activeIndex].image}
          />
          <NavButton position="left" onClick={moveTo(activeIndex - 1)}>
            <ChevronLeft />
          </NavButton>
          <NavButton position="right" onClick={moveTo(activeIndex + 1)}>
            <ChevronRight />
          </NavButton>
        </ImageBoxModal>
        <ThumbnailListModal>
          {items.map((item, index) => (
            <div style={{ position: "relative" }} key={item.caption}>
              <Thumbnail
                onClick={moveTo(index)}
                active={activeIndex === index}
                src={item.image}
              />
              <ThumbnailBackground active={activeIndex === index} />
            </div>
          ))}
        </ThumbnailListModal>
      </Modal>
      <ImageBox onClick={toggle}>
        <img alt={items[activeIndex].caption} src={items[activeIndex].image} />
        <NavButton position="left" onClick={moveTo(activeIndex - 1)}>
          <ChevronLeft />
        </NavButton>
        <NavButton position="right" onClick={moveTo(activeIndex + 1)}>
          <ChevronRight />
        </NavButton>
      </ImageBox>
      <ThumbnailList>
        {items.map((item, index) => (
          <Thumbnail
            onClick={moveTo(index)}
            active={activeIndex === index}
            src={item.image}
            key={item.caption}
          />
        ))}
      </ThumbnailList>
    </SlideWrapper>
  );
};

const ThumbnailList = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 25%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ThumbnailListModal = styled(ThumbnailList)`
  width: 550px;
  height: 25%;
  justify-content: space-evenly;
`;

const Thumbnail = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 0.6 : 1)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 0.7rem;
  width: 6rem;
  height: 6rem;
  margin: 1rem auto;
  border: ${({ active }) =>
    active ? " 2px solid hsl(26, 100%, 55%)" : "transparent"};
  :hover {
    opacity: 0.6;
    background-color: white;
  }
`;

const ThumbnailBackground = styled(Thumbnail)`
  background-image: unset;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 1;
`;

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40%;
  padding: 1.5rem;
  border-radius: 50%;
  border: none;
  background: white;
  width: 4.5rem;
  ${({ position }) =>
    position === "left" &&
    css`
      left: -30px;
    `};
  ${({ position }) =>
    position === "right" &&
    css`
      right: -30px;
    `};
  transform: scale(0.8);
  :hover {
    path {
      fill: hsl(26, 100%, 55%);
    }
  }
  @media screen and (max-width: 900px) {
    ${({ position }) =>
      position === "left" &&
      css`
        left: -5px;
      `};
    ${({ position }) =>
      position === "right" &&
      css`
        right: -5px;
      `};
    top: 35%;
    transform: scale(0.5);
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.5rem;
  }
  button {
    display: none;
  }
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100%;
    button {
      display: unset;
    }

    img {
      border-radius: 0;
      pointer-events: none;
    }
  }
`;

const ImageBoxModal = styled(ImageBox)`
  width: 550px;
  height: 100%;
  img {
    width: 550px;
    height: 100%;
  }
  button {
    display: unset;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 300px;
    img {
      width: 100vw;
      height: 300px;
      object-fit: cover;
      margin: 0;
    }
  }
`;

export default Gallery;
