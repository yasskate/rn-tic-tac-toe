import { SafeAreaView, View, Text, StyleSheet } from "react-native"

import { GameProps } from "./game.types"

function Game({ children }: GameProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>😺 Tic Tac Toe - YB</Text>
      {children}
    </SafeAreaView>
  )
}
export { Game }

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "70%",
    width: "100%"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  }
})
