interface SquareProps {
  id: number
  isDisabled: boolean
  onSquareClick: (squareId: number) => void
  value: string
}

export type { SquareProps }
