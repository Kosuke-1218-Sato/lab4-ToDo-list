import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import React from "react";
import { useTodos } from "@/context/TodoContext";

export default function TodoDetail() {
  const { id } = useLocalSearchParams();
  const { todos } = useTodos();

  const todo = todos.find((item) => item.id === String(id));

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

        <Text
          style={{
            fontSize: 18,
            color: "black",
            marginBottom: 30,
          }}
        >
          {todo.description}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
          }}
          onPress={() => router.back()}
        >
          <Text style={{ fontSize: 18, color: "black" }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}