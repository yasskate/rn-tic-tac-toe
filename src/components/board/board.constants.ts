import { Board, MovesStateProps } from "./board.types"

// TODO:
// - Delete useless props -> (value, onSquareClick)
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

const MOVES_DEFAULT_STATE: MovesStateProps = {
  x: [],
  o: []
}

const WINNER_COMBINATIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

export { BOARD, MOVES_DEFAULT_STATE, WINNER_COMBINATIONS }
