<template>
  <input
    v-model="newTodo"
    type="text"
    class="px-3 w-full text-lg shadow-xl rounded-lg"
    placeholder="Add a todo"
    autofocus
    @keydown.enter="onSubmit"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useTodoStore } from '../stores/todo/todo-store';

export default defineComponent({
  setup() {
    // stores
    const todoStore = useTodoStore();

    // states
    const newTodo = ref('');

    // methods
    const onSubmit = () => {
      if (newTodo.value) {
        todoStore.addTodo({
          id: Date.now(),
          text: newTodo.value,
          completed: false,
        });

        newTodo.value = '';
      }
    };

    return {
      // store
      todoStore,

      // state
      newTodo,

      // methods
      onSubmit,
    };
  },
});
</script>
