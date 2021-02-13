module.exports = {
  theme: {
    extend: {
      width: {
        "120": "30rem",
        "112": "28rem",
      },
      colors: {
        // Accents
        "accent-primary": "var(--accent-primary)",
        "accent-text-primary": "var(--accent-text-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-text-secondary": "var(--accent-text-secondary)",

        // Backgrounds
        "background-primary": "var(--background-primary)",

        // Titles
        "title-primary": "var(--title-primary)",
          
        // Texts
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        // Inputs
        "input-background-primary": "var(--input-background-primary)",
        "input-border-primary": "var(--input-border-primary)",
        "input-text-primary": "var(--input-text-primary)",
        "input-text-secondary": "var(--input-text-secondary)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "base": "0.95rem",
      },
    },
  },
}