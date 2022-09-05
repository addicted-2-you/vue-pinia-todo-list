<template>
  <span class="px-3 py-2 flex justify-between items-center">
    <span class="font-bold">{{ text }}</span>

    <span class="flex space-x-4">
      <input
        type="checkbox"
        :value="completed"
        :checked="completed"
        @change="(event) => setTodoCompleted(event?.target?.value === 'true')"
      />

      <button
        type="button"
        class="opacity-80 hover:opacity-100"
        @click="deleteTodo"
      >
        X
      </button>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useTodoStore } from '../stores/todo/todo-store';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      required: true,
    },
  },

  setup(props) {
    const todoStore = useTodoStore();

    // methods
    const setTodoCompleted = (completed: boolean) => {
      todoStore.setTodoCompleted(props.id, completed);
    };

    const deleteTodo = () => {
      todoStore.removeTodo(props.id);
    };

    return {
      props,

      // stores
      todoStore,

      // methods
      setTodoCompleted,
      deleteTodo,
    };
  },
});
</script>
