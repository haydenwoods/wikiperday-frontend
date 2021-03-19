import { ValidationTest } from "../types";

import { required } from "./required";
import { email } from "./email";

export const VALIDATIONS: Record<string, ValidationTest> = {
  REQUIRED: required,
  EMAIL: email,
};
