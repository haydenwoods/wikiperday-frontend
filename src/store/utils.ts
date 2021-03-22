import { useStore } from "vuex";

export const clearModule = (name: string) => {
  const store = useStore();

  if (store?.state?.[name]) {
    store.unregisterModule(name);
  }
};
