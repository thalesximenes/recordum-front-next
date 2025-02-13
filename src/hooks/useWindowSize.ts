import React, { useEffect } from "react";

import { useMantineTheme } from "@mantine/core";

const useWindowSize = () => {
  const theme = useMantineTheme();
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window ? 1200 : window?.innerWidth,
    height: typeof window ? 800 : window?.innerHeight,
    isTablet: typeof window
      ? false
      : window?.innerWidth >= +theme?.breakpoints?.xs,
    isDesktop: typeof window
      ? false
      : window?.innerWidth >= +theme?.breakpoints?.sm,
  });

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
        isTablet: window?.innerWidth >= +theme.breakpoints.xs,
        isDesktop: window?.innerWidth >= +theme.breakpoints.sm,
      });
    };

    changeWindowSize();

    window?.addEventListener("resize", changeWindowSize);

    return () => {
      window?.removeEventListener("resize", changeWindowSize);
    };
  }, [theme.breakpoints.sm, theme.breakpoints.xs]);

  return windowSize;
};

export default useWindowSize;
