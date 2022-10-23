/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _view_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/HeaderView/HeaderView */ \"./src/view/HeaderView/HeaderView.js\");\n/* harmony import */ var _view_FooterTopView_FooterTopView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/FooterTopView/FooterTopView */ \"./src/view/FooterTopView/FooterTopView.js\");\n/* harmony import */ var _view_FooterLineView_FooterLineView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/FooterLineView/FooterLineView */ \"./src/view/FooterLineView/FooterLineView.js\");\n/* harmony import */ var _view_FooterBottomView_FooterBottomView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/FooterBottomView/FooterBottomView */ \"./src/view/FooterBottomView/FooterBottomView.js\");\n/* harmony import */ var _view_HeroBlockView_HeroBlockView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/HeroBlockView/HeroBlockView */ \"./src/view/HeroBlockView/HeroBlockView.js\");\n/* harmony import */ var _view_CardsView_CardsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/CardsView/CardsView */ \"./src/view/CardsView/CardsView.js\");\n/* harmony import */ var _view_BelovedClientView_BelovedClientView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/BelovedClientView/BelovedClientView */ \"./src/view/BelovedClientView/BelovedClientView.js\");\n\n\n\n\n\n\n\n\n\nconst cards = [\n  {\n    src: './images/cards/card-1.svg',\n    title: 'Bring Technology To Your Comfrotable Home',\n    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',\n    className: 'cards-view__image',\n  },\n  {\n    src: './images/cards/card-2.svg',\n    title: 'Make Your business To Be Better Famous In Internet',\n    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',\n  },\n  {\n    src: './images/cards/card-3.svg',\n    title: 'Build Your Digital Product That Suitable For Your Need',\n    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',\n  },\n];\n\nconst body = document.querySelector('.body');\nconst main = document.querySelector('.main');\nconst footer = document.querySelector('.footer');\n\nconst Header = new _view_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(body, Header, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);\n\nconst FooterTop = new _view_FooterTopView_FooterTopView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(footer, FooterTop, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\nFooterTop.renderButton();\n\nconst FooterLine = new _view_FooterLineView_FooterLineView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(footer, FooterLine, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n\nconst FooterBottom = new _view_FooterBottomView_FooterBottomView__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(footer, FooterBottom, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n\nconst HeroBlock = new _view_HeroBlockView_HeroBlockView__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(main, HeroBlock, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\nHeroBlock.renderButton();\n\nconst Cards = new _view_CardsView_CardsView__WEBPACK_IMPORTED_MODULE_6__[\"default\"](cards);\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(main, Cards, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\nCards.renderCards();\n\nconst BelovedClient = new _view_BelovedClientView_BelovedClientView__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(main, BelovedClient, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\nBelovedClient.renderTable();\n\n\n//# sourceURL=webpack://de-landingpage/./src/index.js?");

/***/ }),

/***/ "./src/utils/clsx.js":
/*!***************************!*\
  !*** ./src/utils/clsx.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction clsx(...arg) {\n  return arg.filter((value) => value).join(' ');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);\n\n\n//# sourceURL=webpack://de-landingpage/./src/utils/clsx.js?");

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderPosition\": () => (/* binding */ RenderPosition),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"replace\": () => (/* binding */ replace)\n/* harmony export */ });\n/* harmony import */ var _view_AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/AbstractView */ \"./src/view/AbstractView.js\");\n\n\nconst RenderPosition = {\n  BEFOREBEGIN: 'beforebegin',\n  AFTERBEGIN: 'afterbegin',\n  BEFOREEND: 'beforeend',\n  AFTEREND: 'afterend',\n};\n\nfunction render(container, element, place) {\n  const parent = container instanceof _view_AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? container.element : container;\n  const child = element instanceof _view_AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? element.element : element;\n\n  switch (place) {\n    case RenderPosition.BEFOREBEGIN:\n      parent.before(child);\n      break;\n    case RenderPosition.AFTERBEGIN:\n      parent.prepend(child);\n      break;\n    case RenderPosition.BEFOREEND:\n      parent.append(child);\n      break;\n    case RenderPosition.AFTEREND:\n      parent.after(child);\n      break;\n  }\n}\n\nfunction createElement(template) {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n\n  return newElement.firstChild;\n}\n\nfunction replace(newElement, oldElement) {\n  if (newElement === null || oldElement === null) {\n    throw new Error('Can\\'t replace unexisting elements');\n  }\n\n  const newChild = newElement instanceof _view_AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? newElement.element : newElement;\n  const oldChild = oldElement instanceof _view_AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? oldElement.element : oldElement;\n\n  const parent = oldChild.parentElement;\n\n  if (parent === null) {\n    throw new Error('Parent element doesn\\'t exist');\n  }\n\n  parent.replaceChild(newChild, oldChild);\n}\n\n\n//# sourceURL=webpack://de-landingpage/./src/utils/render.js?");

