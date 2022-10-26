"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trail = exports.AChild = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _web = require("@react-spring/web");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AChild = (0, _web.a)(_styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]))));
exports.AChild = AChild;

var Trail = function Trail(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? {
    opacity: 0
  } : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? {
    opacity: 1,
    x: 0,
    y: 0
  } : _ref$to,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {
    mass: 5,
    tension: 2000,
    friction: 200
  } : _ref$config,
      children = _ref.children;

  var items = _react["default"].Children.toArray(children);

  var trail = (0, _web.useTrail)(items.length, _objectSpread(_objectSpread({
    config: config,
    width: "100%",
    height: "100%"
  }, to), {}, {
    from: from,
    reset: true,
    delay: 0
  }));
  return trail.map(function (style, index) {
    return /*#__PURE__*/_react["default"].createElement(AChild, {
      key: index,
      style: style
    }, items[index]);
  });
};

exports.Trail = Trail;