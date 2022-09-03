import { PiniaPluginContext } from 'pinia';

export const todoPlugin = (context: PiniaPluginContext) => {
  context.store.$subscribe(() => {
    window.localStorage.setItem('todos', JSON.stringify(context.store.$state));
  });
};
