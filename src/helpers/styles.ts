import { Style } from "@/types/styles";

export const propsToClasses = (styles: Style[]): string => {
  return (styles || [])
    .reduce((classes: string, style: Style): string => {
      const { value, defaultValue, values } = style;

      let appendClass = defaultValue;
      if (value !== null && value !== undefined) {
        appendClass = values[value?.toString()];
      }

      return appendClass ? `${classes} ${appendClass}` : classes;
    }, "")
    .trim();
};
