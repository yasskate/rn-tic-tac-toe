import { SquareProps as Square } from "@/components/square/square.types"

interface Board {
  rowId: number
  squares: Square[]
}

interface MovesStateProps {
  x: number[]
  o: number[]
}

export type { Board, MovesStateProps }
