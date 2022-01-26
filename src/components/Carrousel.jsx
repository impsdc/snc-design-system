/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../styles/index.css";
import "../styles/scss/slick.scss";
import PropTypes from 'prop-types';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <button />,
  prevArrow: <button />,
};

const ItemSlide = ({ slide }) => {
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
      <div className='w-5/6'>
        <span className='text-black text-4xl font-medium mt-6 break-words'>
          {slide.title}
        </span>
      </div>
      <ul className='mt-3 d-flex fle'>
        {slide.link.map((link, item) => {
          return (
            <li key={item}>
              <a href={link.url} target={link.type === "external" ? '_blank' : ''} rel="noreferrer">
                {link.content}
              </a>
            </li>
          )
        })}
      </ul >
    </div >
  )
}

export const Carrousel = ({ slide }) => {
  return (
    <div className='max-w-screen-md'>
      <Slider {...settings}>
        {slide.map((slide, index) => {
          return (
            <ItemSlide slide={slide} key={index} />
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
  data: PropTypes.object
};

Slider.defaultProps = {
  data: {}
};