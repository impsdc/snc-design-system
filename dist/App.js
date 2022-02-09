"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./styles/index.css");

var _header = _interopRequireDefault(require("./images/header.jpg"));

var _footer = _interopRequireDefault(require("./images/footer.jpg"));

var _bloc = _interopRequireDefault(require("./images/bloc1.jpg"));

var _bloc2 = _interopRequireDefault(require("./images/bloc2.jpg"));

var _Carrousel = require("./components/Carrousel");

var _Bloc = require("./components/Bloc");

var _data = require("./helpers/data");

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative min-h-screen"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("img", {
    src: _header.default,
    alt: "header"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(_Carrousel.Carrousel, {
    slide: _data.data,
    space: "big"
  }), /*#__PURE__*/React.createElement(_Bloc.Bloc, {
    img: _bloc.default,
    space: "light"
  }), /*#__PURE__*/React.createElement(_Carrousel.Carrousel, {
    slide: _data.data,
    space: "medium"
  }), /*#__PURE__*/React.createElement(_Bloc.Bloc, {
    img: _bloc2.default,
    space: "big"
  })), /*#__PURE__*/React.createElement("section", {
    className: "",
    style: {
      background: "#333"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _footer.default,
    alt: "header",
    className: "block ml-auto mr-auto"
  })));
}

var _default = App;
exports.default = _default;