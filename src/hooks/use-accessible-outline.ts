/**
 * Accessibly disable element outlines, i.e. disable by default but
 * re-enable when user presses tab to control the keyboard focus
 */

import { useState, useEffect } from "react";
import { CSSObject } from "theme-ui";

const useAccessibleOutline = (): CSSObject => {
  const [isTabbing, setTabbing] = useState(false);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setTabbing(true);
      }
    };

    const mouseListener = (e: MouseEvent) => {
      setTabbing(false);
    };

    window.addEventListener("keydown", keyListener);
    window.addEventListener("mousedown", mouseListener);

    return () => {
      window.removeEventListener("keydown", keyListener);
      window.removeEventListener("mousedown", mouseListener);
    };
  });

  return isTabbing
    ? {}
    : {
        "button:focus": {
          outline: "none",
        },
        "input:focus": {
          outline: "none",
        },
        "select:focus": {
          outline: "none",
        },
        "textarea:focus": {
          outline: "none",
        },
      };
};

export default useAccessibleOutline;
