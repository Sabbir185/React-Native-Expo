import { StyleSheet, Text, View } from "react-native";

export default function Flex() {
  return (
    <View
      style={styles.container}
    >
      <View style={[styles.innerContainer, { backgroundColor: "red" }]}>
        <Text style={styles.innerText}>1</Text>
      </View>
      <View style={[styles.innerContainer, { backgroundColor: "green" }]}>
        <Text style={styles.innerText}>2</Text>
      </View>
      <View style={[styles.innerContainer, { backgroundColor: "blue" }]}>
        <Text style={styles.innerText}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    margin: 10,
    borderColor: "#cccc",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  innerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  }
});
