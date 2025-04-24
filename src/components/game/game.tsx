import { View, Text, StyleSheet } from "react-native"

interface GameProps {
  children?: React.ReactNode
  text: string
}

function Game({ children, text }: GameProps) {
  return (
    <View style={styles.container}>
      <Text>Game asdfasdf23234</Text>
      <Text>{text}</Text>
      {children}
    </View>
  )
}
export { Game }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36aa53",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
})
