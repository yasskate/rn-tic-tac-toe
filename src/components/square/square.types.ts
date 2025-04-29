interface SquareProps {
  id: number
  isSquareMarked: boolean | (() => boolean)
  onSquareClick: (squareId: number) => void
  value: string
}

export type { SquareProps }
