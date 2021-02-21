module.exports = {
  theme: {
    extend: {
      width: {
        "320": "80rem",
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

        // Varieties
        "accent-blue": "var(--accent-blue)",
        "accent-red": "var(--accent-red)",
        "accent-green": "var(--accent-green)",
        "accent-orange": "var(--accent-orange)",
        "accent-purple": "var(--accent-purple)",

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