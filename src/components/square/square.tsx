import { StyleSheet, TouchableOpacity } from "react-native"
// import Icon from "@expo/vector-icons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { SquareProps } from "./square.types"

function Square({ id, value, onSquareClick, isDisabled }: SquareProps) {
  const handleColorIcon = () =>
    value === "X" ? "#FFD600" : value === "O" ? "#00E676" : ""

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSquareClick(id)}
      disabled={isDisabled}
    >
      {value === "X" && (
        <FontAwesome name="times" size={50} color={handleColorIcon()} />
      )}
      {value === "O" && (
        <FontAwesome name="circle-o" size={50} color={handleColorIcon()} />
      )}
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
