import { get, Theme } from "theme-ui";
import { fluidSpace, fluidTypography } from "../utils/fluid";

export const theme: Theme = {
  fonts: {
    body: '"Lato", sans-serif',
    heading: '"Lato", sans-serif',
    aside: '"Lato", sans-serif',
  },
  fontWeights: {
    light: 300,
    body: 400,
    bold: 600,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.1,
    mid: 1.3,
  },
  letterSpacings: {
    heading: "0.02em",
    body: "0.01em",
    aside: "0.16em",
    label: "0.12em",
  },
  colors: {
    text: "#2B3A3D",
    background: "#F5F5F9",
  },
  breakpoints: ["720px", "1024px", "1366px", "1680px"],
  fontSizes: {
    ...fluidTypography,
  },
  space: {
    ...fluidSpace,
  },
  sizes: {
    ...fluidSpace,
  },
  styles: {
    root: {
      // keep me to trigger body reset!
    },
    body: {
      display: "none",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
      borderBottom: "1px solid",
      borderColor: (t) => get(t, "colors.text"),
      transition: "opacity 0.2s linear",
      cursor: "pointer",

      "&:hover": {
        opacity: 0.6,
      },
    },
  },
  text: {
    default: {
      fontSize: 0,
      fontFamily: "body",
      fontWeight: "light",
      lineHeight: "body",
      letterSpacing: "body",
      color: "text",
    },
    body: {
      variant: "text.default",
    },
    heading: {
      fontSize: 0,
      fontFamily: "heading",
      fontWeight: "bold",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "text",
    },
    alpha: {
      variant: "text.heading",
      fontSize: 5,
    },
    beta: {
      variant: "text.heading",
      fontSize: 4,
    },
    gamma: {
      variant: "text.heading",
      fontSize: 3,
    },
    delta: {
      variant: "text.heading",
      fontSize: 2,
    },
    epsilon: {
      variant: "text.heading",
      fontSize: 1,
      lineHeight: "mid",
    },
    zeta: {
      variant: "text.heading",
      lineHeight: "body",
      fontWeight: "bold",
    },
  },
  images: {
    avatar: {
      width: 64,
      height: 64,
    },
  },
};
