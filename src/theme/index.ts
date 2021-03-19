import { ref } from "vue";

import { dark, light } from "./themes";
import { Themes, ThemeName } from "./types";

export const DEFAULT_THEME: ThemeName = "dark";
export const THEME_REF = ref();

export const THEMES: Themes = {
  dark,
  light,
};
