type State = {
  openModal: string | null
}

export const modals: { 
  state: State,
  [key: string]: any
} = {
  namespaced: true,
  state: {
    openModal: null,
  },  
  mutations: {
    openModal(state: State, { name }: { name: string }) {
      state.openModal = name;
    },
    toggleModal(state: State, { name }: { name: string }) {
      const isOpen = state.openModal === name;
      state.openModal = isOpen ? null : name;
    },
    closeModal(state: State, params?: { name: string }) {
      const name = params?.name;
      if (name && name !== state.openModal) return;
      state.openModal = null;
    },
  },
}