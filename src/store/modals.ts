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
    openModal(state: State, modalName: string) {
      state.openModal = modalName;
    },
    toggleModal(state: State, modalName: string) {
      const isOpen = state.openModal === modalName;
      state.openModal = isOpen ? null : modalName;
    },
    closeModal(state: State, modalName?: string) {
      if (modalName && modalName !== state.openModal) return;
      state.openModal = null;
    },
  },
}