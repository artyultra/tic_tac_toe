import { Player } from "./player.js";

export const GameBoard = () => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  return {
    cells: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    player1: player1,
    player2: player2,
    winner: null,
    turn: 1,
    currentPlayer: player1,

    render: function () {
      const gameBoardContainer = document.getElementById("game-container");
      for (let row = 0; row < this.cells.length; row++) {
        for (let col = 0; col < this.cells[row].length; col++) {
          const cell = document.createElement("div");
          cell.id = `${row}-${col}`;
          cell.classList.add("cell");
          cell.innerHTML = this.cells[row][col];

          cell.addEventListener("click", () => {
            this.makeMove(row, col, this.currentPlayer.marker);
          });

          gameBoardContainer.appendChild(cell);
        }
      }
    },
    makeMove: function (row, col, marker) {
      if (this.cells[row][col] === "") {
        this.cells[row][col] = marker;
        this.turn++;
        this.render();
        this.checkWinner();
        this.nextPlayer();
        return true;
      }
      return false;
    },
    nextPlayer: function () {
      this.currentPlayer =
        this.currentPlayer === this.player1 ? this.player2 : this.player1;
    },
    checkWinner: function () {
      const winPatterns = [
        // rows
        [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
        [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
        [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
        // columns
        [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
        [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
        [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
        // diagonals
        [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
        [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      ];

      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const valueA = this.cells[a[0]][a[1]];
        const valueB = this.cells[b[0]][b[1]];
        const valueC = this.cells[c[0]][c[1]];

        if (valueA === "" || valueB === "" || valueC === "") {
          continue;
        }

        if (valueA === valueB && valueA === valueC) {
          this.winner = valueA;
          this.gameOver(this.currentPlayer);
          return valueA;
        }
      }

      return null;
    },

    gameOver: function (player) {
      this.reset();
      if (this.winner) {
        alert(`${player} wins!`);
      } else {
        alert("It's a draw!");
      }
    },
    reset: function () {
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.winner = null;
      this.turn = 1;
    },
  };
};
