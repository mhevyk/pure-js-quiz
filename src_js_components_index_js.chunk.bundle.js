"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkquiz_game_new"] = self["webpackChunkquiz_game_new"] || []).push([["src_js_components_index_js"],{

/***/ "./src/js/components/app-existance-date-range.js":
/*!*******************************************************!*\
  !*** ./src/js/components/app-existance-date-range.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFooterYearRange\": () => (/* binding */ initFooterYearRange)\n/* harmony export */ });\nfunction initFooterYearRange() {\r\n    const yearContainer = document.querySelector('[data-app-existance-period]');\r\n    const developmentStartYear = 2019;\r\n    const currentYear = new Date().getFullYear();\r\n    \r\n    const dateTags = [developmentStartYear, currentYear].map(\r\n        year => `<time datetime=\"${year}\">${year}</time>`\r\n    );\r\n    yearContainer.innerHTML = dateTags.join('-');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/app-existance-date-range.js?");

/***/ }),

/***/ "./src/js/components/arrow.js":
/*!************************************!*\
  !*** ./src/js/components/arrow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backArrows\": () => (/* binding */ backArrows),\n/* harmony export */   \"initArrows\": () => (/* binding */ initArrows)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n/* harmony import */ var _navigation_page_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/page-navigator */ \"./src/js/navigation/page-navigator.js\");\n\r\n\r\n\r\nconst arrowsPanel = document.querySelector('.nav__panel');\r\nconst backArrows = document.querySelectorAll('[data-arrow-back]');\r\n\r\nfunction arrowUpClickHandler() {\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scrollPage)('top', { behavior: 'smooth' });\r\n}\r\n\r\nfunction arrowDownClickHandler() {\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scrollPage)('bottom', { behavior: 'smooth' });\r\n}\r\n\r\nfunction arrowBackClickHandler() {\r\n    _navigation_page_navigator__WEBPACK_IMPORTED_MODULE_1__.pageNavigator.goToPreviousPage();\r\n}\r\n\r\nfunction scrollHandler() {\r\n    const currentScroll = window.scrollY;\r\n    if (currentScroll >= 300) {\r\n        arrowsPanel.classList.remove('hidden');\r\n    } else {\r\n        arrowsPanel.classList.add('hidden');\r\n    }\r\n}\r\n\r\nfunction initBackArrows() {\r\n    backArrows.forEach(arrow => {\r\n        arrow.addEventListener('click', arrowBackClickHandler);\r\n    });\r\n}\r\n\r\nfunction initArrows() {\r\n    const scrollUpArrow = document.querySelector('[data-arrow-up]');\r\n    const downArrow = document.querySelector('[data-arrow-down]');\r\n    \r\n    scrollUpArrow.addEventListener('click', arrowUpClickHandler);\r\n    downArrow.addEventListener('click', arrowDownClickHandler);\r\n    document.addEventListener('scroll', scrollHandler);\r\n    initBackArrows();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/arrow.js?");

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initComponents\": () => (/* binding */ initComponents)\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/js/components/arrow.js\");\n/* harmony import */ var _range_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range-input */ \"./src/js/components/range-input.js\");\n/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ \"./src/js/components/switch.js\");\n/* harmony import */ var _app_existance_date_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-existance-date-range */ \"./src/js/components/app-existance-date-range.js\");\n\r\n\r\n\r\n\r\n\r\nfunction initComponents() {\r\n    (0,_arrow__WEBPACK_IMPORTED_MODULE_0__.initArrows)();\r\n    (0,_range_input__WEBPACK_IMPORTED_MODULE_1__.initAllRangeInputs)();\r\n    (0,_switch__WEBPACK_IMPORTED_MODULE_2__.initSwitchers)();\r\n    (0,_switch__WEBPACK_IMPORTED_MODULE_2__.initShowGroupsSwitcher)();\r\n    (0,_app_existance_date_range__WEBPACK_IMPORTED_MODULE_3__.initFooterYearRange)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/index.js?");

/***/ }),

/***/ "./src/js/components/switch.js":
/*!*************************************!*\
  !*** ./src/js/components/switch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initShowGroupsSwitcher\": () => (/* binding */ initShowGroupsSwitcher),\n/* harmony export */   \"initSwitchers\": () => (/* binding */ initSwitchers)\n/* harmony export */ });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options */ \"./src/js/options.js\");\n\r\n\r\n\r\nfunction changeHandler(event) {\r\n    const { checked, dataset } = event.target;\r\n    const { option } = dataset;\r\n    _options__WEBPACK_IMPORTED_MODULE_1__.options[option] = checked;\r\n    (0,_options__WEBPACK_IMPORTED_MODULE_1__.saveOptions)();\r\n}\r\n\r\nfunction showGroupsChangeHandler() {\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.print();\r\n}\r\n\r\nfunction initShowGroupsSwitcher() {\r\n    const checkbox = document.querySelector('#show-groups');\r\n    checkbox.addEventListener('change', showGroupsChangeHandler);\r\n}\r\n\r\nfunction initSwitchers() {\r\n    const checkboxes = document.querySelectorAll('input[type=checkbox]');\r\n    checkboxes.forEach(checkbox => checkbox.addEventListener('change', changeHandler));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/switch.js?");

