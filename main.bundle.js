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

/***/ "./src/js/components/placeholder.js":
/*!******************************************!*\
  !*** ./src/js/components/placeholder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updatePlaceholders\": () => (/* binding */ updatePlaceholders)\n/* harmony export */ });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _forms_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/form */ \"./src/js/forms/form.js\");\n\r\n\r\n\r\nconst placeholders = [\r\n    //quiz-input-answer placeholder\r\n    {\r\n        show: () => {\r\n            _forms_form__WEBPACK_IMPORTED_MODULE_1__.FORM_QUIZ_INPUT_ANSWER_OPTIONS.classList.add('hidden');\r\n\r\n            const placeholder = _forms_form__WEBPACK_IMPORTED_MODULE_1__.FORM_QUIZ_INPUT_ANSWER_OPTIONS.parentElement.querySelector('.placeholder');\r\n            placeholder.classList.remove('hidden');\r\n        },\r\n        hide: () => {\r\n            _forms_form__WEBPACK_IMPORTED_MODULE_1__.FORM_QUIZ_INPUT_ANSWER_OPTIONS.classList.remove('hidden');\r\n\r\n            const placeholder = _forms_form__WEBPACK_IMPORTED_MODULE_1__.FORM_QUIZ_INPUT_ANSWER_OPTIONS.parentElement.querySelector('.placeholder');\r\n            placeholder.classList.add('hidden');\r\n        }\r\n    },\r\n    //vocabulary placeholder\r\n    {\r\n        show: () => {\r\n            _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabularyContainer.innerHTML = `\r\n                <div class='placeholder vocabulary__placeholder'>\r\n                    Додайте слова до словника, щоб почати їх вивчення!\r\n                </div>\r\n            `;\r\n        },\r\n        hide: () => {\r\n            _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabularyContainer.innerHTML = '';\r\n        }\r\n    }\r\n];\r\n\r\nfunction updatePlaceholders(status) {\r\n    for (const placeholder of placeholders) {\r\n        placeholder[status]();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/placeholder.js?");

/***/ }),

/***/ "./src/js/components/range-input.js":
/*!******************************************!*\
  !*** ./src/js/components/range-input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initAllRangeInputs\": () => (/* binding */ initAllRangeInputs),\n/* harmony export */   \"updateVocabularyRange\": () => (/* binding */ updateVocabularyRange)\n/* harmony export */ });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n/* all ranges */\r\nfunction inputChangeHandler(event) {\r\n    const rangeInput = event.target;\r\n    const rangeOutput = rangeInput.nextElementSibling;\r\n    rangeOutput.textContent = rangeInput.value;\r\n}\r\n\r\nfunction initRangeInput(input) {\r\n    input.addEventListener('input', inputChangeHandler);\r\n}\r\n\r\nfunction initAllRangeInputs () {\r\n    const rangeInputs = document.querySelectorAll('.range-input');\r\n    rangeInputs.forEach(input => initRangeInput(input));\r\n}\r\n\r\n/* range, which limit depends on vocabulary size  */\r\nconst quizInputAnswerRange = document.querySelector('[data-range=vocabulary]');\r\n\r\nfunction updateVocabularyRange(recordsCount, value) {\r\n    const output = quizInputAnswerRange.nextElementSibling;\r\n    const max = recordsCount || _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.recordsCount;\r\n    const rangeValue = value || (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(max / 3, 1);\r\n\r\n    quizInputAnswerRange.max = max;\r\n    quizInputAnswerRange.value = rangeValue;\r\n    output.textContent = rangeValue;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/components/range-input.js?");

/***/ }),

