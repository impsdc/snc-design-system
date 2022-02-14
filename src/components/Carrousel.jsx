/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "./Link";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  nextArrow: <button />,
  prevArrow: <button />,
};

const ItemSlide = ({ slide, counter }) => {
  return (
    <div>
      <iframe
        className="block-videos-iframe bg-white"
        title={`video - ${slide.title}`}
        src={slide.iframe}
        data-cookieconsent="marketing"
        allowFullScreen
        enablejsapi="1"
      ></iframe>
      <div className="w-full flex justify-center items-center bg-white">
        <span
          className="w-5/6 text-black text-4xl font-normal break-words"
          style={{ LineHeight: 1.2214 }}
        >
          {slide.title}
        </span>
        <span className="w-1/6 text-right text-3xl font-medium slideshow-counter">
          {counter}
        </span>
      </div>
      <ul className="pt-3 bg-white">
        {slide.link.map((link, item) => {
          return (
            <li key={item} className={"links-wrapper"}>
              <Link
                label={link.content}
                type={"external"}
                blank={true}
                forVideo={true}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Carrousel = ({ slide, inoui, space }) => {
  return (
    <div className="wrapper-carrousel block mx-auto">
      <div
        className={`bg-gray-300 max-w-screen-md mr-auto ml-auto ${inoui && "inoui-template-container"
          } ${space === "10px"
            ? "pt-4"
            : space === "30px"
              ? "pt-12"
              : space === "50px"
                ? "pt-20"
                : space === "70px"
                  ? "pt-28"
                  : ""
          }`}
      >
        <Slider {...settings}>
          {slide.map((item, index) => {
            return (
              <ItemSlide
                slide={item}
                key={index}
                counter={`${index + 1}/${slide.length}`}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

Carrousel.propTypes = {
  /**
   * if inoui color need to be applied
   */
  inoui: PropTypes.bool,
  /**
   * Padding top given to the component
   */
  space: PropTypes.oneOf(["10px", "30px", "50px", "70px"]),
  /**
   * Array of slides
   */
  slide: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      iframe: PropTypes.string.isRequired,
      link: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

Slider.defaultProps = {
  data: {},
  inoui: false,
  slide: {},
  space: null,
};