/***/ }),

/***/ "./src/view/AbstractView.js":
/*!**********************************!*\
  !*** ./src/view/AbstractView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ \"./src/utils/render.js\");\n\n\nclass AbstractView {\n  #element = null;\n\n  _callback = {};\n\n  constructor() {\n    if (new.target === AbstractView) {\n      throw new Error('Can\\'t instantiate Abstract class, only concrete one.');\n    }\n  }\n\n  get element() {\n    if (!this.#element) {\n      this.#element = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template);\n    }\n\n    return this.#element;\n  }\n\n  get template() {\n    throw new Error('Abstract method not implemented: get template');\n  }\n\n  removeElement() {\n    this.#element = null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/AbstractView.js?");

/***/ }),

/***/ "./src/view/BelovedClientView/BelovedClientView.js":
/*!*********************************************************!*\
  !*** ./src/view/BelovedClientView/BelovedClientView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _CellView_CellView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CellView/CellView */ \"./src/view/CellView/CellView.js\");\n\n\n\n\nfunction createBelovedClient() {\n  return (\n    `<section class=\"beloved-client-view\">\n      <div class=\"inner-layout beloved-client-view__inner\">\n        <div class=\"beloved-client-view__header\">\n          <h2 class=\"beloved-client-view__title\">Our Beloved Client</h2>\n          <p class=\"beloved-client-view__text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n        </div>\n\n        <div class=\"beloved-client-view__client-table\">\n          <div class=\"beloved-client-view__grid\"></div>\n        </div>\n      </div>\n    </section>`\n  );\n}\n\nclass BelovedClientView extends _AbstractView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  get template() {\n    return createBelovedClient();\n  }\n\n  renderTable = () => {\n    const clientTable = this.element.querySelector('.beloved-client-view__grid');\n    const count = 8;\n\n    for (let i = 0; i < count; i++) {\n      if (i + 1 === count) {\n        const cell = new _CellView_CellView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('More Client');\n        (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(clientTable, cell, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n\n        break;\n      }\n\n      const cell = new _CellView_CellView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`LOGO CLIENT ${i + 1}`);\n      (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(clientTable, cell, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BelovedClientView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/BelovedClientView/BelovedClientView.js?");

/***/ }),

/***/ "./src/view/ButtonView/ButtonView.js":
/*!*******************************************!*\
  !*** ./src/view/ButtonView/ButtonView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createButton(text) {\n  return (\n    `<button class=\"button-view\">\n      ${text}\n    </button>`\n  );\n}\n\nclass ButtonView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  #text = '';\n\n  constructor(text) {\n    super();\n\n    this.#text = text;\n  }\n\n  get template() {\n    return createButton(this.#text);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/ButtonView/ButtonView.js?");

/***/ }),

/***/ "./src/view/CardView/CardView.js":
/*!***************************************!*\
  !*** ./src/view/CardView/CardView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/clsx */ \"./src/utils/clsx.js\");\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _LinkView_LinkView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LinkView/LinkView */ \"./src/view/LinkView/LinkView.js\");\n\n\n\n\n\nfunction createCard({\n  src, title, text, className,\n}) {\n  return (\n    `<div class=\"card-view\">\n      <img class=\"${(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('card-view__image', className)}\" src=\"${src}\" alt=\"${title}\" />\n      <h3 class=\"card-view__title\">${title}</h3>\n      <p class=\"card-view__text\">${text}</p>\n      <a></a>\n    </div>`\n  );\n}\n\nclass CardView extends _AbstractView__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  #src = '';\n\n  #title = '';\n\n  #text = '';\n\n  #className = '';\n\n  constructor({\n    src, title, text, className = '',\n  } = {}) {\n    super();\n\n    this.#src = src;\n    this.#title = title;\n    this.#text = text;\n    this.#className = className;\n  }\n\n  get template() {\n    return createCard({\n      src: this.#src,\n      title: this.#title,\n      text: this.#text,\n      className: this.#className,\n    });\n  }\n\n  renderLink = () => {\n    const link = this.element.querySelector('a');\n    const Link = new _LinkView_LinkView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.replace)(Link, link);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/CardView/CardView.js?");

