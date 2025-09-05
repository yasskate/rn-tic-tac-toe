import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

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
      <Text>😺 Tic Tac Toe - YB</Text>
      {gameOver ? (
        <Text>Game over 🎮</Text>
      ) : (
        <Text>May the best player win</Text>
      )}

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

      <>
        {getWinner() && <Text>The winner is {getWinner()}</Text>}
        {gameOver && !getWinner() && <Text>This is a draw!</Text>}
      </>

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text>Reset</Text>
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
  board: {},
  row: {
    flexDirection: "row"
  },
  resetButton: {
    backgroundColor: "#C3a43a",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  }
})

