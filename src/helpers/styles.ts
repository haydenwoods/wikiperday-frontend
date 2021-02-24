type Style = {
  value?: string | boolean,
  values: Record<string, string>,
}

type ParseStylesProps = {
  defaults?: string,
  styles?: Array<Style>,
}

export const propsToClasses = ({ defaults, styles, }: ParseStylesProps): string => {
  return (styles || []).reduce((classes: string, style: Style): string => {
    const { 
      value, 
      values, 
    } = style;

    if (value !== undefined && value !== "") {
      const style: string = values[value?.toString()];
      return style ? `${classes} ${style}` : classes;
    }

    return classes;
  }, defaults || "").trim();
} 