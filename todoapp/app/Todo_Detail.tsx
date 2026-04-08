import { View, Text, TouchableOpacity } from "react-native"; // UI component
import { useLocalSearchParams, router } from "expo-router"; // take URL and move screen
import React from "react";
import { useTodos } from "@/src/context/TodoContext"; // take todo dta

export default function TodoDetail() {

  const { id } = useLocalSearchParams();

  // take all todos from Context
  const { todos } = useTodos();

  // serch todo that matched id
  const todo = todos.find((item) => item.id === String(id));

  // show when cannot find
  if (!todo) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7eb",
        }}
      >
        <Text>Todo not found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e5e7eb",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* UI of center card */}
      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        {/* show a title */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "green",
            marginBottom: 20,
          }}
        >
          {todo.title}
        </Text>

        {/* show a description */}
        <Text
          style={{
            fontSize: 18,
            color: "black",
            marginBottom: 30,
          }}
        >
          {todo.description}
        </Text>

        {/* back button */}
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
          }}
          onPress={() => router.back()} // back to previous screen
        >
          <Text style={{ fontSize: 18, color: "black" }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}