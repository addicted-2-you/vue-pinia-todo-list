import { defineStore } from 'pinia';

import { ITodo } from '../../types/ITodo';

interface ITodoState {
  todos: ITodo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): ITodoState => ({
    todos: window.localStorage.getItem('todos')
      ? (JSON.parse(window.localStorage.getItem('todos') as string)
          .todos as ITodo[])
      : [],
  }),

  getters: {
    completedTodos(): ITodo[] {
      return this.todos.filter((todo) => todo.completed);
    },

    pendingTodos(): ITodo[] {
      return this.todos.filter((todo) => !todo.completed);
    },
  },

  actions: {
    addTodo(todo: ITodo) {
      this.todos = [...this.todos, todo];
    },

    setTodoCompleted(id: number, completed: boolean) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
