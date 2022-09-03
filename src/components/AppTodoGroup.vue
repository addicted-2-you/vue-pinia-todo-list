<template>
  <transition-group
    tag="ul"
    class="relative w-full flex flex-col gap-y-1.5"
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity duration-500"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-active-class="absolute -z-10 transition-opacity duration-500"
    leave-to-class="opacity-0"
    move-class="transition-all duration-200"
  >
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="w-full bg-slate-300 rounded-lg"
    >
      <app-todo :id="todo.id" :text="todo.text" :completed="todo.completed" />
    </li>
  </transition-group>
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
