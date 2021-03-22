import store from "@/store";
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from "vuex-module-decorators";

import { Error } from "@/types/error";

import { clearModule } from "@/store/utils";

clearModule("errors");

@Module({ dynamic: true, name: "errors", store })
export default class Errors extends VuexModule {
  errors: Record<string, Error> = {};

  @Mutation
  setError({ name, error }: { name: string; error: Error }) {
    this.errors[name] = error;
  }

  @Mutation
  clrError({ name }: { name: string }) {
    delete this.errors?.[name];
  }
}

export const ErrorsModule = getModule(Errors);
