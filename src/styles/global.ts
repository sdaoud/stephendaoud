import { CSSObject, get } from "theme-ui";

export const global: CSSObject = {
  html: {
    scrollBehavior: "smooth",
    overflowX: "hidden",
    margin: 0,
  },
  body: {
    overflowX: "hidden",
    margin: 0,
  },
  /* wrap long email addresses */
  'a[href^="mailto:"]': {
    wordBreak: "break-word",
  },
  /* don't wrap telephone numbers */
  'a[href^="tel:"]': {
    whiteSpace: "nowrap",
  },
};
