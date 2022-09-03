<template>
  <span class="px-3 py-2 flex justify-between items-center">
    <span class="font-bold">{{ text }}</span>

    <span class="flex space-x-4">
      <input
        type="checkbox"
        :value="completed"
        :checked="completed"
        @change="(event) => setTodoCompleted(event.target.value)"
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

    return {
      props,
      todoStore,
    };
  },

  methods: {
    setTodoCompleted(completed: boolean) {
      this.todoStore.setTodoCompleted(this.props.id, completed);
    },

    deleteTodo() {
      this.todoStore.removeTodo(this.props.id);
    },
  },
});
</script>
