import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Game } from "@/components/game"
import { Board } from "@/components/board"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Game text="Hello World">
        <Board />
      </Game>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
