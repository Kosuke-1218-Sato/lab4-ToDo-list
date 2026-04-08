import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"; // UI conpornent
import { router } from "expo-router"; // to move screen
import { Ionicons } from "@expo/vector-icons"; // icons
import React, { useState } from "react"; // to manage state
import { useTodos } from "@/context/TodoContext"; // to take added functions
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins"; // font

export default function AddScreen() {

  // a state to input title
  const [title, setTitle] = useState("");

  // a state to input description
  const [description, setDescription] = useState("");

  // to take addTodo functions from Context
  const { addTodo } = useTodos();

  // lord font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // procces when user push a save button
  const handleSave = () => {

    // cheack input is empty or not
    if (!title.trim() || !description.trim()) {
      Alert.alert("Error", "Title and description are required.");
      return;
    }

    // make new todo object
    const newTodo = {
      id: Date.now().toString(), // ID (time)
      title,                     // title
      description,               // description
      completed: false,          // at the first is false
    };

    // to cheack cosole
    console.log("SAVED:", newTodo);

    // add to Cntext
    addTodo(newTodo);

    // popup to show save is successful
    Alert.alert("Saved", "New ToDo has been saved.");

    // reset input boxs
    setTitle("");
    setDescription("");

    // back to home screen
    router.replace("/Home");
  };

  return (
    // screen
    <View
      style={{
        flex: 1,
        backgroundColor: "#07bd28",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* white input panel*/}
      <View
        style={{
          width: "90%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        {/* title */}
        <Text
          style={{
            color: "black",
            fontSize: 30,
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "Poppins_400Regular" as const,
          }}
        >
          Add New Todo
        </Text>

        {/* lavel to input title*/}
        <Text
          style={{
            color: "black",
            fontSize: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Enter Your Todo
        </Text>

        {/* a box to input title*/}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            borderRadius: 8,
            marginBottom: 15,
          }}
          value={title}
          onChangeText={setTitle}    // save inputed text to state
        />

        {/* description */}
        <Text
          style={{
            color: "black",
            fontSize: 15,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Description
        </Text>

        {/* a box to input description */}
        <TextInput
          multiline={true} // to input multipul line
          textAlignVertical="top" // start input from top
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            borderRadius: 8,
            height: 100,
            marginBottom: 20,
          }}
          value={description}
          onChangeText={setDescription}
        />

        {/* save button */}
        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            marginTop: 10,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
          onPress={handleSave} // call save procces
        >
          {/* save icon */}
          <Ionicons name="save" size={20} color="black" />

          {/* text of button*/}
          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginLeft: 5,
              fontFamily: "Poppins_400Regular" as const,
            }}
          >
            Save New Todo
          </Text>
        </TouchableOpacity>

        {/* chancel button */}
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => router.back()} // back to previous screen
        >
          <Ionicons name="close" size={20} color="black" />

          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginLeft: 5,
              fontFamily: "Poppins_400Regular" as const,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}