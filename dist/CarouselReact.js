"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var Fa = _interopRequireWildcard(require("react-icons/fa"));
var parms = _interopRequireWildcard(require("./parameters"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CarouselReact(_ref) {
  var _Fa$reactIconRight, _Fa$reactIconLeft;
  let {
    photo,
    outside,
    heigthContainer,
    widthContainer,
    styleContainer,
    styleNavIcon,
    stylePaging,
    reactIconRight,
    reactIconLeft
  } = _ref;
  const IconRight = (_Fa$reactIconRight = Fa[reactIconRight]) !== null && _Fa$reactIconRight !== void 0 ? _Fa$reactIconRight : Fa.FaAngleRight;
  const IconLeft = (_Fa$reactIconLeft = Fa[reactIconLeft]) !== null && _Fa$reactIconLeft !== void 0 ? _Fa$reactIconLeft : Fa.FaAngleLeft;
  const lengthphoto = photo.length;
  // Using the useState hook to manage the current state index of the picture
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);

  // Function to handle the click on the back button
  const handlePrevClick = () => {
    // Using the update state function to decrement the current index
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : lengthphoto - 1);
  };

  // Function to manage the click on the next button
  const handleNextClick = () => {
    // Using the update state function to increment the current index
    setCurrentIndex(prevIndex => prevIndex < lengthphoto - 1 ? prevIndex + 1 : 0);
  };

  // Style for outside navigation
  const container = outside ? {
    ...parms.styleCarousel.container,
    ...{
      margin: '0 2rem 0 2rem'
    }
  } : {
    ...parms.styleCarousel.container
  };
  const mergedHeight = heigthContainer !== null && heigthContainer !== void 0 ? heigthContainer : parms.styleCarousel.container.height;
  const mergedContainer = {
    ...container,
    height: mergedHeight
  };
  const navStyle = outside ? {
    ...parms.styleCarousel.navigation,
    ...{
      width: '100%'
    }
  } : {
    ...parms.styleCarousel.navigation
  };
  const numberStyle = outside ? {
    ...parms.styleCarousel.number,
    ...{
      top: '0.rem'
    }
  } : {
    ...parms.styleCarousel.number
  };
  const mergedParentContainer = {
    ...parms.styleCarousel.parentContainer,
    width: widthContainer !== null && widthContainer !== void 0 ? widthContainer : parms.styleCarousel.parentContainer.width,
    ...styleContainer
  };
  const mergedNavIcon = {
    ...parms.styleCarousel.navIcon,
    top: outside ? parseInt(mergedHeight) / 2 + 'rem' : parseInt(mergedHeight) / 2 + 1 + 'rem',
    ...styleNavIcon
  };
  const mergedStylePaging = {
    ...parms.styleCarousel.number,
    ...numberStyle,
    ...stylePaging
  };
  if (lengthphoto > 1) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: mergedParentContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: navStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      onClick: handlePrevClick,
      style: mergedNavIcon
    }, /*#__PURE__*/_react.default.createElement(IconLeft, null)), /*#__PURE__*/_react.default.createElement("div", {
      onClick: handleNextClick,
      style: mergedNavIcon
    }, /*#__PURE__*/_react.default.createElement(IconRight, null))), /*#__PURE__*/_react.default.createElement("div", {
      style: mergedContainer
    }, photo.map((value, index) => {
      // Condition to determine if this image should be shown or hidden
      const setClass = index === currentIndex ? parms.styleCarousel.show : parms.styleCarousel.hidden;
      return /*#__PURE__*/_react.default.createElement("img", {
        style: {
          ...parms.styleCarousel.image,
          ...parms.styleCarousel.position,
          ...setClass
        },
        src: value,
        alt: "photos",
        key: index
      });
    })), /*#__PURE__*/_react.default.createElement("div", {
      style: mergedStylePaging
    }, currentIndex + 1, " / ", lengthphoto));
  } else {
    // If only one image is present, return only this image
    return /*#__PURE__*/_react.default.createElement("div", {
      style: mergedParentContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: mergedContainer
    }, /*#__PURE__*/_react.default.createElement("img", {
      style: {
        ...parms.styleCarousel.image,
        ...parms.styleCarousel.position,
        ...parms.styleCarousel.show
      },
      src: photo,
      alt: "photos",
      key: 0
    })));
  }
}
var _default = exports.default = CarouselReact;