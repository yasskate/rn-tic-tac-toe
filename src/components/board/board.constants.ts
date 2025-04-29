import { Board, MovesStateProps } from "./board.types"

const BOARD: Board[] = [
  {
    rowId: 1,
    squares: [
      { id: 1, isSquareMarked: false },
      { id: 2, isSquareMarked: false },
      { id: 3, isSquareMarked: false }
    ]
  },
  {
    rowId: 2,
    squares: [
      { id: 4, isSquareMarked: false },
      { id: 5, isSquareMarked: false },
      { id: 6, isSquareMarked: false }
    ]
  },
  {
    rowId: 3,
    squares: [
      { id: 7, isSquareMarked: false },
      { id: 8, isSquareMarked: false },
      { id: 9, isSquareMarked: false }
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
