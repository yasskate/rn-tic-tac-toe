import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from "react-native"
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
      <View style={styles.gameResult}>
        <Text style={styles.textResult}>🎮 May the best player win.</Text>
        <>
          {getWinner() && (
            <Text style={styles.textResult}>The winner is: {getWinner()}</Text>
          )}
          {gameOver && !getWinner() && (
            <Text style={styles.textResult}>Drawed game!</Text>
          )}
        </>
      </View>

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
    justifyContent: "space-around",
    borderRadius: 16
  },
  gameResult: {
    backgroundColor: "#3b5998",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8
  },
  textResult: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f3f3f3"
  },
  board: {
    borderRadius: 16,
    backgroundColor: "#3b5998"
  },
  row: {
    flexDirection: "row"
  },
  resetButton: {
    backgroundColor: "#C3a43a",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16
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
