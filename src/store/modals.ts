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
    closeModal(state: State) {
      state.openModal = null;
    },
  },
}