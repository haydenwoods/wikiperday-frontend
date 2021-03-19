import { ValidationTest, ValidationProps } from "@/helpers/validation/types";

const testRequired = ({ value }: ValidationProps): boolean => {
  if (value) {
    return true;
  }
  return false;
};

export const required: ValidationTest = {
  name: "required",
  test: testRequired,
  errorMessage: "is a required field.",
};
