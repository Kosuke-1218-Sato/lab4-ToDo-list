import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// define
type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};

// to make Context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // reload save data
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const saved = await AsyncStorage.getItem("todos");
        if (saved) {
          setTodos(JSON.parse(saved));
        }
      } catch (e) {
        console.log("Load error:", e);
      }
    };
    loadTodos();
  }, []);

  // save if todo changed
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (e) {
        console.log("Save error:", e);
      }
    };
    saveTodos();
  }, [todos]);

  // to add
  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  // to delete
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // swap T or F
  const toggleDone = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleDone }}>
      {children}
    </TodoContext.Provider>
  );
};

// Hook
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used inside TodoProvider");
  return context;
};