"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carrousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Link = require("./Link");

/* eslint-disable jsx-a11y/anchor-is-valid */
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  nextArrow: /*#__PURE__*/_react.default.createElement("button", null),
  prevArrow: /*#__PURE__*/_react.default.createElement("button", null)
};

var ItemSlide = function ItemSlide(_ref) {
  var slide = _ref.slide,
      counter = _ref.counter;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("iframe", {
    className: "block-videos-iframe bg-white",
    title: "video - ".concat(slide.title),
    src: slide.iframe,
    "data-cookieconsent": "marketing",
    allowFullScreen: true,
    enablejsapi: "1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full flex justify-center items-center bg-white"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-5/6 text-black text-4xl font-normal break-words",
    style: {
      LineHeight: 1.2214
    }
  }, slide.title), /*#__PURE__*/_react.default.createElement("span", {
    className: "w-1/6 text-right text-3xl font-medium slideshow-counter"
  }, counter)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "pt-3 bg-white"
  }, slide.link.map(function (link, item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item,
      className: "links-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_Link.Link, {
      label: link.content,
      type: "external",
      blank: true,
      forVideo: true
    }));
  })));
};

var Carrousel = function Carrousel(_ref2) {
  var slide = _ref2.slide,
      inoui = _ref2.inoui,
      space = _ref2.space;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "block mx-auto md:w-2/4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-300 max-w-screen-md mr-auto ml-auto ".concat(inoui && "inoui-template-container", " ").concat(space === "10px" ? "pt-4" : space === "30px" ? "pt-12" : space === "50px" ? "pt-20" : space === "70px" ? "pt-28" : "")
  }, /*#__PURE__*/_react.default.createElement(_reactSlick.default, settings, slide.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(ItemSlide, {
      slide: item,
      key: index,
      counter: "".concat(index + 1, "/").concat(slide.length)
    });
  }))));
};

exports.Carrousel = Carrousel;
_reactSlick.default.defaultProps = {
  data: {},
  inoui: false,
  slide: {},
  space: null
};