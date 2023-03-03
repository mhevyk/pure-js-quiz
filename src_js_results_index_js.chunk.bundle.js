"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkquiz_game_new"] = self["webpackChunkquiz_game_new"] || []).push([["src_js_results_index_js"],{

/***/ "./src/js/results/charts/chart-answers-percentage.js":
/*!***********************************************************!*\
  !*** ./src/js/results/charts/chart-answers-percentage.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPercentageChart\": () => (/* binding */ createPercentageChart)\n/* harmony export */ });\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var _chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-config */ \"./src/js/results/charts/chart-config.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createPercentageChart(data, options = {}) {\r\n    const canvas = document.createElement('canvas');\r\n    const labels = ['правильні відповіді', 'неправильні відповіді'];\r\n    const { isDataLabels = false } = options;\r\n\r\n    const chartConfig = isDataLabels\r\n        ? (0,_chart_config__WEBPACK_IMPORTED_MODULE_1__.createDatalabelsDoughnutChartConfig)(data, labels)\r\n        : (0,_chart_config__WEBPACK_IMPORTED_MODULE_1__.createDoughnutChartConfig)(data);\r\n\r\n    return new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, chartConfig);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/charts/chart-answers-percentage.js?");

/***/ }),

/***/ "./src/js/results/charts/chart-config.js":
/*!***********************************************!*\
  !*** ./src/js/results/charts/chart-config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDatalabelsDoughnutChartConfig\": () => (/* binding */ createDatalabelsDoughnutChartConfig),\n/* harmony export */   \"createDoughnutChartConfig\": () => (/* binding */ createDoughnutChartConfig)\n/* harmony export */ });\n/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ \"./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/js/utils.js\");\n\r\n\r\n\r\n\r\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.defaults.color = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCSSRootVariable)('secondary-color');\r\n\r\nconst backgroundColors = [\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCSSRootVariable)('highlight-success-bg') || 'green',\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCSSRootVariable)('highlight-fail-bg') || 'red'\r\n];\r\n\r\nconst createDoughnutChartConfig = (data) => ({\r\n    type: 'doughnut',\r\n    data: {\r\n        datasets: [{\r\n            data,\r\n            borderWidth: 0,\r\n            backgroundColor: backgroundColors\r\n        }]\r\n    },\r\n    options: {\r\n        plugins: {\r\n            tooltip: {\r\n                enabled: false\r\n            },\r\n        },\r\n        layout: {\r\n            padding: {\r\n                top: -10,\r\n                bottom: -10\r\n            }\r\n        },\r\n        offset: 2\r\n    }\r\n});\r\n\r\nconst createDatalabelsDoughnutChartConfig = (data, labels) => ({\r\n    type: 'doughnut',\r\n    plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\r\n    data: {\r\n        datasets: [{\r\n            data,\r\n            borderWidth: 0,\r\n            backgroundColor: backgroundColors,\r\n        }],\r\n        labels\r\n    },\r\n    options: {\r\n        plugins: {\r\n            tooltip: {\r\n                enabled: false\r\n            },\r\n            datalabels: {\r\n                labels: {\r\n                    value: {\r\n                        color: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCSSRootVariable)('white-color')\r\n                    }\r\n                }\r\n            },\r\n            legend: {\r\n                display: true,\r\n                align: 'center',\r\n                position: 'bottom',\r\n                labels: {\r\n                    padding: 20\r\n                }\r\n            }\r\n        },\r\n        responsive: true,\r\n        offset: 5\r\n    },\r\n});\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/charts/chart-config.js?");

/***/ }),

/***/ "./src/js/results/charts/index.js":
/*!****************************************!*\
  !*** ./src/js/results/charts/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCharts\": () => (/* binding */ initCharts)\n/* harmony export */ });\n/* harmony import */ var _quiz_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quiz-details */ \"./src/js/results/quiz-details/index.js\");\n\r\n\r\nconst resultContainer = document.querySelector('[data-quiz-result-list]');\r\n\r\nfunction fillInDetailedInfoPage(event) {\r\n    const detailsId = Number(event.target.dataset?.detailsId);\r\n    if (!isNaN(detailsId)) {\r\n        (0,_quiz_details__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(detailsId);\r\n    }\r\n}\r\n\r\nfunction initCharts() {\r\n    resultContainer.addEventListener('click', fillInDetailedInfoPage);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/charts/index.js?");

