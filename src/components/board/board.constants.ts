import { Board } from "./board.types"

const BOARD: Board[] = [
  {
    rowId: 1,
    squares: [
      { id: 1, value: "1", onSquareClick: () => {} },
      { id: 2, value: "2", onSquareClick: () => {} },
      { id: 3, value: "3", onSquareClick: () => {} }
    ]
  },
  {
    rowId: 2,
    squares: [
      { id: 4, value: "4", onSquareClick: () => {} },
      { id: 5, value: "5", onSquareClick: () => {} },
      { id: 6, value: "6", onSquareClick: () => {} }
    ]
  },
  {
    rowId: 3,
    squares: [
      { id: 7, value: "7", onSquareClick: () => {} },
      { id: 8, value: "8", onSquareClick: () => {} },
      { id: 9, value: "9", onSquareClick: () => {} }
    ]
  }
]

export { BOARD }
