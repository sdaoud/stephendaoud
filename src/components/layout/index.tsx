import React from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "../../styles/theme";
import { Global } from "@emotion/react";
import { global } from "../../styles/global";
import useAccessibleOutline from "../../hooks/use-accessible-outline";
import "../../styles/fonts.css";
import "../../styles/utopia.css";

/**
 * Site-wide root layout component
 */
const Layout: React.FC = ({ children }) => {
  const outline = useAccessibleOutline();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={{ ...global, ...outline }} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
