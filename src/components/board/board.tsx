import { View, StyleSheet, Text } from "react-native"
import { Square } from "@/components/square"

import { BOARD } from "./board.constants"

interface BoardProps {
  xIsNext: boolean
  squares: string
  onPlay: () => void
}

function Board() {
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={styles.board}>
        {BOARD.map(({ rowId, squares }) => (
          <View key={rowId} style={styles.row}>
            {squares.map((square) => (
              <Square
                key={square.id}
                id={square.id}
                value={square.value}
                onSquareClick={() => console.log(`Square ${square.id} clicked`)}
              />
            ))}
          </View>
        ))}
      </View>
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
  },
  row: {
    flexDirection: "row"
  }
})