/***/ "./src/js/forms/feedback.js":
/*!**********************************!*\
  !*** ./src/js/forms/feedback.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FEEDBACKS_ADD_GROUP\": () => (/* binding */ FEEDBACKS_ADD_GROUP),\n/* harmony export */   \"FEEDBACKS_COMPARE_INPUTS_ADD_ONE\": () => (/* binding */ FEEDBACKS_COMPARE_INPUTS_ADD_ONE),\n/* harmony export */   \"FEEDBACKS_FILE_UPLOADING\": () => (/* binding */ FEEDBACKS_FILE_UPLOADING),\n/* harmony export */   \"FEEDBACKS_FORM_DELETE_ONE\": () => (/* binding */ FEEDBACKS_FORM_DELETE_ONE),\n/* harmony export */   \"resetFeedbacks\": () => (/* binding */ resetFeedbacks),\n/* harmony export */   \"setInvalidFeedback\": () => (/* binding */ setInvalidFeedback),\n/* harmony export */   \"setValidFeedback\": () => (/* binding */ setValidFeedback)\n/* harmony export */ });\nconst FEEDBACKS_COMPARE_INPUTS_ADD_ONE = {\r\n    EMPTY_INPUT: (condition) => 'Введіть ' + (condition ? 'слово!' : 'переклад!'),\r\n    CONTAINS_COMMA: (condition) => condition\r\n        ? 'Слово не може містити кому!'\r\n        : 'Переклад не може містити кому. Записуйте кожен переклад в окремому полі!',\r\n    SAME_INPUT_VALUES: (condition) => (condition ? 'Слово та переклад' : 'Переклади') + ' співпадають!'\r\n};\r\n\r\nconst FEEDBACKS_ADD_GROUP = {\r\n    EMPTY_INPUT: 'Введіть назву розділу!',\r\n    GROUP_ALREADY_EXISTS: (group) => `Розділ <b>${group}</b> вже існує!`\r\n};\r\n\r\nconst FEEDBACKS_FILE_UPLOADING = {\r\n    LOAD_CANCELED: 'Завантаження файлів відмінено!',\r\n    SUCCESSFULL_LOAD: 'Файли були завантажені! Перегляньте деталі у випадаючому списку нижче!',\r\n    TEMPLATE_MISMATCH_ERROR: 'Жоден із завантажених файлів не відповідає <span class=\"link\" data-page-button=\"vocabulary-group-import-template\">шаблону</span>!'\r\n};\r\n\r\nconst FEEDBACKS_FORM_DELETE_ONE = {\r\n    INVALID_INPUT: 'Введіть коректний порядковий номер або слово!',\r\n    TOO_SMALL_GROUP_INDEX: 'Номер групи має бути більшим за 0!',\r\n    TOO_SMALL_WORD_INDEX: 'Порядковий номер слова має бути більшим за 0!',\r\n    GROUP_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> розділів, а введено розділ <b>${typedIndex}</b>!`,\r\n    WORD_INDEX_OUT_OF_GROUP_RANGE: (groupIndex, rangeLimit, typedIndex) => `У розділі <b>${groupIndex}</b> тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,\r\n    WORD_INDEX_OUT_OF_RANGE: (rangeLimit, typedIndex) => `У словнику тільки <b>${rangeLimit}</b> слів, а введено слово під номером <b>${typedIndex}</b>!`,\r\n    WORD_FOUND: ({word, translations}) => `Знайдено слово <b>${word}</b> з перекладами <b>${translations.join(', ')}</b>!`,\r\n    WORD_NOT_FOUND: 'Такого слова немає у словнику!'\r\n};\r\n\r\nconst setValidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {\r\n    input.setCustomValidity('');\r\n    if (feedback) {\r\n        containerThatIncludesFeedback.querySelector('.valid').innerHTML = feedback;\r\n    }\r\n};\r\n\r\nconst setInvalidFeedback = (input, feedback, containerThatIncludesFeedback = input.parentElement) => {\r\n    input.setCustomValidity(feedback);\r\n    if (feedback) {\r\n        containerThatIncludesFeedback.querySelector('.invalid').innerHTML = feedback;\r\n    }\r\n};\r\n\r\nconst resetFeedbacks = (form, feedbackSelector = '[data-default-feedback]') => {\r\n    const feedbacks = form.querySelectorAll(feedbackSelector);\r\n    feedbacks.forEach(feedback => feedback.textContent = feedback.dataset.defaultFeedback);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/forms/feedback.js?");

/***/ }),

/***/ "./src/js/forms/form.js":
/*!******************************!*\
  !*** ./src/js/forms/form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FORM_FILE_IMPORT\": () => (/* binding */ FORM_FILE_IMPORT),\n/* harmony export */   \"FORM_GROUP_ADD\": () => (/* binding */ FORM_GROUP_ADD),\n/* harmony export */   \"FORM_GROUP_DELETE\": () => (/* binding */ FORM_GROUP_DELETE),\n/* harmony export */   \"FORM_QUIZ_INPUT_ANSWER\": () => (/* binding */ FORM_QUIZ_INPUT_ANSWER),\n/* harmony export */   \"FORM_QUIZ_INPUT_ANSWER_OPTIONS\": () => (/* binding */ FORM_QUIZ_INPUT_ANSWER_OPTIONS),\n/* harmony export */   \"FORM_RECORD_ADD\": () => (/* binding */ FORM_RECORD_ADD),\n/* harmony export */   \"FORM_RECORD_DELETE\": () => (/* binding */ FORM_RECORD_DELETE),\n/* harmony export */   \"FORM_VOCABULARY_CLEAR\": () => (/* binding */ FORM_VOCABULARY_CLEAR),\n/* harmony export */   \"initFormsValidation\": () => (/* binding */ initFormsValidation)\n/* harmony export */ });\nconst FORM_QUIZ_INPUT_ANSWER_OPTIONS = document.querySelector('.form__quiz-input-answer-options');\r\nconst FORM_QUIZ_INPUT_ANSWER = document.querySelector('.form__quiz-input-answer');\r\nconst FORM_RECORD_ADD = document.querySelector('.form__add-single-word');\r\nconst FORM_RECORD_DELETE = document.querySelector('.form__delete-one');\r\nconst FORM_GROUP_ADD = document.querySelector('.form__add-group');\r\nconst FORM_GROUP_DELETE = document.querySelector('.form__delete-group');\r\nconst FORM_FILE_IMPORT = document.querySelector('.form__import-txt');\r\nconst FORM_VOCABULARY_CLEAR = document.querySelector('.form__vocabulary-clear');\r\n\r\nfunction addColorValidateHandler(form) {\r\n    form.addEventListener('submit', event => event.target.classList.add('validated'));\r\n}\r\n\r\nfunction addPreventDefaultHandler(form) {\r\n    form.addEventListener('submit', event => event.preventDefault());\r\n}\r\n\r\nfunction initFormsValidation() {\r\n    const forms = document.querySelectorAll('.form');\r\n    forms.forEach(form => {\r\n        const { colorValidate } = form.dataset;\r\n        if (colorValidate !== undefined) {\r\n            addColorValidateHandler(form);\r\n        }\r\n        addPreventDefaultHandler(form);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/forms/form.js?");

/***/ }),

