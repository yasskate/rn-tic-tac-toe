import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { SquareProps } from "./square.types"

function Square({ id, value, onSquareClick, isDisabled }: SquareProps) {
  const handleIconName = () =>
    value === "X" ? "times" : value === "O" ? "circle-o" : ""

  const handleColorIcon = () =>
    value === "X" ? "#FFD600" : value === "O" ? "#00E676" : ""

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSquareClick(id)}
      disabled={isDisabled}
    >
      <Icon name={handleIconName()} size={50} color={handleColorIcon()} />
    </TouchableOpacity>
  )
}

export { Square }

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#e0e0e0",
    borderWidth: 2,
    height: 100,
    justifyContent: "center",
    width: 100
  }
})
