import React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const IconText: React.FC<Props> = ({ icon, children }) => {
  const outer: ThemeUIStyleObject = {
    display: "inline-flex",
    height: "s",
  };

  const iconContainer: ThemeUIStyleObject = {
    mr: "3xs",
    alignItems: "center",
    display: "inline",

    svg: {
      height: "xs",
      fill: "text",
    },
  };

  return (
    <Box sx={outer} as="span">
      <Box sx={iconContainer} as="span">
        {icon}
      </Box>
      {children}
    </Box>
  );
};

export default IconText;
