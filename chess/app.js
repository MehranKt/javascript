// const user1 = {
//   name: "Robert",
//   surname: "James Fischer",
//   sayHello: function () {
//     console.log(this);
//   },
// };
// const user2 = {
//   name: "Mikhail",
//   surname: "Tal",
// };
// user1.sayHello();
// user1.sayHello.bind(user2)();
const board = document.createElement("div");
board.classList.add("board");
document.body.append(board);
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let div = document.createElement("div");
    div.classList.add((i + j) % 2 === 0 ? "white" : "black");
    board.append(div);
  }
}

class Piece {
  constructor(name, color, row, rank, image) {
    this.name = name;
    this.color = color;
    this.row = row;
    this.rank = rank;
    this.image = image;
  }
  render() {
    let img = document.createElement("img");
    this.element = img;
    img.addEventListener("click", () => {
      if (this.name === "knight") {
        this.getKnightMoves();
      } else if (this.name === "rook") {
        this.getRookMoves();
      }
    });
    img.classList.add("piece");
    img.setAttribute("src", this.image);
    img.style.top = this.row * 100 + "px";
    img.style.left = this.rank * 100 + "px";
    board.append(img);
  }
  getKnightMoves() {
    let x = [
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
    ];
    let coordinates = [];
    x.map((position) => {
      let [a, b] = position;
      if (
        this.row + a >= 0 &&
        this.row + a < 8 &&
        this.rank + b >= 0 &&
        this.rank + b < 8
      ) {
        coordinates.push([this.row + a, this.rank + b]);
      }
    });
    this.highlightPossibleMoves(coordinates);
  }
  getRookMoves() {
    // 1 ci varyant
    // console.log(this.row, this.rank);
    // let moves = [];
    // for (let i = 1; i < 8; i++) {
    //   if (this.row - i >= 0) {
    //     moves.push([this.row - i, this.rank]);
    //   }
    // }
    // for (let i = 1; i < 8; i++) {
    //   if (this.rank - i >= 0) {
    //     moves.push([this.row, this.rank - i]);
    //   }
    // }
    // for (let i = 1; i < 8; i++) {
    //   if (this.rank + i < 8) {
    //     moves.push([this.row, this.rank + i]);
    //   }
    // }
    // for (let i = 1; i < 8; i++) {
    //   if (this.row + i < 8) {
    //     moves.push([this.row + i, this.rank]);
    //   }
    // }
    // 2 ci varyant
    // for (let i = 1; i < 8; i++) {
    //   if (this.row - i >= 0) moves.push([this.row - i, this.rank]);
    //   if (this.rank - i >= 0) moves.push([this.row, this.rank - i]);
    //   if (this.rank + i < 8) moves.push([this.row, this.rank + i]);
    //   if (this.row + i < 8) moves.push([this.row + i, this.rank]);
    // }
    const moves = [];
    const deltas = [-1, 1];
    for (const delta of deltas) {
    for (let i = 1; i < 8; i++) {
    if (this.row + delta * i >= 0 && this.row + delta * i < 8) {
      moves.push([this.row + delta * i, this.rank]);
    }
    if (this.rank + delta * i >= 0 && this.rank + delta * i < 8) {
      moves.push([this.row, this.rank + delta * i]);
    }
  }
}
    this.highlightPossibleMoves(moves);
  }
  move(row, rank) {
    let enemy = allPieces.find(
      (a) => a.row === row && a.rank === rank && a.color !== this.color
    );
    if (enemy) {
      enemy.element.remove();
    }
    this.row = row;
    this.rank = rank;
    this.element.style.top = row * 100 + "px";
    this.element.style.left = rank * 100 + "px";
    this.removeHighlightedMoves();
  }
  removeHighlightedMoves() {
    [...document.querySelectorAll(".highlight")].map((a) => a.remove());
  }
  highlightPossibleMoves(coordinates) {
    coordinates.map((coordinate) => {
      let [a, b] = coordinate;
      let div = document.createElement("div");
      div.addEventListener("click", () => {
        this.move(a, b);
      });
      div.style.top = a * 100 + "px";
      div.style.left = b * 100 + "px";
      div.classList.add("highlight");
      board.append(div);
    });
  }
}

const allPieces = [
  new Piece(
    "knight",
    "black",
    4,
    1,
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
  ),
  new Piece(
    "queen",
    "white",
    0,
    4,
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
  ),
  new Piece(
    "rook",
    "black",
    5,
    5,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/1024px-Chess_rdt45.svg.png"
  ),
];
allPieces.map((a) => {
  a.render();
});
