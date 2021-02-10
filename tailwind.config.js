module.exports = {
  theme: {
    extend: {
      colors: {
        "lightGreen": "hsl(106, 53%, 68%)",
        "green": "hsl(94, 46%, 57%)",
        "darkGreen": "hsl(96, 15%, 26%)",
        "lightWhite": "hsl(46, 74%, 92%)",
        "warn": "hsl(43, 84%, 64%)",
        "error": "hsl(0, 65%, 60%)",
        "opaqueBlack": "hsl(0, 0%, 0%, 0.05)",
        "gray-100": "hsl(46, 74%, 92%)",
        "gray-200": "hsl(45, 47%, 88%)",
        "gray-300": "hsl(47, 33%, 84%)",
        "gray-400": "hsl(46, 20%, 75%)",
        "gray-500": "hsl(45, 9%, 58%)",
        "gray-600": "hsl(44, 7%, 40%)",
        "gray-700": "hsl(42, 8%, 32%)",
        "gray-800": "hsl(44, 8%, 27%)",
        "gray-900": "hsl(42, 9%, 23%)",
      },
      height: {
        "146": "36.5rem"  
      },  
      minHeight: {
        "tile": "24rem", 
      },
      boxShadow: {
        container: "5px 6px 0px 0px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
      gridTemplateColumns: {
       "barChart": "auto 1fr 48px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      backgroundColor: ["odd"],
      opacity: ["odd"],
    }
  }
}