/***/ "./src/js/forms/forms-vocabulary/record-actions/record-delete.js":
/*!***********************************************************************!*\
  !*** ./src/js/forms/forms-vocabulary/record-actions/record-delete.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterWords\": () => (/* binding */ filterWords),\n/* harmony export */   \"initFormDeleteOne\": () => (/* binding */ initFormDeleteOne)\n/* harmony export */ });\n/* harmony import */ var _render_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render-interface */ \"./src/js/render-interface.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../storage */ \"./src/js/storage.js\");\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form */ \"./src/js/forms/form.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst {\r\n    group: groupSelect,\r\n    word: wordSelect\r\n} = _form__WEBPACK_IMPORTED_MODULE_3__.FORM_RECORD_DELETE;\r\n\r\nfunction filterWords() {\r\n    const group = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValueFromSelect)(groupSelect);\r\n    (0,_render_interface__WEBPACK_IMPORTED_MODULE_0__.updateSelectsWithWords)(group);\r\n}\r\n\r\nfunction deleteRecordByWord(word) {\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_2__.vocabulary[\"delete\"](word);\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_2__.vocabulary.print();\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_2__.vocabulary.save();\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.resetForm)(_form__WEBPACK_IMPORTED_MODULE_3__.FORM_RECORD_DELETE);\r\n    filterWords();\r\n    (0,_render_interface__WEBPACK_IMPORTED_MODULE_0__.updateUserInterface)();\r\n}\r\n\r\nfunction confirmDeleteRecord() {\r\n    const wordToDelete = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValueFromSelect)(wordSelect);\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.submitAfterDialogConfirm)((0,_storage__WEBPACK_IMPORTED_MODULE_1__.DIALOG_CONTENT_TEMPLATE_DELETE_ONE)(wordToDelete), () => deleteRecordByWord(wordToDelete));\r\n}\r\n\r\nfunction formSubmitHandler(event) {\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleSubmitIfFormValid)(event.target, confirmDeleteRecord);\r\n}\r\n\r\nfunction initFormDeleteOne() {\r\n    groupSelect.addEventListener('change', filterWords);\r\n    _form__WEBPACK_IMPORTED_MODULE_3__.FORM_RECORD_DELETE.addEventListener('submit', formSubmitHandler);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/forms/forms-vocabulary/record-actions/record-delete.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _render_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-interface */ \"./src/js/render-interface.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ \"./src/js/options.js\");\n\r\n\r\n\r\n\r\nasync function initApp() {\r\n    const { initForms } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels_esm_js-node_mod-232fb0\"), __webpack_require__.e(\"src_js_forms_index_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms */ \"./src/js/forms/index.js\"));\r\n    const { initComponents } = await __webpack_require__.e(/*! import() */ \"src_js_components_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components */ \"./src/js/components/index.js\"));\r\n    const { initResults } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels_esm_js-node_mod-232fb0\"), __webpack_require__.e(\"src_js_results_index_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./results */ \"./src/js/results/index.js\"));\r\n\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.load();\r\n    _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.print();\r\n    (0,_render_interface__WEBPACK_IMPORTED_MODULE_1__.updateUserInterface)();\r\n    (0,_render_interface__WEBPACK_IMPORTED_MODULE_1__.updateSelectsWithWords)();\r\n\r\n    initForms();\r\n    (0,_options__WEBPACK_IMPORTED_MODULE_2__.initOptionInputs)();\r\n\r\n    initComponents();\r\n    initResults();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', initApp);\n\n//# sourceURL=webpack://quiz-game-new/./src/js/index.js?");

/***/ }),

/***/ "./src/js/options.js":
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initOptionInputs\": () => (/* binding */ initOptionInputs),\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"saveOptions\": () => (/* binding */ saveOptions)\n/* harmony export */ });\nconst defaultOptions = {\r\n    questionGuessType: true,\r\n    showGroups: true,\r\n    isAnswerInstantlyChecked: false\r\n};\r\n\r\nfunction initOptions() {\r\n    const optionsData = localStorage.getItem('optionsAppData');\r\n    return optionsData ? JSON.parse(optionsData) : defaultOptions;\r\n}\r\n\r\nconst options = initOptions();\r\n\r\nfunction initOptionInputs() {\r\n    const optionsInputs = document.querySelectorAll('[data-option]');\r\n    optionsInputs.forEach(input => {\r\n        const optionName = input.dataset.option;\r\n        const optionValue = options[optionName];\r\n        options[optionName] = optionValue;\r\n\r\n        switch(input.type) {\r\n            case 'checkbox':\r\n                input.checked = optionValue;\r\n                break;\r\n        }\r\n    });\r\n}\r\n\r\nfunction saveOptions() {\r\n    const optionsDataToSave = JSON.stringify(options);\r\n    localStorage.setItem('optionsAppData', optionsDataToSave);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/options.js?");

/***/ }),

