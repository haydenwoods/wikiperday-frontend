module.exports = {
  theme: {
    extend: {
      width: {
        "120": "30rem",
        "112": "28rem",
        "88": "22rem",
        "84": "21rem",
      },
      colors: {
        // Accents
        "accent-primary": "var(--accent-primary)",
        "accent-text-primary": "var(--accent-text-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-text-secondary": "var(--accent-text-secondary)",

        // Backgrounds
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",

        // Borders
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",

        // Titles
        "title-primary": "var(--title-primary)",
        "title-secondary": "var(--title-secondary)",
        "title-tertiary": "var(--title-tertiary)",
          
        // Texts
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",

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
  variants: {
    extend: {
      borderWidth: ["last"],
      padding: ["first", "last"],
    }
  }
}