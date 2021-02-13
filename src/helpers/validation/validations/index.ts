import { ValidationTest } from "../types";

import { required } from "./required";

export const VALIDATIONS: Record<string, ValidationTest> = {
  REQUIRED: required,
};