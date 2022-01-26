"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./styles/index.css");

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-400 h-screen grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3/4 my-auto ml-20"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold mb-10 text-white"
  }, "JIT mode is cool"), /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia earum ducimus neque obcaecati consequuntur ratione accusamus at officiis tempore, magnam non debitis fugit unde alias id quidem necessitatibus."), /*#__PURE__*/React.createElement("button", {
    className: "bg-yellow-500 rounded-full hover:bg-red-700 text-white font-bold py-2 px-4"
  }, "truc")));
}

var _default = App;
exports.default = _default;