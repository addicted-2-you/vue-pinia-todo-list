<template>
  <fieldset>
    <legend class="bg-slate-700 text-white">{{ label }}</legend>

    <ul class="flex flex-col space-y-3">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="w-full odd:bg-slate-400 even:bg-slate-500 rounded-lg"
      >
        <app-todo :id="todo.id" :text="todo.text" :completed="todo.completed" />
      </li>
    </ul>
  </fieldset>
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
    label: {
      type: String,
      required: true,
    },

    todos: {
      type: Array as PropType<ITodo[]>,
      required: true,
    },
  },
});
</script>