/***/ }),

/***/ "./src/js/results/index.js":
/*!*********************************!*\
  !*** ./src/js/results/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initResults\": () => (/* binding */ initResults)\n/* harmony export */ });\n/* harmony import */ var _charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts */ \"./src/js/results/charts/index.js\");\n\r\n\r\nfunction initResults() {\r\n    (0,_charts__WEBPACK_IMPORTED_MODULE_0__.initCharts)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/index.js?");

/***/ }),

/***/ "./src/js/results/quiz-details/datalabels-chart.js":
/*!*********************************************************!*\
  !*** ./src/js/results/quiz-details/datalabels-chart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printDataLabelsChart\": () => (/* binding */ printDataLabelsChart)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage */ \"./src/js/storage.js\");\n/* harmony import */ var _charts_chart_answers_percentage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/chart-answers-percentage */ \"./src/js/results/charts/chart-answers-percentage.js\");\n/* harmony import */ var _result_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../result-item */ \"./src/js/results/result-item.js\");\n\r\n\r\n\r\n\r\nconst canvas = document.querySelector('[data-quiz-details-chart] [data-chart]');\r\n\r\nfunction printDataLabelsChart(detailsId) {\r\n    const { questions } = _storage__WEBPACK_IMPORTED_MODULE_0__.quizResultList[detailsId];\r\n    const chartData = (0,_result_item__WEBPACK_IMPORTED_MODULE_2__.countRightAndWrongAnswers)(questions);\r\n    const chart = (0,_charts_chart_answers_percentage__WEBPACK_IMPORTED_MODULE_1__.createPercentageChart)(chartData, { isDataLabels: true });\r\n\r\n    canvas.innerHTML = '';\r\n    canvas.appendChild(chart.canvas);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/quiz-details/datalabels-chart.js?");

/***/ }),

/***/ "./src/js/results/quiz-details/index.js":
/*!**********************************************!*\
  !*** ./src/js/results/quiz-details/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _questions_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-table */ \"./src/js/results/quiz-details/questions-table.js\");\n/* harmony import */ var _short_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./short-details */ \"./src/js/results/quiz-details/short-details.js\");\n/* harmony import */ var _datalabels_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalabels-chart */ \"./src/js/results/quiz-details/datalabels-chart.js\");\n\r\n\r\n\r\n\r\nfunction showQuizDetails(detailsId) {\r\n    (0,_questions_table__WEBPACK_IMPORTED_MODULE_0__.printQuestionsTable)(detailsId);\r\n    (0,_short_details__WEBPACK_IMPORTED_MODULE_1__.printShortDetails)(detailsId);\r\n    (0,_datalabels_chart__WEBPACK_IMPORTED_MODULE_2__.printDataLabelsChart)(detailsId);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showQuizDetails);\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/quiz-details/index.js?");

/***/ }),

/***/ "./src/js/results/quiz-details/questions-table.js":
/*!********************************************************!*\
  !*** ./src/js/results/quiz-details/questions-table.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printQuestionsTable\": () => (/* binding */ printQuestionsTable)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage */ \"./src/js/storage.js\");\n\r\n\r\nconst detailsPage = document.querySelector('[data-quiz-details-questions]');\r\n\r\nconst tableRecordTemplate = ({ name, userAnswer, correctAnswer, isAnswerCorrect }) => {\r\n    return `\r\n        <div class=\"table__record\">\r\n            <div class=\"table__item\">\r\n                <span>\r\n                    ${name}\r\n                </span>\r\n            </div>\r\n            <div class=\"table__item table__item-index\">\r\n                <i class=\"fa-solid ${isAnswerCorrect ? 'fa-circle-check text-success' : 'fa-times-circle text-fail'}\"></i>\r\n            </div>\r\n            <div class=\"table__item text-muted\">${userAnswer}</div>\r\n            <div class=\"table__item\">${correctAnswer}</div>\r\n        </div>\r\n    `;\r\n};\r\n\r\nfunction printQuestionsTable(detailsId) {\r\n    const { questions } = _storage__WEBPACK_IMPORTED_MODULE_0__.quizResultList[detailsId];\r\n\r\n    const tableContent = questions.reduce((result, question) => result + tableRecordTemplate(question), '');\r\n    const tableContainer = detailsPage.querySelector('[data-content=questions]');\r\n    tableContainer.innerHTML = tableContent;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/quiz-details/questions-table.js?");

