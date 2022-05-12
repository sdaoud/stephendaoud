import React from "react";
import { Box, Flex } from "theme-ui";
import { ThemeUIStyleObject } from "@theme-ui/css";

const Main: React.FC = ({ children }) => {
  const outer: ThemeUIStyleObject = {
    minHeight: "100vh",
    backgroundColor: "background",
  };

  const inner: ThemeUIStyleObject = {
    marginTop: "xl",
    mb: "2xl",
    width: "100%",
    maxWidth: "42rem",
    mx: "auto",
    p: "s",
    display: "flex",
  };

  return (
    <Flex sx={outer}>
      <Box as="main" sx={inner}>
        {children}
      </Box>
    </Flex>
  );
};

export default Main;
