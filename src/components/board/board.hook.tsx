import { useState, useEffect } from "react"
import { MOVES_DEFAULT_STATE, WINNER_COMBINATIONS } from "./board.constants"
import { MovesStateProps } from "./board.types"

function useBoard() {
  const [gameOver, setGameOver] = useState(false)
  const [isTurnForX, setIsTurnForX] = useState(true)
  const [moves, setMoves] = useState<MovesStateProps>(MOVES_DEFAULT_STATE)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState<"" | "X" | "O">("")

  useEffect(() => {
    isGameOver()
  }, [moves.x, moves.o])

  const resetGame = () => {
    setGameOver(false)
    setIsTurnForX(true)
    setMoves(MOVES_DEFAULT_STATE)
    setSquares(Array(9).fill(null))
    setWinner("")
  }

  const validateWinner = () => {
    WINNER_COMBINATIONS.map(([a, b, c]) => {
      const isXWinner =
        moves.x.includes(a) && moves.x.includes(b) && moves.x.includes(c)
      const isOWinner =
        moves.o.includes(a) && moves.o.includes(b) && moves.o.includes(c)

      if (isXWinner) {
        const winnerPlayer = isXWinner ? "X" : "O"

        setGameOver((prevState) => !prevState)
        setWinner(winnerPlayer)
      }

      if (isOWinner) {
        const winnerPlayer = isOWinner ? "O" : "X"

        setGameOver((prevState) => !prevState)
        setWinner(winnerPlayer)
      }
    })
  }

  const isGameOver = () => {
    if (winner) return

    const gameOver = moves.x.length + moves.o.length === 9
    const hasGameStarted = moves.x.length >= 3 || moves.o.length >= 3

    if (hasGameStarted) {
      validateWinner()
    }

    if (gameOver && !winner) {
      setGameOver((prevState) => !prevState)
      setWinner("")
    }

    return gameOver
  }

  const isSquareMarked = (squareId: number) => {
    const squareIndex = squareId - 1
    return !!squares[squareIndex]
  }

  const handleSquareClick = (squareId: number) => {
    if (isSquareMarked(squareId) || winner) return

    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[squareId - 1] = isTurnForX ? "X" : "O"
      return newSquares
    })

    setMoves((prevMoves) => {
      const currentMoves = isTurnForX
        ? [...prevMoves.x, squareId]
        : [...prevMoves.o, squareId]

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

  const getWinner = () => winner

  return {
    gameOver,
    handleSquareClick,
    handleSquareValue,
    isSquareMarked,
    resetGame,
    getWinner
  }
}

export { useBoard }
