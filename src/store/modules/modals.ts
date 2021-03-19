import store from "@/store";
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from "vuex-module-decorators";

export interface IModals {
  currentModal: string | null;
}

@Module({ dynamic: true, name: "Modals", store })
export default class Modals extends VuexModule implements IModals {
  currentModal: string | null = null;

  @Mutation
  openModal({ name }: { name: string }) {
    this.currentModal = name;
  }

  @Mutation
  toggleModal({ name }: { name: string }) {
    const isOpen = this.currentModal === name;
    this.currentModal = isOpen ? null : name;
  }

  @Mutation
  closeModal(params?: { name: string }) {
    const name = params?.name;
    if (name && name !== this.currentModal) return;
    this.currentModal = null;
  }
}

export const ModalsModule = getModule(Modals);
