import { View, StyleSheet, Text } from "react-native"
import { Square } from "@/components/square"

import { SQUARES } from "./board.constants"

interface BoardProps {
  xIsNext: boolean
  squares: string
  onPlay: () => void
}

function Board() {
  return (
    <View style={styles.container}>
      <Text>Board</Text>
      <Text>Tic Tac Toe</Text>
      {SQUARES.map((row) => (
        <Square
          key={row.id}
          id={row.id}
          value={row.value}
          onSquareClick={() => console.log(`Square ${row.id} clicked`)}
        />
      ))}
    </View>
  )
}

export { Board }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f3f3f3",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
    // width: '100%',
    // height: '100%',
  }
})
