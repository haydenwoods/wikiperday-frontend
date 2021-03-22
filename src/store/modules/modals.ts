import store from "@/store";
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from "vuex-module-decorators";

import { clearModule } from "@/store/utils";

clearModule("modals");

@Module({ dynamic: true, name: "modals", store })
export default class Modals extends VuexModule {
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
