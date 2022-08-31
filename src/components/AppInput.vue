<template>
  <input
    v-model="inputValue"
    type="text"
    class="px-3 w-full text-lg shadow-xl rounded-lg"
    placeholder="Add a todo"
    autofocus
    @keydown.enter="onSubmit"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useTodoStore } from '../stores/todo-store';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();

    return {
      todoStore,
    };
  },

  data() {
    return {
      inputValue: '',
    };
  },

  methods: {
    onSubmit() {
      if (this.inputValue) {
        this.todoStore.addTodo({
          id: Date.now(),
          text: this.inputValue,
          completed: false,
        });

        this.inputValue = '';
      }
    },
  },
});
</script>