/***/ }),

/***/ "./src/view/CardsView/CardsView.js":
/*!*****************************************!*\
  !*** ./src/view/CardsView/CardsView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _CardView_CardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardView/CardView */ \"./src/view/CardView/CardView.js\");\n\n\n\n\nfunction createCards() {\n  return (\n    `<section class=\"inner-layout cards-view\">\n      <h2 class=\"cards-view__title\">\n        What we do to help\n        our client grow in\n        digital era,\n      </h2>\n\n      <div class=\"cards-view__items\"></div>\n    </section>`\n  );\n}\n\nclass CardsView extends _AbstractView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  #cards = [];\n\n  constructor(cards) {\n    super();\n\n    this.#cards = cards;\n  }\n\n  get template() {\n    return createCards();\n  }\n\n  renderCards = () => {\n    const cardsElement = this.element.querySelector('.cards-view__items');\n\n    this.#cards.forEach((card) => {\n      const Card = new _CardView_CardView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](card);\n\n      (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(cardsElement, Card, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n      Card.renderLink();\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardsView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/CardsView/CardsView.js?");

/***/ }),

/***/ "./src/view/CellView/CellView.js":
/*!***************************************!*\
  !*** ./src/view/CellView/CellView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createCell(text) {\n  return (\n    `<div class=\"cell-view\">${text}</div>`\n  );\n}\n\nclass CellView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  #text = '';\n\n  constructor(text) {\n    super();\n\n    this.#text = text;\n  }\n\n  get template() {\n    return createCell(this.#text);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CellView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/CellView/CellView.js?");

/***/ }),

/***/ "./src/view/FooterBottomView/FooterBottomView.js":
/*!*******************************************************!*\
  !*** ./src/view/FooterBottomView/FooterBottomView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createFooterBottom() {\n  return (\n    `<div class=\"inner-layout footer-bottom-view\">\n      <div class=\"footer-bottom-view__contact\">\n        <div class=\"footer-bottom-view__afrianska\">\n          <div class=\"footer-bottom-view__header\">\n            <img src=\"./images/logo-light.svg\" alt=\"logo\" />\n            <h3>Afrianska</h3>\n          </div>\n\n          <div class=\"footer-bottom-view__info\">\n            <span>A.</span>\n            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>\n          </div>\n\n          <div class=\"footer-bottom-view__info\">\n            <span>T.</span>\n            <span>+62-812-7313-4321</span>\n          </div>\n\n          <div class=\"footer-bottom-view__info\">\n            <span>E</span>\n            <span>hello.afrian@gmail.com</span>\n          </div>\n        </div>\n\n        <div class=\"footer-bottom-view__about-us\">\n          <h3 class=\"footer-bottom-view__title\">About US</h3>\n\n          <a class=\"footer-bottom-view__link\">About</a>\n          <a class=\"footer-bottom-view__link\">What We Do</a>\n          <a class=\"footer-bottom-view__link\">Project</a>\n          <a class=\"footer-bottom-view__link\">How It Work With Us</a>\n        </div>\n\n        <div class=\"footer-bottom-view__follow-us\">\n          <h3 class=\"footer-bottom-view__title\">Follow US</h3>\n\n          <a class=\"footer-bottom-view__link\">Instagram</a>\n          <a class=\"footer-bottom-view__link\">Facebook</a>\n          <a class=\"footer-bottom-view__link\">LinkedIn</a>\n          <a class=\"footer-bottom-view__link\">Youtube</a>\n        </div>\n      </div>\n\n      <span class=\"footer-bottom-view__policy\">\n        2019 © Afrianska. All rights reserved.\n      </span>\n    </div>`\n  );\n}\n\nclass FooterBottomView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get template() {\n    return createFooterBottom();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBottomView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/FooterBottomView/FooterBottomView.js?");

/***/ }),

/***/ "./src/view/FooterLineView/FooterLineView.js":
/*!***************************************************!*\
  !*** ./src/view/FooterLineView/FooterLineView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createLine() {\n  return (\n    '<div class=\"footer-line-view\"></div>'\n  );\n}\n\nclass FooterLineView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get template() {\n    return createLine();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterLineView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/FooterLineView/FooterLineView.js?");

/***/ }),

