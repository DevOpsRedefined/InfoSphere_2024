/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/blockEditor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./src/blocks-js/custom-slider/custom-slider.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







console.log("im here");
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("custom/slick-slider", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slick Slider"),
  icon: "slides",
  category: "common",
  attributes: {
    slides: {
      type: "array",
      default: [{
        title: "Managed Service Provider (MSP)",
        subtitle: "We specialize in remotely managing customer’s IT infrastructure and/or end-user systems, typically on a proactive basis and under a subscription model.",
        link: ""
      }, {
        title: "Cloud Services and Solutions",
        subtitle: "We work with the leading cloud solutions provider on the market and deploy the best ones for the businesses we work with to help them work more efficiently.",
        link: ""
      }, {
        title: "Cyber & IT Network Security",
        subtitle: "we’re experienced at interpreting the complexities of industry regulations into processes and procedures that not only meet requirements but can actually improve operations.",
        link: ""
      }, {
        title: "Proactive Server and Desktop Monitoring",
        subtitle: "If you need assistance planning, implementing, and managing your backup, disaster recovery, and business continuity plans, talk to a trusted IT consultant.",
        link: ""
      }]
    },
    sliderId: {
      type: "string",
      default: "slick-slider"
    },
    isOverlaySlider: Boolean,
    // use this to add absolute class to div
    topPosition: Number // use this to add top value for an overlay
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    // const { content, sliderId } = attributes;

    /* new */

    const {
      slides,
      sliderId,
      isOverlaySlider,
      topPosition
    } = attributes;
    const updateSlide = (index, key, value) => {
      const newSlides = [...slides];
      newSlides[index][key] = value;
      setAttributes({
        slides: newSlides
      });
    };
    const removeSlide = index => {
      const newSlides = slides.filter((slide, i) => i !== index);
      setAttributes({
        slides: newSlides
      });
    };
    const addSlide = () => {
      setAttributes({
        slides: [...slides, {
          title: "",
          subtitle: "",
          link: ""
        }]
      });
    };
    const blockProps = (0,_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      // className: "gtg-demo-h1", // not working on higher element ie div
      // "data-id": "special-h1-id", // not working
    });
    const [openPanelIndex, setOpenPanelIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const [openSliderOverlayState, setOpenSliderOverlayState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const togglePanel = index => {
      setOpenPanelIndex(openPanelIndex === index ? null : index);
    };
    const renderExtraOverlayOptions = () => {
      console.log("isOverlaySlider", isOverlaySlider);
      if (isOverlaySlider) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Border Radius",
          value: attributes.topPosition,
          onChange: value => setAttributes({
            topPosition: value
          }),
          min: 50,
          max: 80,
          step: 10,
          marks: [{
            value: 50,
            label: "50"
          }, {
            value: 60,
            label: "60"
          }, {
            value: 70,
            label: "70"
          }, {
            value: 80,
            label: "80"
          }]
        });
      } else {
        return null;
      }
    };

    /* new */
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Settings"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider ID"),
            value: sliderId,
            onChange: value => setAttributes({
              sliderId: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider overlay settings"),
            opened: attributes.isOverlaySlider ? true : openSliderOverlayState,
            onToggle: () => setOpenSliderOverlayState(!openSliderOverlayState),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: wp.i18n.__("Accent-image main parent", "awp"),
              checked: !!attributes.isOverlaySlider
              // checked={false}
              ,
              onChange: () => {
                setAttributes({
                  isOverlaySlider: !attributes.isOverlaySlider
                }), setOpenSliderOverlayState(true);
              }
            }), renderExtraOverlayOptions()]
          })]
        }), slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide ") + (index + 1),
          initialOpen: openPanelIndex === index,
          opened: openPanelIndex === index // opened works for toggle
          ,
          onToggle: () => togglePanel(index),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title"),
            value: slide.title,
            onChange: value => updateSlide(index, "title", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subtitle"),
            value: slide.subtitle,
            onChange: value => updateSlide(index, "subtitle", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link"),
            value: slide.link,
            onChange: value => updateSlide(index, "link", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isDestructive: true,
            onClick: () => removeSlide(index),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Slide")
          })]
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Slide"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: addSlide,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Slide")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        ...blockProps,
        className: (topPosition ? "top-" + topPosition : "") + (isOverlaySlider ? " position-absolute" : "") + " slick-slider-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: sliderId + " slick-track",
          children: slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col slick-slide",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "col-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "has-helvetica-neue-font-family has-medium-font-size m-0",
                children: slide.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "has-helvetica-neue-font-family",
                children: slide.subtitle || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subtitle")
              })]
            }), slide.link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: slide.link,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Read More")
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "btn-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "prev-btn"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "next-btn"
          })]
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      slides,
      sliderId,
      isOverlaySlider,
      topPosition
    } = attributes;
    return (
      /*#__PURE__*/
      /****
       *  add some styles for fe
       ****/
      // <div className="slick-slider-wrapper">
      //   <div className={sliderId}>
      //     {slides.map((slide, index) => (
      //       <div key={index} className="col">
      //         <div className="col-item">
      //           <h2 className="has-helvetica-neue-font-family has-medium-font-size m-0">
      //             {slide.title}
      //           </h2>
      //           <p className="has-helvetica-neue-font-family">
      //             {slide.subtitle}
      //           </p>
      //           {slide.link && (
      //             <a
      //               href={slide.link}
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               {__("Read More")}
      //             </a>
      //           )}
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      //   <div className="btn-wrap">
      //     <button className="prev-btn"></button>
      //     <button className="next-btn"></button>
      //   </div>
      // </div>
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (topPosition ? "top-" + topPosition : "") + (isOverlaySlider ? " position-absolute" : "") + " slick-slider-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: sliderId,
          children: slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "col-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "has-helvetica-neue-font-family has-medium-font-size m-0",
                children: slide.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "has-helvetica-neue-font-family",
                children: slide.subtitle
              })]
            }), slide.link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: slide.link,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Read More")
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "btn-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "prev-btn"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "next-btn"
          })]
        })]
      })
    );
  }
});
// const { createHigherOrderComponent } = wp.compose;
const withCustomClassName = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (props.attributes.size) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
        ...props,
        className: "block-" + props.attributes.size
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockListBlock, {
        ...props
      });
    }
  };
}, "withClientIdClassName");
wp.hooks.addFilter("editor.BlockListBlock", "my-plugin/with-client-id-class-name", withCustomClassName);
/******/ })()
;
//# sourceMappingURL=custom-slider.js.map