export const theme = {
  colors: {
    background: "#FFF8EC",
    surface: "#FFFCF7",

    primary: "#2B211B",
    secondary: "#5E5148",

    accent: "#C99648",
    accentDark: "#8A5A3B",

    cream: "#F3E8D2",

    border: "rgba(139,90,59,0.12)",
    borderStrong: "rgba(139,90,59,0.20)",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadow: {
    sm: "0 6px 20px rgba(43,33,27,.05)",
    md: "0 18px 50px rgba(43,33,27,.08)",
    lg: "0 24px 64px rgba(43,33,27,.18)",
  },

  typography: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Inter', sans-serif",
  },

  transition: {
    fast: "150ms ease",
    base: "300ms ease",
    slow: "500ms ease",
  },
} as const;
