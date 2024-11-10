import { StyleSheet, Text, View, Pressable } from "react-native";

const InputItem = ({ itemData, onDeleteItem }) => {
  return (
    <View style={styles.goallItem}>
      <Pressable
        android_ripple={{ color: "#dddd" }}
        onPress={() => onDeleteItem(itemData?.item?.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData?.item?.value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goallItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#7c8dff",
  },
  goalText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default InputItem;