/***/ "./src/view/FooterTopView/FooterTopView.js":
/*!*************************************************!*\
  !*** ./src/view/FooterTopView/FooterTopView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _ButtonView_ButtonView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonView/ButtonView */ \"./src/view/ButtonView/ButtonView.js\");\n/* harmony import */ var _ModalView_ModalView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalView/ModalView */ \"./src/view/ModalView/ModalView.js\");\n\n\n\n\n\nfunction createFooterTop() {\n  return (\n    `<div class=\"inner-layout footer-top-view\">\n      <div class=\"footer-top-view__content\">\n        <h2 class=\"footer-top-view__title\">Intersted to woek with our team?</h2>\n        <p class=\"footer-top-view__text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n      </div>\n\n      <button></button>\n    </div>`\n  );\n}\n\nclass FooterTopView extends _AbstractView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  #button = null;\n\n  get template() {\n    return createFooterTop();\n  }\n\n  renderButton = () => {\n    const button = this.element.querySelector('button');\n    const Button = new _ButtonView_ButtonView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Let’s Talk');\n    (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.replace)(Button, button);\n\n    Button.element.addEventListener('click', this.#onClickOpenModal);\n\n    this.#button = Button;\n  };\n\n  #onClickOpenModal = () => {\n    const Modal = new _ModalView_ModalView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    const main = document.querySelector('.main');\n\n    (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(main, Modal, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);\n\n    Modal.init();\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterTopView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/FooterTopView/FooterTopView.js?");

/***/ }),

/***/ "./src/view/HeaderView/HeaderView.js":
/*!*******************************************!*\
  !*** ./src/view/HeaderView/HeaderView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createHeader() {\n  return (\n    `<header class=\"layout header-view\">\n      <img src=\"./images/logo.svg\" alt=\"logo\" />\n\n      <img src=\"./images/burger.svg\" alt=\"burger\" />\n    </header>`\n  );\n}\n\nclass HeaderView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get template() {\n    return createHeader();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/HeaderView/HeaderView.js?");

/***/ }),

/***/ "./src/view/HeroBlockView/HeroBlockView.js":
/*!*************************************************!*\
  !*** ./src/view/HeroBlockView/HeroBlockView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _ButtonView_ButtonView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonView/ButtonView */ \"./src/view/ButtonView/ButtonView.js\");\n\n\n\n\nfunction createHeroBlock() {\n  return (\n    `<section class=\"hero-block-view\">\n      <div class=\"hero-block-view__content\">\n        <h1 class=\"hero-block-view__title\">\n          New Automation Tool for Your Home\n        </h1>\n        <p class=\"hero-block-view__text\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus\n          tristique vulputate ultrices ut mauris tellus at. Posuere\n          sollicitudin odio tellus elit.\n        </p>\n\n        <button></button>\n      </div>\n\n      <div class=\"hero-block-view__image\">\n        <img src=\"./images/hero-block.svg\" alt=\"burger\" />\n      </div>\n    </section>`\n  );\n}\n\nclass HeroBlockView extends _AbstractView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  get template() {\n    return createHeroBlock();\n  }\n\n  renderButton = () => {\n    const button = this.element.querySelector('button');\n    const Button = new _ButtonView_ButtonView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('See Our Project');\n    (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.replace)(Button, button);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBlockView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/HeroBlockView/HeroBlockView.js?");

/***/ }),

/***/ "./src/view/LinkView/LinkView.js":
/*!***************************************!*\
  !*** ./src/view/LinkView/LinkView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createLink() {\n  return (\n    `<a class=\"link-view\">\n      <span class=\"link-view__text\">Learn more</span>\n      <img class=\"link-view__image\" src=\"./images/arrow.svg\" alt=\"arrow\" />\n    </a>`\n  );\n}\n\nclass LinkView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get template() {\n    return createLink();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/LinkView/LinkView.js?");

/***/ }),

