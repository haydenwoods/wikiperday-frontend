import { Theme, } from "../types";
import { COLORS, } from "../colors";

export const base: Theme = {
  // Accents
  "accent-primary": COLORS["blue-500"],
  "accent-text-primary": COLORS["blue-100"],
  "accent-secondary": COLORS["blue-300"],
  "accent-text-secondary": COLORS["blue-100"],

  // Varieties
  "accent-blue": COLORS["blue-300"],
  "accent-red": COLORS["red-300"],
  "accent-green": COLORS["green-300"],
  "accent-orange": COLORS["orange-300"],
  "accent-purple": COLORS["purple-300"],
  
  // Backgrounds
  "background-primary": COLORS["grey-50"],
  "background-secondary": COLORS["white"],

  // Borders
  "border-primary": COLORS["grey-200"],
  "border-secondary": COLORS["grey-400"],

  // Titles
  "title-primary": COLORS["grey-700"],
  "title-secondary": COLORS["grey-500"],
  "title-tertiary": COLORS["white"],

  // Texts
  "text-primary": COLORS["grey-800"],
  "text-secondary": COLORS["grey-600"],
  "text-tertiary": COLORS["white"],

  // Inputs
  "input-border-primary": COLORS["grey-300"],
  "input-text-primary": COLORS["grey-800"],
  "input-text-secondary": COLORS["grey-300"],
};