/***/ }),

/***/ "./src/js/results/quiz-details/short-details.js":
/*!******************************************************!*\
  !*** ./src/js/results/quiz-details/short-details.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printShortDetails\": () => (/* binding */ printShortDetails)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage */ \"./src/js/storage.js\");\n\r\n\r\nconst detailsListPage = document.querySelector('[data-quiz-details]');\r\nconst shortDetailsPage = document.querySelector('[data-quiz-details-short]');\r\n\r\nfunction printQuizInfo(contentSelector, content) {\r\n    const container = shortDetailsPage.querySelector(`[data-content=\"${contentSelector}\"]`);\r\n    container.innerText = content;\r\n}\r\n\r\nfunction printShortDetails(detailsId) {\r\n    const { name, mode, questions, group } = _storage__WEBPACK_IMPORTED_MODULE_0__.quizResultList[detailsId];\r\n\r\n    detailsListPage.setAttribute('data-title', name);\r\n    printQuizInfo('mode', mode);\r\n    printQuizInfo('group', group);\r\n    printQuizInfo('questions-count', questions.length);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/quiz-details/short-details.js?");

/***/ }),

/***/ "./src/js/results/result-item.js":
/*!***************************************!*\
  !*** ./src/js/results/result-item.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addQuizResultItemToStorage\": () => (/* binding */ addQuizResultItemToStorage),\n/* harmony export */   \"appendResultItem\": () => (/* binding */ appendResultItem),\n/* harmony export */   \"countRightAndWrongAnswers\": () => (/* binding */ countRightAndWrongAnswers),\n/* harmony export */   \"createResultItem\": () => (/* binding */ createResultItem)\n/* harmony export */ });\n/* harmony import */ var _charts_chart_answers_percentage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/chart-answers-percentage */ \"./src/js/results/charts/chart-answers-percentage.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ \"./src/js/storage.js\");\n\r\n\r\n\r\nlet resultItemId = 0;\r\n\r\nfunction countRightAndWrongAnswers(questions) {\r\n    const questionsCount = questions.length;\r\n    const rightAnswersCount = questions.reduce((result, question) => result + question.isAnswerCorrect, 0);\r\n    const wrongAnswersCount = questionsCount - rightAnswersCount;\r\n    return [rightAnswersCount, wrongAnswersCount];\r\n}\r\n\r\nfunction createResultItem(resultInfo, index) {\r\n    const { name, questions } = resultInfo;\r\n    const { canvas } = (0,_charts_chart_answers_percentage__WEBPACK_IMPORTED_MODULE_0__.createPercentageChart)(countRightAndWrongAnswers(questions));\r\n\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('result__item');\r\n\r\n    const canvasWrapper = document.createElement('div');\r\n    canvasWrapper.classList.add('item__chart-container');\r\n    canvasWrapper.appendChild(canvas);\r\n\r\n    const resultItemDescription = `\r\n        <div class=\"item__short-description\">\r\n            <span class=\"item__name\">${name}</span>\r\n            <small\r\n                class=\"link text-accent\"\r\n                data-page-button=\"quiz-details\"\r\n                data-details-id=\"${index}\"\r\n            >\r\n                Детальніше...\r\n            </small>\r\n        </div>\r\n    `;\r\n\r\n    wrapper.insertAdjacentHTML('afterbegin', resultItemDescription);\r\n    wrapper.appendChild(canvasWrapper);\r\n\r\n    return wrapper;\r\n}\r\n\r\nfunction appendResultItem(item) {\r\n    const resultContainer = document.querySelector('[data-quiz-result-list]');\r\n    const placeholder = resultContainer.querySelector('.placeholder');\r\n    placeholder?.remove();\r\n    \r\n    const resultItem = createResultItem(item, resultItemId);\r\n    resultItemId++;\r\n    resultContainer.append(resultItem);\r\n}\r\n\r\nfunction addQuizResultItemToStorage(item) {\r\n    _storage__WEBPACK_IMPORTED_MODULE_1__.quizResultList.push(item);\r\n    appendResultItem(item);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://quiz-game-new/./src/js/results/result-item.js?");

/***/ })

}]);