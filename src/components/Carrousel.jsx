/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../styles/index.css";
import "../styles/scss/slick.scss";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { Link } from "./Link";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <button />,
  prevArrow: <button />,
};


const ItemSlide = ({ slide, counter }) => {

  return (
    <div>
      <iframe
        className="block-videos-iframe"
        title={`video - ${slide.title}`}
        src={slide.iframe}
        data-cookieconsent="marketing"
        allowFullScreen
        enablejsapi="1">
      </iframe>
      <div className='w-full flex justify-center items-center'>
        <span className='w-5/6 text-black text-4xl font-normal break-words' style={{ LineHeight: 1.2214 }}>
          {slide.title}
        </span>
        <span className='w-1/6 text-right text-3xl font-medium slideshow-counter'>
          {counter}
        </span>
      </div>
      <ul className='mt-3'>
        {slide.link.map((link, item) => {
          return (
            <li key={item} className={"links-wrapper"}>
              <Link label={link.content} type={"external"} blank={true} forVideo={true} />
            </li>
          )
        })}
      </ul >
    </div >
  )
}

export const Carrousel = ({ slide, inoui }) => {
  return (
    <div className={`max-w-screen-md mr-auto ml-auto ${inoui && 'inoui-template-container'}`}>
      <Slider {...settings}>
        {slide.map((item, index) => {
          return (
            <ItemSlide slide={item} key={index} counter={`${index + 1}/${slide.length}`} />
          )
        })}
      </Slider>
    </div>
  );
}

Slider.propTypes = {
  /**
  * wheather the link is under a video or not 
  */
  slides: PropTypes.object,
  /**
  * if theme is inoui or not
  */
  inoui: PropTypes.bool,
};

Slider.defaultProps = {
  data: {},
  inoui: false
};