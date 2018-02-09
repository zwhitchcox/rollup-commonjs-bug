'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

module.exports = { hello: 'hi' };
console.log(typeof hello === 'undefined' ? 'undefined' : _typeof(hello));
//# sourceMappingURL=output.js.map
