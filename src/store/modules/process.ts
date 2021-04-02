import store from "@/store";
import {
  Module,
  getModule,
  VuexModule,
  Mutation,
} from "vuex-module-decorators";

import { Processes, Status } from "@/types/process";

import { clearModule } from "@/store/utils";

clearModule("process");

@Module({ dynamic: true, name: "process", store })
class Process extends VuexModule {
  processes: Processes = {};

  @Mutation
  setStatus({ name, status }: { name: string; status: Status }) {
    this.processes = {
      ...this.processes,
      [name]: {
        ...this.processes[name],
        status,
      },
    };
  }

  @Mutation
  setError({ name, error }: { name: string; error: string }) {
    this.processes = {
      ...this.processes,
      [name]: {
        ...this.processes[name],
        status: "failed",
        error,
      },
    };
  }

  @Mutation
  clearProcess({ name }: { name: string }) {
    delete this.processes[name];
  }
}

export const ProcessModule = getModule(Process, store);
