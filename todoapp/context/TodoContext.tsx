import React, { createContext, useContext, useState } from "react";

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

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Buy milk", description: "Buy from supermarket", completed: false },
    { id: "2", title: "Finish assignments", description: "Complete report tonight", completed: false },
    { id: "3", title: "Go to gym", description: "Workout after class", completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id: string) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

const toggleDone = (id: string) => {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

  return (
    <TodoContext.Provider
  value={{ todos, addTodo, deleteTodo, toggleDone }}
>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used inside TodoProvider");
  }
  return context;
}