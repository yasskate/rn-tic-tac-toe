import { SquareProps as Square } from "@/components/square/square.types"

interface Board {
  rowId: number
  squares: Square[]
}

export type { Board }
