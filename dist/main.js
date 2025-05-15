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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nconst GameBoard = () => {\n  const player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Player 1\", \"X\");\n  const player2 = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Player 2\", \"O\");\n  return {\n    cells: [\n      [\"\", \"\", \"\"],\n      [\"\", \"\", \"\"],\n      [\"\", \"\", \"\"],\n    ],\n    player1: player1,\n    player2: player2,\n    winner: null,\n    turn: 1,\n    currentPlayer: player1,\n\n    render: function () {\n      const gameBoardContainer = document.getElementById(\"game-container\");\n      for (let row = 0; row < this.cells.length; row++) {\n        for (let col = 0; col < this.cells[row].length; col++) {\n          const cell = document.createElement(\"div\");\n          cell.id = `${row}-${col}`;\n          cell.classList.add(\"cell\");\n          cell.innerHTML = this.cells[row][col];\n\n          cell.addEventListener(\"click\", () => {\n            this.makeMove(row, col, this.currentPlayer.marker);\n          });\n\n          gameBoardContainer.appendChild(cell);\n        }\n      }\n    },\n    makeMove: function (row, col, marker) {\n      if (this.cells[row][col] === \"\") {\n        this.cells[row][col] = marker;\n        this.turn++;\n        this.render();\n        this.checkWinner();\n        this.nextPlayer();\n        return true;\n      }\n      return false;\n    },\n    nextPlayer: function () {\n      this.currentPlayer =\n        this.currentPlayer === this.player1 ? this.player2 : this.player1;\n    },\n    checkWinner: function () {\n      const winPatterns = [\n        // rows\n        [\n          [0, 0],\n          [0, 1],\n          [0, 2],\n        ],\n        [\n          [1, 0],\n          [1, 1],\n          [1, 2],\n        ],\n        [\n          [2, 0],\n          [2, 1],\n          [2, 2],\n        ],\n        // columns\n        [\n          [0, 0],\n          [1, 0],\n          [2, 0],\n        ],\n        [\n          [0, 1],\n          [1, 1],\n          [2, 1],\n        ],\n        [\n          [0, 2],\n          [1, 2],\n          [2, 2],\n        ],\n        // diagonals\n        [\n          [0, 0],\n          [1, 1],\n          [2, 2],\n        ],\n        [\n          [0, 2],\n          [1, 1],\n          [2, 0],\n        ],\n      ];\n\n      for (const pattern of winPatterns) {\n        const [a, b, c] = pattern;\n        const valueA = this.cells[a[0]][a[1]];\n        const valueB = this.cells[b[0]][b[1]];\n        const valueC = this.cells[c[0]][c[1]];\n\n        if (valueA === \"\" || valueB === \"\" || valueC === \"\") {\n          continue;\n        }\n\n        if (valueA === valueB && valueA === valueC) {\n          this.winner = valueA;\n          this.gameOver(this.currentPlayer);\n          return valueA;\n        }\n      }\n\n      return null;\n    },\n\n    gameOver: function (player) {\n      this.reset();\n      if (this.winner) {\n        alert(`${player} wins!`);\n      } else {\n        alert(\"It's a draw!\");\n      }\n    },\n    reset: function () {\n      this.cells = [\n        [\"\", \"\", \"\"],\n        [\"\", \"\", \"\"],\n        [\"\", \"\", \"\"],\n      ];\n      this.winner = null;\n      this.turn = 1;\n    },\n  };\n};\n\n\n//# sourceURL=webpack://todo_list/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nconst game = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();\n\ngame.render();\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = function (name, marker) {\n  return {\n    name: name,\n    marker: marker,\n  };\n};\n\n\n//# sourceURL=webpack://todo_list/./src/player.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;