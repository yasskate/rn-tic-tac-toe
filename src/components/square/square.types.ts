interface SquareProps {
  id: number
  value: string
  isSquareMarked: boolean
  onSquareClick: (squareId: number) => void
}

export type { SquareProps }