/***/ "./src/js/popups/dialog.js":
/*!*********************************!*\
  !*** ./src/js/popups/dialog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dialog\": () => (/* binding */ dialog)\n/* harmony export */ });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/js/popups/popup.js\");\n\r\n\r\nfunction getByRole(container, role) {\r\n    return container.querySelector(`[data-role=\"${role}\"]`);\r\n}\r\n\r\nclass Dialog extends _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    static #eventListenersList = [];\r\n    static #events = {\r\n        open: new CustomEvent('open'),\r\n        close: new CustomEvent('close'),\r\n        submit: new CustomEvent('submit')\r\n    };\r\n\r\n    //method to invoke custom event\r\n    static #dispatchCustomEvent(container, customEventName) {\r\n        if (!Dialog.#events[customEventName]) {\r\n            return;\r\n        }\r\n\r\n        const customEvent = Dialog.#events[customEventName];\r\n        container.dispatchEvent(customEvent);\r\n    }\r\n    \r\n    constructor(container) {\r\n        super(container, 'dialog');\r\n\r\n        const boundGetByRole = getByRole.bind(null, this.container);\r\n\r\n        this.dialogItems = {\r\n            closeButton: boundGetByRole('close'),\r\n            cancelButton: boundGetByRole('cancel'),\r\n            submitButton: boundGetByRole('submit'),\r\n            headerSection: boundGetByRole('header'),\r\n            bodySection: boundGetByRole('body')\r\n        };\r\n\r\n        const { closeButton, cancelButton, submitButton } = this.dialogItems;\r\n\r\n        [closeButton, cancelButton].forEach(button => button.addEventListener('click', this.close.bind(this)));\r\n        submitButton.addEventListener(\r\n            'click',\r\n            Dialog.#dispatchCustomEvent.bind(this, this.container, 'submit')\r\n        );\r\n    }\r\n\r\n    //syntactic sugar to simplify adding event listeners directly to dialog window\r\n    addEventListener(...props) {\r\n        const [name, handler] = props;\r\n        Dialog.#eventListenersList.push({ name, handler });\r\n        this.container.addEventListener(...props);\r\n    }\r\n\r\n    removeEventListener(...props) {\r\n        this.container.removeEventListener(...props);\r\n    }\r\n\r\n    clearEventListeners() {\r\n        Dialog.#eventListenersList.forEach((item) => {\r\n            const { name, handler } = item;\r\n            this.removeEventListener(name, handler);\r\n        });\r\n        Dialog.#eventListenersList = [];\r\n    }\r\n\r\n    //setters to change innerHTML or textContent of some part of dialog\r\n    header(text) {\r\n        return this.#changeContent('headerSection', text);\r\n    }\r\n\r\n    body(text) {\r\n        return this.#changeContent('bodySection', text);\r\n    }\r\n\r\n    submitBtn(text) {\r\n        return this.#changeContent('submitButton', text);\r\n    }\r\n\r\n    cancelBtn(text) {\r\n        return this.#changeContent('cancelButton', text);\r\n    }\r\n\r\n    //methods to operate the state of modal\r\n    open() {\r\n        Dialog.#dispatchCustomEvent(this.container, 'open');\r\n        super.open();\r\n    }\r\n    \r\n    close() {\r\n        Dialog.#dispatchCustomEvent(this.container, 'close');\r\n        this.clearEventListeners();\r\n        super.close();\r\n    }\r\n\r\n    #changeContent(sectionName, text) {\r\n        const section = this.dialogItems[sectionName];\r\n        section.innerHTML = text;\r\n        return this;\r\n    }\r\n}\r\n\r\nconst dialogContainer = document.querySelector('.dialog');\r\nconst dialog = new Dialog(dialogContainer);\n\n//# sourceURL=webpack://quiz-game-new/./src/js/popups/dialog.js?");

/***/ }),

/***/ "./src/js/popups/popup.js":
/*!********************************!*\
  !*** ./src/js/popups/popup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n    constructor(container, type) {\r\n        this.container = container.parentElement;\r\n        this.type = type;\r\n    }\r\n\r\n    isOpen() {\r\n        return this.container.classList.contains('open');\r\n    }\r\n\r\n    open() {\r\n        const body = document.body;\r\n        body.classList.add(`${this.type}-overlay-open`);\r\n  \r\n        if (!this.isOpen()) {\r\n            this.container.classList.add('open');\r\n        }\r\n    }\r\n  \r\n    close() {\r\n        const body = document.body;\r\n        body.classList.remove(`${this.type}-overlay-open`);\r\n  \r\n        if (this.isOpen()) {\r\n            this.container.classList.remove('open');\r\n        }\r\n    }\r\n\r\n    toggle() {\r\n        this.isOpen() ? this.close() : this.open();\r\n    }\r\n}\n\n//# sourceURL=webpack://quiz-game-new/./src/js/popups/popup.js?");

/***/ }),

