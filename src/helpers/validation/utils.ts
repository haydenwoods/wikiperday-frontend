import { ValidateField, ValidatedField, ValidateFields, ValidatedFields } from "./types";

export const validateField = ({ fieldName, formValue, fieldValidations }: ValidateField): ValidatedField => {
  const hasValidation = fieldValidations && fieldValidations.length > 0;

  if (hasValidation) {
    const { value, display } = formValue;

    const results = fieldValidations?.map(({ name, test, errorMessage }) => {
      const res = test({ value });
      return {
        name,
        result: res ? true : false,
        errorMessage: !res ? `${display || fieldName} ${errorMessage}` : undefined,
      }
    });

    return results;
  }
}

export const validateFields = ({ values, validations }: ValidateFields): ValidatedFields => {
  const validationResults: ValidatedFields = {};
  
  Object.keys(values).forEach(fieldName => {
    const formValue = values[fieldName];
    const fieldValidations = validations[fieldName];
    const validatedField = validateField({ fieldName, formValue, fieldValidations });
    
    if (validatedField) {
      validationResults[fieldName] = validatedField;
    }
  });

  return validationResults;
}

export const findError = ({ validatedFields }: { validatedFields: ValidatedFields }): string | null => {
  let errorMessage: string | null = null; 
  
  Object.keys(validatedFields).some(fieldName => {
    const validatedField = validatedFields[fieldName];
    const fieldErrorMessage = validatedField.find(({ result }) => !result)?.errorMessage;

    if (fieldErrorMessage) {
      errorMessage = fieldErrorMessage;
      return true;
    }
    
    return false;
  });

  return errorMessage;
}