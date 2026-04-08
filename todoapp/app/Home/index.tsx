import { View, Text, TouchableOpacity } from "react-native"; // to show the screen
import { router } from "expo-router"; // to change screen
import { Ionicons } from "@expo/vector-icons"; // to show icons
import React, { useState } from "react"; // manage state and react 
import { useTodos } from "@/context/TodoContext"; // to take todos, functions from TodoContext
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins"; // to use Google Font(Poppins)

export default function HomeScreen() {
  // to take todos, delateTodo, toggleDone functions from Context
  const { todos, deleteTodo, toggleDone } = useTodos();

  // the state to record which Todo is shown
  // nothing shown when it is null 
  // when list is open, description and delete buttons will be appeared
  const [expandedTodoId, setExpandedTodoId] = useState<string | null>(null);

  // lord Poppins font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, // nomal font
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // outside screen
    // color and size
    <View
      style={{
        flex: 1,
        backgroundColor: "#07bd28",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* the main panel */}
      {/* to put all of the functions*/}
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
        {/* title of screen */}
        <Text
          style={{
            color: "black",
            fontSize: 30,
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "Poppins_400Regular" as const,
          }}
        >
          My ToDo List
        </Text>

        {/* to show each todos array */}
        {/* to make blue boxs automatically by using map function */}
        {todos.map((todo) => (
          <TouchableOpacity
            key={todo.id} // key to organize
            style={{
              backgroundColor: "lightblue",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
            onPress={() =>
              // todo has already opened, close it (back to null)
              // if it null, save todo.id and open
              setExpandedTodoId(
                expandedTodoId === todo.id ? null : todo.id
              )
            }
          >
            {/* title*/}
            {/* title and (DONE) to the left side、triangle icon to the right side*/}
            <View
              style={{
                flexDirection: "row", // side by side
                justifyContent: "space-between", // break to left and right side
                alignItems: "center", // align to the center
              }}
            >
              {/* title and done */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* title of ToDo */}
                <Text style={{ color: "black", fontSize: 16 }}>
                  {todo.title}
                </Text>

                {/* when completed is true, display (DONE)*/}
                {todo.completed && (
                  <Text
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      marginLeft: 8,
                    }}
                  >
                    (DONE)
                  </Text>
                )}
              </View>

              {/* show opened situation */}
              {/* when it open triangle point up, when it close, point down*/}
              <Ionicons
                name={
                  expandedTodoId === todo.id
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={20}
                color="green"
              />
            </View>

            {/* a aria to show detail */}
            {/* show decription and buttons only opened todo*/}
            {expandedTodoId === todo.id && (
              <View style={{ marginTop: 10 }}>
                {/* description of ToDo*/}
                <Text
                  style={{
                    color: "black",
                    marginBottom: 10,
                  }}
                >
                  {todo.description}
                </Text>

                {/* place Done / Delete button */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  {/* Done button */}
                  {/* if completed is false, show a Done button */}
                  {!todo.completed && (
                  <TouchableOpacity onPress={() => toggleDone(todo.id)}>
                    <Ionicons　name="checkmark-circle" size={28} color="green" />
                  </TouchableOpacity>
                  )}

                  {/* Delete button*/}
                  {/* when it is pushed, delete todo*/}
                  <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                    <Ionicons name="trash" size={28} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {/* a button to move to add new todo screen */}
        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            marginTop: 20,
            alignSelf: "flex-start",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => router.push("/Add_New_ToDo")}
        >
          {/* icons */}
          <Ionicons name="add" size={20} color="black" />

          {/* a text for button */}
          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginLeft: 5,
              fontFamily: "Poppins_400Regular" as const,
            }}
          >
            Add new ToDo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}