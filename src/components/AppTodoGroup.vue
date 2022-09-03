<template>
  <ul class="w-full flex flex-col space-y-3">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="w-full bg-slate-300 rounded-lg"
    >
      <app-todo :id="todo.id" :text="todo.text" :completed="todo.completed" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ITodo } from '../types/ITodo';
import AppTodo from './AppTodo.vue';

export default defineComponent({
  components: {
    AppTodo,
  },

  props: {
    todos: {
      type: Array as PropType<ITodo[]>,
      required: true,
    },
  },
});
</script>
