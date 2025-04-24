import { Text, TouchableOpacity } from "react-native"

interface SquareProps {
  id: number
  value: string
  onSquareClick: () => void
}

function Square({ id, value, onSquareClick }: SquareProps) {
  return (
    <TouchableOpacity onPress={onSquareClick}>
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}

export { Square }
