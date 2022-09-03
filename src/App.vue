<template>
  <main class="h-screen flex flex-col bg-slate-50">
    <header class="flex justify-center">
      <h1 class="text-lg font-bold">Skrr</h1>
    </header>

    <div class="pt-5 flex flex-col flex-grow items-center bg-slate-200">
      <div class="w-1/3">
        <app-input />
      </div>

      <div class="mt-5 w-9/12 flex justify-center">
        <app-todo-group :todos="todoStore.todos" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import AppInput from './components/AppInput.vue';
import AppTodoGroup from './components/AppTodoGroup.vue';

import { useTodoStore } from './stores/todo-store';

export default {
  components: {
    AppInput,
    AppTodoGroup,
  },

  setup() {
    const todoStore = useTodoStore();

    return {
      todoStore,
    };
  },
};
</script>