/***/ }),

/***/ "./src/js/navigation/page-navigator.js":
/*!*********************************************!*\
  !*** ./src/js/navigation/page-navigator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"pageNavigator\": () => (/* binding */ pageNavigator)\n/* harmony export */ });\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ \"./src/js/navigation/stack.js\");\n/* harmony import */ var _popups_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popups/dialog */ \"./src/js/popups/dialog.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/arrow */ \"./src/js/components/arrow.js\");\n\r\n\r\n\r\n\r\n\r\nconst backButton = _components_arrow__WEBPACK_IMPORTED_MODULE_3__.backArrows[0];\r\n\r\nconst config = {\r\n    canGoBack: true\r\n};\r\n\r\nclass PageNavigator {\r\n    #pageStack;\r\n    #pagesToSkipWhenGoingBack;\r\n\r\n    constructor(startPage) {\r\n        this.#pageStack = new _stack__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startPage);\r\n        this.#pagesToSkipWhenGoingBack = ['quiz-input-answer'];\r\n\r\n        const navigateHandler = (event) => {\r\n            const navigationButton = event.target.closest('[data-page-button]');\r\n            if (!navigationButton) {\r\n                return;\r\n            }\r\n            \r\n            _popups_dialog__WEBPACK_IMPORTED_MODULE_1__.dialog.isOpen() && _popups_dialog__WEBPACK_IMPORTED_MODULE_1__.dialog.close();\r\n            this.goToPage(navigationButton.dataset.pageButton);\r\n        };\r\n        document.addEventListener('click', navigateHandler);\r\n    }\r\n\r\n    setPageTitle = (title) => {\r\n        const titleContainer = document.querySelector('[data-main-title]');\r\n        titleContainer.textContent = title;\r\n    };\r\n\r\n    setPageSubtitle = (subtitle) => {\r\n        const defaultSubtitle = 'найкраща програма для якісного вивчення слів';\r\n        const titleContainer = document.querySelector('[data-main-subtitle]');\r\n        titleContainer.textContent = subtitle || defaultSubtitle;\r\n    };\r\n\r\n    showBackButton = (page) => {\r\n        if (page !== 'main') {\r\n            backButton.classList.remove('hidden');\r\n        } else {\r\n            backButton.classList.add('hidden');\r\n        }\r\n    };\r\n\r\n    showOnlyPage = (newPage) => {\r\n        const pages = document.querySelectorAll('.page');\r\n        pages.forEach(page => {\r\n            if (page.dataset.page === newPage) {\r\n                page.classList.add('open');\r\n                this.setPageTitle(page.dataset.title);\r\n                this.setPageSubtitle(page.dataset.subtitle);\r\n            } else {\r\n                page.classList.remove('open');\r\n            }\r\n        });\r\n    };\r\n\r\n    goToPage = (page) => {\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scrollPage)('top');\r\n        this.showBackButton(page);\r\n        this.showOnlyPage(page);\r\n\r\n        if (this.#pageStack.top() !== page) {\r\n            this.#pageStack.push(page);\r\n        }\r\n    };\r\n\r\n    goToPreviousPage = () => {\r\n        if (!config.canGoBack) {\r\n            return;\r\n        }\r\n\r\n        const pages = this.#pageStack;\r\n        pages.pop();\r\n\r\n        if (this.#pagesToSkipWhenGoingBack.includes(pages.top())) {\r\n            pages.pop();\r\n        }\r\n\r\n        if (!pages.isEmpty()) {\r\n            this.goToPage(pages.top());\r\n        }\r\n    };\r\n}\r\n\r\nconst pageNavigator = new PageNavigator('main');\n\n//# sourceURL=webpack://quiz-game-new/./src/js/navigation/page-navigator.js?");

/***/ }),

/***/ "./src/js/navigation/stack.js":
/*!************************************!*\
  !*** ./src/js/navigation/stack.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Stack)\n/* harmony export */ });\nclass Stack {\r\n    #data = [];\r\n    \r\n    constructor(initialValue) {\r\n        this.#data.push(initialValue);\r\n    }\r\n\r\n    isEmpty() {\r\n        return this.#data.length === 0;\r\n    }\r\n    \r\n    push(value) {\r\n        this.#data.push(value);\r\n    }\r\n\r\n    pop() {\r\n        return this.#data.pop();\r\n    }\r\n\r\n    top() {\r\n        return this.#data.at(-1);\r\n    }\r\n}\n\n//# sourceURL=webpack://quiz-game-new/./src/js/navigation/stack.js?");

/***/ })

}]);