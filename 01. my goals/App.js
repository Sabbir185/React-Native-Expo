import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Modal,
  Alert,
  Image,
} from "react-native";
import InputItem from "./components/InputItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [textList, setTextList] = useState([]);
  const inputRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getInputValue = (enteredText) => {
    setTextValue(enteredText);
  };

  const submitText = () => {
    setTextList((currState) => [
      ...currState,
      { value: textValue, id: Math.random().toString() },
    ]);
    setTextValue((pre) => "");
    inputRef.current.clear();
    setModalVisible(false);
  };

  const deleteItem = (id) => {
    setTextList((currState) => {
      return currState.filter((item) => item?.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginTop: 20 }}>
          <Button title="Add new goal" onPress={() => setModalVisible(true)} />
        </View>

        <Modal visible={modalVisible} animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 25,
              marginBottom: 25,
              borderBottomWidth: 2,
              borderBottomColor: "#ccc",
              backgroundColor: "#311b6b",
            }}
          >
            <Image
              style={{ width: 100, height: 100, margin: 20 }}
              source={require("./assets/images/goals.png")}
            />

            <View style={styles.buttonContainer}>
              <TextInput
                ref={inputRef}
                value={textValue}
                style={styles.textInput}
                placeholder="Enter your goal"
                onChangeText={getInputValue}
                clearButtonMode="always"
              />
              <View style={styles.innerButtonContainer}>
                <View style={{ width: "40%", marginHorizontal: 10 }}>
                  <Button
                    title="Add goal"
                    onPress={submitText}
                    color="#5e0acc"
                  />
                </View>
                <View style={{ width: "40%", marginHorizontal: 10 }}>
                  <Button
                    title="Cancel goal"
                    onPress={() => {
                      setModalVisible(false);
                      Alert.alert("Modal has been closed.");
                    }}
                    color={"#f31282"}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.goallsContainer}>
          <FlatList
            data={textList}
            renderItem={(itemData) => {
              return (
                <InputItem itemData={itemData} onDeleteItem={deleteItem} />
              );
            }}
            keyExtractor={(item, index) => {
              return item?.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 1, backgroundColor: "#cccc" }} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#cccc",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#cccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    marginRight: 5,
    width: "70%",
    borderRadius: 10,
  },
  goallsContainer: {
    flex: 4,
  },
  innerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
});