/***/ "./src/js/render-interface.js":
/*!************************************!*\
  !*** ./src/js/render-interface.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateSelectsWithWords\": () => (/* binding */ updateSelectsWithWords),\n/* harmony export */   \"updateUserInterface\": () => (/* binding */ updateUserInterface)\n/* harmony export */ });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabulary */ \"./src/js/vocabulary.js\");\n/* harmony import */ var _components_range_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range-input */ \"./src/js/components/range-input.js\");\n/* harmony import */ var _forms_forms_vocabulary_record_actions_record_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/forms-vocabulary/record-actions/record-delete */ \"./src/js/forms/forms-vocabulary/record-actions/record-delete.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ \"./src/js/options.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createOptions(array, {isFirstOptionDisabled, defaultOptionText}) {\r\n    const defaultOption = `<option value='' selected ${isFirstOptionDisabled ? 'disabled' : ''}>${defaultOptionText}</option>`;\r\n    const optionsWithValue = array.map(item => `<option value='${item}'>${item}</option>`);\r\n    return defaultOption + optionsWithValue.join('');\r\n}\r\n\r\nfunction updateSelects(contentType, defaultOptionContent, optionsContent) {\r\n    const selects = document.querySelectorAll(`.select[data-content=${contentType}]`);\r\n    selects.forEach(select => {\r\n        const { disableDefaultOption, defaultOptionText } = select.dataset;\r\n        const isFirstOptionDisabled = disableDefaultOption !== undefined;\r\n\r\n        const selectContent = createOptions(optionsContent, {\r\n            isFirstOptionDisabled,\r\n            defaultOptionText: defaultOptionText || defaultOptionContent\r\n        });\r\n\r\n        select.innerHTML = selectContent;\r\n    });\r\n}\r\n\r\n\r\nconst updateSelectsWithGroups = () => updateSelects('groups', 'Виберіть розділ', _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.groups);\r\n\r\nfunction updateSelectsWithWords(group = '') {\r\n    const records = _vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.getGroupContent(group);\r\n    const words = records.map(record => record.word);\r\n    updateSelects('words', 'Виберіть слово', words);\r\n}\r\n\r\nfunction updateUserInterface() {\r\n    updateSelectsWithGroups();\r\n    (0,_components_range_input__WEBPACK_IMPORTED_MODULE_1__.updateVocabularyRange)(_vocabulary__WEBPACK_IMPORTED_MODULE_0__.vocabulary.recordsCount);\r\n    (0,_forms_forms_vocabulary_record_actions_record_delete__WEBPACK_IMPORTED_MODULE_2__.filterWords)();\r\n    (0,_options__WEBPACK_IMPORTED_MODULE_3__.saveOptions)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/render-interface.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSS_CLASSES\": () => (/* binding */ CSS_CLASSES),\n/* harmony export */   \"DIALOG_CONTENT_CLEAR_VOCABULARY\": () => (/* binding */ DIALOG_CONTENT_CLEAR_VOCABULARY),\n/* harmony export */   \"DIALOG_CONTENT_DELETE_translation\": () => (/* binding */ DIALOG_CONTENT_DELETE_translation),\n/* harmony export */   \"DIALOG_CONTENT_EXIT_QUIZ\": () => (/* binding */ DIALOG_CONTENT_EXIT_QUIZ),\n/* harmony export */   \"DIALOG_CONTENT_RESET_FILE_INPUT\": () => (/* binding */ DIALOG_CONTENT_RESET_FILE_INPUT),\n/* harmony export */   \"DIALOG_CONTENT_RESET_translationS\": () => (/* binding */ DIALOG_CONTENT_RESET_translationS),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_ADD_GROUP\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_ADD_GROUP),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_DELETE_GROUP\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_DELETE_GROUP),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_DELETE_ONE\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_DELETE_ONE),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_IMPORT\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_IMPORT),\n/* harmony export */   \"DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH\": () => (/* binding */ DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH),\n/* harmony export */   \"ERRORS_FILE_UPLOADING\": () => (/* binding */ ERRORS_FILE_UPLOADING),\n/* harmony export */   \"FILE_UPLOAD_FAILURE_TEMPLATE\": () => (/* binding */ FILE_UPLOAD_FAILURE_TEMPLATE),\n/* harmony export */   \"FILE_UPLOAD_SUCCESS_TEMPLATE\": () => (/* binding */ FILE_UPLOAD_SUCCESS_TEMPLATE),\n/* harmony export */   \"PROGRESS_BAR_VALUE\": () => (/* binding */ PROGRESS_BAR_VALUE),\n/* harmony export */   \"modeTypes\": () => (/* binding */ modeTypes),\n/* harmony export */   \"quizResultList\": () => (/* binding */ quizResultList)\n/* harmony export */ });\nconst quizResultList = [];\r\n\r\n// property for progress fill in firefox browser\r\nconst PROGRESS_BAR_VALUE = '--value';\r\n\r\nconst modeTypes = {\r\n    inputAnswer: 'Введення слова/перекладу'\r\n};\r\n\r\nconst FILE_UPLOAD_SUCCESS_TEMPLATE = (fileName, uploadedRecordsCount) => (`\r\n    <small class='uploaded__file success'>\r\n        <i class='icon fa-solid fa-circle-check'></i>\r\n        Слова з файлу <b>${fileName}</b> готові до додавання у розділ! (Кількість слів: <b>${uploadedRecordsCount}</b>)\r\n    </small>\r\n`);\r\n\r\nconst FILE_UPLOAD_FAILURE_TEMPLATE = (fileName, error) => (`\r\n    <small class=\"uploaded__file fail\">\r\n        <i class=\"icon fa-solid fa-times-circle\"></i>\r\n        Файл <b>${fileName}</b> не був завантажений через помилку: ${error}\r\n    </small>\r\n`);\r\n\r\nconst ERRORS_FILE_UPLOADING = {\r\n    TEMPLATE_LOAD: 'Завантаження шаблону! Видаліть рядки із символами \"***\"!',\r\n    NO_SEPARATOR_IN_ROW: (separator, row) => `Немає роздільника '${separator}' в рядку ${row}`,\r\n    NO_WORD_IN_ROW: (row) => `Відсутнє слово в рядку ${row}!`,\r\n    NO_translationS_IN_ROW: (row) => `Відсутні переклади в рядку ${row}`,\r\n    WORD_AND_translation_ARE_SAME: (row) => `Слово та один з перекладів співпадають в рядку ${row}`,\r\n    translationS_ARE_SAME: (row) => `Переклади співпадають в рядку ${row}`,\r\n    WRONG_FILE_EXTENSION: 'Файл не має розширення <b>.txt</b>!',\r\n    EMPTY_FILE: 'Вміст файлу порожній!'\r\n};\r\n\r\nconst CSS_CLASSES = {\r\n    buttonPrimary: 'button__primary',\r\n    buttonSecondary: 'button__secondary'\r\n};\r\n\r\nconst DIALOG_CONTENT_DELETE_translation = {\r\n    header: 'Видалення перекладу',\r\n    submitBtn: 'Так',\r\n    body: 'Справді видалити переклад?',\r\n    cancelBtn: 'Скасувати'\r\n};\r\n\r\nconst DIALOG_CONTENT_RESET_FILE_INPUT = {\r\n    header: 'Видалення завантажених файлів',\r\n    submitBtn: 'Так',\r\n    body: 'Справді видалити всі завантажені файли?',\r\n    cancelBtn: 'Скасувати'\r\n};\r\n\r\nconst DIALOG_CONTENT_RESET_translationS = {\r\n    header: 'Скидання перекладів',\r\n    submitBtn: 'Так',\r\n    body: `\r\n        Справді скинути переклади?\r\n        <small>Всі переклади крім першого будуть видалені, а вміст першого буде очищено</small>\r\n    `,\r\n    cancelBtn: 'Скасувати'\r\n};\r\n\r\nconst DIALOG_CONTENT_CLEAR_VOCABULARY = {\r\n    header: 'Очищення вмісту словника',\r\n    submitBtn: 'Очистити',\r\n    cancelBtn: 'Скасувати',\r\n    body: 'Справді очистити словник?',\r\n};\r\n\r\nconst DIALOG_CONTENT_EXIT_QUIZ = {\r\n    header: 'Закінчення опитування',\r\n    body: `\r\n        Справді примусово завершити опитування?\r\n        <small>Результат опитування не буде збережено</small>\r\n    `,\r\n    submitBtn: 'Так',\r\n    cancelBtn: 'Скасувати'\r\n};\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_ADD_SINGLE_WORD = (word, translations, group) => ({\r\n    header: 'Додавання слова',\r\n    submitBtn: 'Додати',\r\n    cancelBtn: 'Скасувати',\r\n    body: `\r\n        <p><span class='text-primary'>Слово:</span> ${word}</p>\r\n        <p><span class='text-primary'>Переклади:</span> ${translations.join(', ')}</p>\r\n        <p><span class='text-primary'>Розділ:</span> ${group}</p>\r\n    `,\r\n});\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_ADD_GROUP = (group) => ({\r\n    header: 'Додавання розділу',\r\n    submitBtn: 'Додати',\r\n    cancelBtn: 'Скасувати',\r\n    body: `<span class='text-primary'>Назва розділу:</span> ${group}`,\r\n});\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_DELETE_GROUP = (group) => ({\r\n    header: 'Видалення розділу',\r\n    submitBtn: 'Видалити',\r\n    cancelBtn: 'Скасувати',\r\n    body: `<span class='text-primary'>Назва розділу:</span> ${group}`,\r\n});\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_IMPORT = (group, wordsToLoadCount) => ({\r\n    header: 'Додавання слів до розділу',\r\n    submitBtn: 'Додати',\r\n    cancelBtn: 'Скасувати',\r\n    body: `\r\n        <p><span class='text-primary'>Розділ:</span> ${group}</p>\r\n        <p><span class='text-primary'>Кількість слів:</span> ${wordsToLoadCount}</p>\r\n    `\r\n});\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_DELETE_ONE = (word) => ({\r\n    header: 'Видалення слова',\r\n    submitBtn: 'Видалити',\r\n    cancelBtn: 'Скасувати',\r\n    body: `<span class='text-primary'>Слово:</span> ${word}`,\r\n});\r\n\r\nconst DIALOG_CONTENT_TEMPLATE_QUIZ_FINISH = (correctAnswersCount, questionsCount) => {\r\n    const halfQuestions = (questionsCount / 2);\r\n    const isResultGood = correctAnswersCount > halfQuestions;\r\n\r\n    let shortResultDescription;\r\n    if (correctAnswersCount === questionsCount) {\r\n        shortResultDescription = 'відмінно';\r\n    } else if (isResultGood) {\r\n        shortResultDescription = 'вдало';\r\n    } else {\r\n        shortResultDescription = 'невдало';\r\n    }\r\n\r\n    const resultFeedback = `<span class='text-${isResultGood ? 'success' : 'fail'}'>${shortResultDescription}</span>`;\r\n\r\n    return {\r\n        header: 'Результат тестування',\r\n        body: `\r\n            Тестування завершено ${resultFeedback},\r\n            результат: <span class='text-primary'>${correctAnswersCount}/${questionsCount}</span>!\r\n            <small class='link' data-page-button='results'>Переглянути результат тестування</small>\r\n        `,\r\n        submitBtn: 'Добре',\r\n    };\r\n};\n\n//# sourceURL=webpack://quiz-game-new/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce),\n/* harmony export */   \"downloadTextFile\": () => (/* binding */ downloadTextFile),\n/* harmony export */   \"fetchTextFile\": () => (/* binding */ fetchTextFile),\n/* harmony export */   \"filterUnique\": () => (/* binding */ filterUnique),\n/* harmony export */   \"getCSSRootVariable\": () => (/* binding */ getCSSRootVariable),\n/* harmony export */   \"getRandomArrayItem\": () => (/* binding */ getRandomArrayItem),\n/* harmony export */   \"getRandomInteger\": () => (/* binding */ getRandomInteger),\n/* harmony export */   \"getValueFromSelect\": () => (/* binding */ getValueFromSelect),\n/* harmony export */   \"handleSubmitIfFormValid\": () => (/* binding */ handleSubmitIfFormValid),\n/* harmony export */   \"parseFileName\": () => (/* binding */ parseFileName),\n/* harmony export */   \"readFileAsync\": () => (/* binding */ readFileAsync),\n/* harmony export */   \"removeContainerChildren\": () => (/* binding */ removeContainerChildren),\n/* harmony export */   \"resetForm\": () => (/* binding */ resetForm),\n/* harmony export */   \"resetInput\": () => (/* binding */ resetInput),\n/* harmony export */   \"scrollPage\": () => (/* binding */ scrollPage),\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"submitAfterDialogConfirm\": () => (/* binding */ submitAfterDialogConfirm),\n/* harmony export */   \"updatetranslationsCount\": () => (/* binding */ updatetranslationsCount)\n/* harmony export */ });\n/* harmony import */ var _popups_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popups/dialog */ \"./src/js/popups/dialog.js\");\n/* harmony import */ var _forms_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/feedback */ \"./src/js/forms/feedback.js\");\n\r\n\r\n\r\nfunction filterUnique(array) {\r\n    return [...new Set(array)];\r\n}\r\n\r\nfunction shuffle(array) {\r\n    return [...array].sort(() => 0.5 - Math.random());\r\n}\r\n\r\nfunction resetInput(input) {\r\n    input.value = null;\r\n}\r\n\r\nfunction removeContainerChildren(container) {\r\n    container.innerHTML = '';\r\n}\r\n\r\nfunction getValueFromSelect(select) {\r\n    return select.options[select.selectedIndex].value;\r\n}\r\n\r\nfunction scrollPage(direction = 'top', options = {}) {\r\n    const finalScroll = direction === 'top' ? 0 : document.body.scrollHeight;\r\n    window.scrollTo({ top: finalScroll, ...options });\r\n}\r\n\r\nfunction getRandomInteger(max, min = 0) {\r\n    return Math.floor(Math.random() * max) + min;\r\n}\r\n\r\nfunction getRandomArrayItem(array) {\r\n    return array[getRandomInteger(array.length)];\r\n}\r\n\r\nfunction updatetranslationsCount(value) {\r\n    const translationsCountContainer = document.querySelector('.form__add-single-word .translations__count');\r\n    translationsCountContainer.textContent = value;\r\n}\r\n\r\nasync function fetchTextFile(url) {\r\n    const response = await fetch(url);\r\n    return await response.text();\r\n}\r\n\r\nfunction getCSSRootVariable(variableName) {\r\n    const root = document.querySelector(':root') || document.documentElement;\r\n    const rootStyles = getComputedStyle(root);\r\n    return rootStyles.getPropertyValue(`--${variableName}`);\r\n}\r\n\r\nfunction resetForm(form) {\r\n    form.classList.remove('validated');\r\n    form.reset();\r\n    (0,_forms_feedback__WEBPACK_IMPORTED_MODULE_1__.resetFeedbacks)(form);\r\n}\r\n\r\nfunction downloadTextFile(filename, content) {\r\n    const link = document.createElement('a');\r\n    link.download = `${filename}.txt`;\r\n    link.href = `data:text/plain;charset=utf-8,%EF%BB%BF${encodeURIComponent(content)}`;\r\n    link.click();\r\n}\r\n\r\nfunction handleSubmitIfFormValid(form, submitHandler) {\r\n    const isValid = form.checkValidity();\r\n    if (isValid) {\r\n        submitHandler();\r\n    }\r\n}\r\n\r\nfunction debounce(callback, time) {\r\n    let timeout;\r\n    return function () {\r\n        const delayedCallback = () => callback.apply(this, arguments);\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(delayedCallback, time);\r\n    };\r\n}\r\n\r\nfunction readFileAsync(file) {\r\n    return new Promise((resolve, reject) => {\r\n        const reader = new FileReader();\r\n        reader.onload = () => resolve(reader.result);\r\n        reader.onerror = reject;\r\n        reader.readAsText(file);\r\n    });\r\n}\r\n\r\nfunction parseFileName(filename) {\r\n    const dotPosition = filename.lastIndexOf('.');\r\n    return {\r\n        rawName: filename.substring(0, dotPosition),\r\n        extension: filename.substring(dotPosition + 1, filename.length)\r\n    };\r\n}\r\n\r\nfunction submitAfterDialogConfirm(content, onSubmit) {\r\n    const {\r\n        header = '',\r\n        body = '',\r\n        submitBtn = 'ОК',\r\n        cancelBtn = 'Скасувати'\r\n    } = content;\r\n    \r\n    _popups_dialog__WEBPACK_IMPORTED_MODULE_0__.dialog.header(header)\r\n        .body(body)\r\n        .submitBtn(submitBtn)\r\n        .cancelBtn(cancelBtn);\r\n\r\n    _popups_dialog__WEBPACK_IMPORTED_MODULE_0__.dialog.open();\r\n    _popups_dialog__WEBPACK_IMPORTED_MODULE_0__.dialog.addEventListener('submit', () => {\r\n        onSubmit?.();\r\n        _popups_dialog__WEBPACK_IMPORTED_MODULE_0__.dialog.close();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/utils.js?");

