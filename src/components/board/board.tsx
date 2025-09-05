import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import { Square } from "@/components/square"

import { useBoard } from "./board.hook"
import { BOARD } from "./board.constants"

function Board() {
  const {
    handleSquareClick,
    resetGame,
    handleSquareValue,
    gameOver,
    getWinner,
    isSquareMarked
  } = useBoard()

  return (
    <View style={styles.container}>
      {gameOver ? (
        <Text>Game over 🎮</Text>
      ) : (
        <Text>May the best player win</Text>
      )}

      <>
        {getWinner() && <Text>The winner is {getWinner()}</Text>}
        {gameOver && !getWinner() && <Text>This is a draw!</Text>}
      </>

      <View style={styles.board}>
        {BOARD.map(({ rowId, squares }) => (
          <View key={rowId} style={styles.row}>
            {squares.map((square) => (
              <Square
                key={square.id}
                id={square.id}
                isDisabled={isSquareMarked(square.id)}
                value={handleSquareValue(square.id)}
                onSquareClick={handleSquareClick}
              />
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Restart</Text>
        <Icon style={styles.refreshIcon} name="refresh" />
      </TouchableOpacity>
    </View>
  )
}

export { Board }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center"
  },
  board: {
    borderRadius: 16,
    backgroundColor: "#3b5998",
    marginVertical: 20
  },
  row: {
    flexDirection: "row"
  },
  resetButton: {
    backgroundColor: "#C3a43a",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  resetText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  refreshIcon: {
    fontSize: 20,
    marginLeft: 10
  }
})
