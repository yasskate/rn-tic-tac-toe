import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Game } from "@/components/game"
import { Board } from "@/components/board"

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <LinearGradient
        colors={["#36aa53", "#3b5998", "#192f6a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBox}
      >
        <StatusBar style="auto" />
        <Game>
          <Board />
        </Game>
      </LinearGradient>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  },
  gradientBox: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    width: "100%"
  }
})