/***/ }),

/***/ "./src/js/vocabulary.js":
/*!******************************!*\
  !*** ./src/js/vocabulary.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vocabulary\": () => (/* binding */ vocabulary),\n/* harmony export */   \"vocabularyContainer\": () => (/* binding */ vocabularyContainer)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ \"./src/js/options.js\");\n/* harmony import */ var _components_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/placeholder */ \"./src/js/components/placeholder.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\nconst vocabularyContainer = document.querySelector('.table__vocabulary .table__content');\r\n\r\nclass Vocabulary {\r\n    constructor(container = vocabularyContainer) {\r\n        this.container = container;\r\n        this.groups = [];\r\n        this.data = [];\r\n        this.print();\r\n    }\r\n\r\n    get recordsCount() {\r\n        return this.data.length;\r\n    }\r\n\r\n    isEmpty = () => {\r\n        return this.data.length === 0;\r\n    };\r\n\r\n    indexOf = (word) => {\r\n        return this.data.findIndex(record => record.word === word);\r\n    };\r\n\r\n    addOne = ({word, translations, group}) => {\r\n        const wordIndex = this.indexOf(word);\r\n\r\n        if (wordIndex !== -1) {\r\n            return this.#addtranslationsByWordIndex(wordIndex, translations);\r\n        }\r\n\r\n        this.data.push({word, translations, group});\r\n        this.addGroup(group);\r\n    };\r\n\r\n    addMany = (recordsList) => {\r\n        recordsList.forEach(record => this.addOne(record));\r\n        this.save();\r\n    };\r\n\r\n    addManyAsync = (recordsList) => {\r\n        return Promise.resolve(this.addMany(recordsList));\r\n    };\r\n\r\n    delete = (word) => {\r\n        const wordIndex = this.indexOf(word);\r\n        if (wordIndex !== -1) {\r\n            this.data.splice(wordIndex, 1);\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n\r\n    hasGroup = (group) => {\r\n        return this.groups.includes(group);\r\n    };\r\n\r\n    getGroupContent = (group = '') => {\r\n        if (group === '') {\r\n            return this.data;\r\n        }\r\n        \r\n        return this.data.filter(record => record.group === group);\r\n    };\r\n\r\n    addGroup = (group) => {\r\n        if (!this.groups.includes(group)) {\r\n            this.groups.push(group);\r\n        }\r\n    };\r\n\r\n    removeGroup = (group) => {\r\n        const groupIndex = this.groups.indexOf(group);\r\n        if (groupIndex !== -1) {\r\n            this.groups.splice(groupIndex, 1);\r\n            this.data = this.data.filter(record => record.group !== group);\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n\r\n    addtranslations = (word, translations) => {\r\n        const wordIndex = this.indexOf(word);\r\n        if (wordIndex !== -1) {\r\n            this.#addtranslationsByWordIndex(wordIndex, translations);\r\n        }\r\n    };\r\n\r\n    print = () => {\r\n        const isEmpty = !this.data.length;\r\n        const { showGroups } = _options__WEBPACK_IMPORTED_MODULE_0__.options;\r\n\r\n        (0,_components_placeholder__WEBPACK_IMPORTED_MODULE_1__.updatePlaceholders)(isEmpty ? 'show' : 'hide');\r\n\r\n        if (showGroups) {\r\n            let groupIndex = 1;\r\n            this.groups.forEach(group => {\r\n                const groupData = this.getGroupContent(group);\r\n                if (groupData.length) {\r\n                    this.#printGroup(group);\r\n                    this.#printRecordsList(groupData, `${groupIndex}.`);\r\n                    groupIndex++;\r\n                }\r\n            });\r\n        } else {\r\n            this.#printRecordsList(this.data);\r\n        }\r\n    };\r\n\r\n    load = () => {\r\n        const vocabularyData = localStorage.getItem('vocabularyAppData');\r\n        if (vocabularyData) {\r\n            const { data, groups } = JSON.parse(vocabularyData);\r\n            this.data = data;\r\n            this.groups = groups;\r\n        }\r\n    };\r\n\r\n    save = () => {\r\n        const vocabularyDataToSave = {\r\n            data: this.data,\r\n            groups: this.groups\r\n        };\r\n\r\n        localStorage.setItem('vocabularyAppData', JSON.stringify(vocabularyDataToSave));\r\n    };\r\n\r\n    clear = () => {\r\n        this.data = [];\r\n        this.groups = [];\r\n        this.print();\r\n        localStorage.removeItem('vocabularyAppData');\r\n    };\r\n\r\n    #addtranslationsByWordIndex = (wordIndex, translations) => {\r\n        translations = Array.isArray(translations) ? translations : [translations];\r\n        this.data[wordIndex].translations.push(...translations);\r\n        this.data[wordIndex].translations =\r\n            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.filterUnique)(this.data[wordIndex].translations);\r\n    };\r\n\r\n    #printGroup = (group) => {\r\n        this.container.innerHTML += `\r\n            <div class='table__group'>\r\n                <div class='table__item-index'></div>\r\n                <div class='table__item'>${group}</div>\r\n            </div>\r\n        `;\r\n    };\r\n\r\n    #printRecord = (index, record) => {\r\n        const position = index.split('.').at(-1);\r\n        this.container.innerHTML += `\r\n            <div class=\"table__record${position % 2 ? ' strip' : ''}\">\r\n                <div class='table__item table__item-index'>${index}</div>\r\n                <div class='table__item'>${record.word}</div>\r\n                <div class='table__item'>${record.translations.join(', ')}</div>\r\n            </div>\r\n        `;\r\n    };\r\n\r\n    #printRecordsList = (list, groupIndex = '') => {\r\n        list.forEach((record, recordIndex) => {\r\n            this.#printRecord(`${groupIndex}${recordIndex + 1}`, record);\r\n        });\r\n    };\r\n}\r\n\r\nconst vocabulary = new Vocabulary();\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/vocabulary.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "quiz-game-new:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkquiz_game_new"] = self["webpackChunkquiz_game_new"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;