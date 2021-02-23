import { Error } from "@/types/error";

type State = {
  errors: Record<string, Error>
}

export const errors: {
  state: State,
  [key: string]: any
} = {
  namespaced: true,
  state: {
    errors: {},
  },
  mutations: {
    setError(state: State, { name, error }: { name: string, error: Error }) {
      state.errors[name] = error;
    },
    clrError(state: State, { name }: { name: string }) {
      delete state.errors?.[name];
    },
  },
}