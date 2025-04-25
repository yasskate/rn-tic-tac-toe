import { useState  } from "react"
import { MOVES_DEFAULT_STATE } from "./board.constants"
import { MovesStateProps } from "./board.types"



function useBoard () {
  const [isTurnForX, setIsTurnForX] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [moves, setMoves] = useState<MovesStateProps>(MOVES_DEFAULT_STATE)

  const resetGame =() => {setMoves(MOVES_DEFAULT_STATE)
    setSquares(Array(9).fill(null))
    setIsTurnForX(true)

  }

  const handleSquareClick = (squareId: number) => {
    if (moves.x.length + moves.o.length === 9) return

    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[squareId - 1] = isTurnForX ? "X" : "O"
      return newSquares
    })

    setMoves((prevMoves) => {
      const currentMoves = isTurnForX ? [...prevMoves.x, squareId] : [...prevMoves.o, squareId]

      return {
        ...prevMoves,
        [isTurnForX ? "x" : "o"]: currentMoves
      }
    })

    setIsTurnForX((prev) => !prev)
  }

  
    const handleSquareValue = (squareId: number) => {
      return squares[squareId - 1] || ""
    }

    console.log("Moves:", moves)
    console.log("Squares:", squares)

  return {
    handleSquareClick,
    handleSquareValue,
    resetGame
  }
}

export { useBoard }