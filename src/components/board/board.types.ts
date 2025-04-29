import { SquareProps as Square } from "@/components/square/square.types"

type DefaultSquare = Omit<Square, "value" | "onSquareClick">

interface Board {
  rowId: number
  squares: DefaultSquare[]
}

interface MovesStateProps {
  x: number[]
  o: number[]
}

export type { Board, MovesStateProps }
