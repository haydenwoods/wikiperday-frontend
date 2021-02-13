export type ValidationTest = {
  name: string,
  test: ({}: ValidationProps) => boolean;
  errorMessage: string;
};

export type ValidationProps = {
  value?: string | null | undefined,
  otherValues?: Array<string>,
}

export type ValidateField = {
  fieldName: string;
  value: string;
  fieldValidations: Array<ValidationTest>;
}

export type ValidationResult = {
  name: string;
  result: boolean;
  errorMessage?: string;
}

export type ValidationResults = Array<ValidationResult>;

export type ValidatedField = ValidationResults | undefined;

export type ValidateFields = {
  values: Record<string, string>;
  validations: Record<string, Array<ValidationTest>>;
}

export type ValidatedFields = Record<string, ValidationResults>;