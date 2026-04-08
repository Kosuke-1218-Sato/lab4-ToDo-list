import { View, Text, TouchableOpacity, FlatList } from "react-native"; // to show the screen
import { router } from "expo-router"; // to change screen
import { Ionicons } from "@expo/vector-icons"; // to show icons
import React, { useState } from "react"; // manage state and react 
import { useTodos } from "@/src/context/TodoContext"; // to take todos, functions from TodoContext
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins"; // to use Google Font(Poppins)

export default function HomeScreen() {// to take todos, delateTodo, toggleDone functions from Context
  const { todos, deleteTodo, toggleDone } = useTodos();
  // the state to record which Todo is shown
  // nothing shown when it is null 
  // when list is open, description and delete buttons will be appeared
  const [expandedTodoId, setExpandedTodoId] = useState<string | null>(null);

  // load Poppins font
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,// nomal font
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

        <FlatList
          data={todos} // pass a todo array
          keyExtractor={(item) => item.id} // the key of each elements
          
          renderItem={({ item: todo }) => (// define how to show todo
            <TouchableOpacity
              style={{
                backgroundColor: "lightblue",
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
              }}
              onPress={() => //if tapped same id, close it // not, open it
                setExpandedTodoId(
                  expandedTodoId === todo.id ? null : todo.id
                )
              }
            >
              {/* put the title and done to the left side */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "black", fontSize: 16 }}>
                    {todo.title} {/* inputted title*/}
                  </Text>

                  {todo.completed && (
                    // show when completed is true
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

                {/* triangle icon */}
                <Ionicons
                  name={
                    expandedTodoId === todo.id
                      ? "chevron-up" // detail is open
                      : "chevron-down" // detail is close
                  }
                  size={20}
                  color="green"
                />
              </View>

              {expandedTodoId === todo.id && (
                // show only when this todo is picked
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      color: "black",
                      marginBottom: 10,
                    }}
                  >
                    {todo.description}
                  </Text>

                  {/* buttons */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    {/* Done button */}
                    {!todo.completed && (
                      // show when it false
                      <TouchableOpacity onPress={() => toggleDone(todo.id)}>
                        {/* to change true or false */}
                        <Ionicons name="checkmark-circle" size={28} color="green" />
                      </TouchableOpacity>
                    )}

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                      {/* delete this todo from array */}
                      <Ionicons name="trash" size={28} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )}

          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false} // delete scrole bar
        />

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
          <Ionicons name="add" size={20} color="black" />

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