/***/ "./src/view/ModalView/ModalView.js":
/*!*****************************************!*\
  !*** ./src/view/ModalView/ModalView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n/* harmony import */ var _PopupOkView_PopupOkView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupOkView/PopupOkView */ \"./src/view/PopupOkView/PopupOkView.js\");\n\n\n\n\nfunction createModal() {\n  return (\n    `<div class=\"modal-view\">\n      <button class=\"modal-view__close\">\n        <img src=\"./images/close.svg\" alt=\"close\" />\n      </button>\n\n      <h2 class=\"modal-view__title\">SEND US MESSAGE</h2>\n\n      <form name=\"form\" class=\"modal-view__form\">\n        <label class=\"modal-view__label\">Full Name</label>\n        <input name=\"fullName\" class=\"modal-view__input\" placeholder=\"Your Name\">\n\n        <label class=\"modal-view__label\">Email</label>\n        <input name=\"email\" class=\"modal-view__input\" placeholder=\"Your Email\">\n\n        <label class=\"modal-view__label\">Message</label>\n        <textarea name=\"message\" class=\"modal-view__textarea\" placeholder=\"Your Message\"></textarea>\n\n        <button name=\"submit\" class=\"button-view\">SUBMIT</button>\n      </form>\n    </div>`\n  );\n}\n\nclass ModalView extends _AbstractView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  get template() {\n    return createModal();\n  }\n\n  init = () => {\n    this.#initClose();\n    this.#initSubmit();\n  };\n\n  #initClose = () => {\n    const closeButton = this.element.querySelector('.modal-view__close');\n\n    closeButton.addEventListener('click', this.#onCloseModal);\n\n    setTimeout(() => {\n      document.addEventListener('click', this.#onCloseModalOutClick);\n    }, 1);\n\n    document.addEventListener('keydown', this.#onKeydownModal);\n  };\n\n  #initSubmit = () => {\n    const form = this.element.querySelector('[name=\"form\"]');\n\n    form.addEventListener('submit', this.#onSubmit);\n  };\n\n  #onCloseModal = () => {\n    this.element.remove();\n    document.removeEventListener('click', this.#onCloseModalOutClick);\n    document.removeEventListener('keydown', this.#onKeydownModal);\n  };\n\n  #onCloseModalOutClick = (e) => {\n    const isModal = e.composedPath().includes(this.element);\n\n    if (!isModal) {\n      this.#onCloseModal();\n    }\n  };\n\n  #onKeydownModal = (e) => {\n    const isClickedESC = e.keyCode === 27;\n    const isClickedEnter = e.keyCode === 13;\n\n    if (isClickedESC) {\n      this.#onCloseModal();\n    }\n\n    if (isClickedEnter) {\n      const buttonSubmit = this.element.querySelector('[name=\"submit\"]');\n      buttonSubmit.click();\n    }\n  };\n\n  #onSubmit = (e) => {\n    e.preventDefault();\n\n    const form = e.target;\n    const fullName = form.elements.fullName.value;\n    const email = form.elements.email.value;\n    const message = form.elements.message.value;\n\n    const values = { fullName, email, message };\n\n    Object.keys(values).forEach((field) => this.#removeErrorForField(field));\n\n    const isNoRequiredFields = this.#checkRequiredFields(values);\n\n    if (isNoRequiredFields) {\n      const main = document.querySelector('.main');\n      const PopupOk = new _PopupOkView_PopupOkView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Your message successfully sent');\n\n      (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(main, PopupOk, _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);\n      PopupOk.removeAfterFiveSeconds();\n\n      this.#onCloseModal();\n    }\n  };\n\n  #checkRequiredFields = (values) => {\n    const errorFields = [];\n\n    Object.entries(values).forEach(([key, value]) => {\n      if (!value) {\n        errorFields.push(key);\n      }\n    });\n\n    const isNoRequiredFields = !errorFields.length;\n\n    if (!isNoRequiredFields) {\n      errorFields.forEach((field) => this.#addErrorForField(field));\n    }\n\n    return isNoRequiredFields;\n  };\n\n  #addErrorForField = (field) => {\n    const fieldElement = this.element.querySelector(`[name=\"${field}\"]`);\n\n    fieldElement.classList.add('modal-view__error-field');\n  };\n\n  #removeErrorForField = (field) => {\n    const fieldElement = this.element.querySelector(`[name=\"${field}\"]`);\n\n    fieldElement.classList.remove('modal-view__error-field');\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/ModalView/ModalView.js?");

/***/ }),

/***/ "./src/view/PopupOkView/PopupOkView.js":
/*!*********************************************!*\
  !*** ./src/view/PopupOkView/PopupOkView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractView */ \"./src/view/AbstractView.js\");\n\n\nfunction createPopupOk(text) {\n  return (\n    `<div class=\"popup-ok-view\">\n      ${text}\n    </div>`\n  );\n}\n\nclass PopupOkView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  #text = '';\n\n  constructor(text) {\n    super();\n\n    this.#text = text;\n  }\n\n  get template() {\n    return createPopupOk(this.#text);\n  }\n\n  removeAfterFiveSeconds = () => {\n    setTimeout(() => {\n      this.element.remove();\n    }, 5000);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupOkView);\n\n\n//# sourceURL=webpack://de-landingpage/./src/view/PopupOkView/PopupOkView.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack://de-landingpage/./src/styles/index.scss?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/index.scss");
/******/ 	
/******/ })()
;