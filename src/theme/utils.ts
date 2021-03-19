import { THEME_REF, THEMES } from ".";
import { Theme, ThemeName } from "./types";

export const getTheme = () => {
  return THEME_REF.value;
};

export const setTheme = (themeName: ThemeName) => {
  const themeData = THEMES[themeName];
  if (!themeData) return;

  THEME_REF.value = {
    name: themeName,
    ...themeData,
  };

  const root = document.documentElement;

  Object.keys(themeData).forEach((key) => {
    const themeName: ThemeName = key as ThemeName;
    if (!themeName) return;
    root.style.setProperty(`--${key}`, themeData?.[themeName] || null);
  });
};

export const extend = (base: Theme, override: Theme): Theme => {
  return { ...base, ...override };
};
