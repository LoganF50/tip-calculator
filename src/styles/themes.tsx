const defaultTheme = {
  borderStyles: {
    none: "none",
    solid: "solid",
  },
  borderRadius: {
    none: "0",
    base100: "0.25rem",
    base200: "0.375rem",
    base300: "0.5rem",
    base400: "1rem",
    base500: "2rem",
    circular: "9999rem",
  },
  borderWidth: {
    none: "0",
    base100: "1px",
    base200: "2px",
    base300: "4px",
    base400: "8px",
  },
  duration: {
    short: "250ms",
    medium: "375ms",
    long: "500ms",
  },
  fontFamily: {},
  fontSize: {
    base100: "0.75rem",
    base200: "0.875rem",
    base300: "1rem",
    base400: "1.125rem",
    base500: "1.25rem",
    base600: "1.5rem",
    base700: "2rem",
    base800: "3rem",
    base900: "4rem",
    base1000: "6rem",
  },
  fontWeight: {
    thin: "100",
    extraLight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  },
  spacing: {
    base100: "0.125rem",
    base200: "0.25rem",
    base300: "0.5rem",
    base400: "0.75rem",
    base500: "1rem",
    base600: "1.25rem",
    base700: "1.75rem",
    base800: "2rem",
    base900: "2.25rem",
    base1000: "3rem",
  },
};

const darkTheme = {
  name: "dark",
  color: {},
};

const lightTheme = {
  name: "light",
  color: {},
};

const frontendMentorTheme = {
  name: "frontendMentor",
  color: {
    error: "#c6847b",
    buttonActive: "#9fe8df",
    primary: "hsl(172, 67%, 45%)",
    cyan500: "hsl(183, 100%, 15%)",
    cyan400: "hsl(186, 14%, 43%)",
    cyan300: "hsl(184, 14%, 56%)",
    cyan200: "hsl(185, 41%, 84%)",
    cyan100: "hsl(189, 41%, 97%)",
    white: "hsl(0, 0%, 100%)",
  },
  fontFamily: {
    primary: "Space Mono, monospace",
  },
  fontSize: {
    ...defaultTheme.fontSize,
    input: defaultTheme.fontSize.base600,
  },
  borderRadius: {
    ...defaultTheme.borderRadius,
    input: defaultTheme.borderRadius.base100,
    container: defaultTheme.borderRadius.base400,
  },
};

export const themes = {
  dark: {
    ...defaultTheme,
    name: darkTheme.name,
  },
  light: {
    ...defaultTheme,
    name: lightTheme.name,
  },
  frontendMentor: {
    ...defaultTheme,
    name: frontendMentorTheme.name,
    borderRadius: frontendMentorTheme.borderRadius,
    fontFamily: frontendMentorTheme.fontFamily,
    fontSize: frontendMentorTheme.fontSize,
    color: frontendMentorTheme.color,
  },
};
