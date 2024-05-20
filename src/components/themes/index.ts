import { DEFAULT_THEME, MantineThemeOverride } from "@mantine/core";

import { css } from "@emotion/react";

export const theme: MantineThemeOverride = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    random: [
      "#BD87DC",
      "#99E1E7",
      "#F1E9A8",
      "#8EEFA8",
      "#AEACF1",
      "#FEACF1",
      "#FFBC78",
      "#FF9C9C",
      "#FFFFFF",
      "#000000",
    ],
    gray: [
      "#E9ECEF", // '#F8F9FA',
      "#D8DBDE", // '#F1F3F5',
      "#E9ECEF", // '#E9ECEF',
      "#BAB8D7", // '#DEE2E6',
      "#CED4DA", // '#CED4DA',
      "#ADB5BD", // '#ADB5BD',
      "#868E96", // '#868E96',
      "#495057", // '#495057',
      "#343A40", // '#343A40',
      "#212529", // '#212529'
    ],
    purple: [
      "#CCD8E2",
      "#AAB6CD",
      "#8890B9",
      "#6666A4",
      "#50448E",
      "#412278",
      "#360162",
      "#20003E",
      "#4A004C",
      "#400034",
      "#34001F",
    ],
    green: [
      "#EBFBEE",
      "#D3F9D8",
      "#B2F2BB",
      "#8CE99A",
      "#69DB7C",
      "#51CF66",
      "#40C057",
      "#37B24D",
      "#01853B", // lighterGreen
      "#1D5237", // darkGreen
    ],
    dark: [
      "#C1C2C5",
      "#A6A7AB", // shadowColor
      "#909296",
      "#5C5F66",
      "#373435", // soletoColor
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#ef5350", // lighterRed
      "#f03e3e",
      "#e03131",
      "#5f2120", // darkRed
    ],
    yellow: [
      "#fff9db",
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#FADF4A", // warnYellowAlt
      "#ffd43b",
      "#E3B839", // warnYellow
      "#ff9800", // lighterYellow
      "#e67700",
      "#663c00", // darkYellow
    ],
  },
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
    lg: `#A6A7AB 2px 2px 10px`,
    xl: `#A6A7AB 4px 4px 10px`,
  },
  primaryColor: "purple",
  primaryShade: 6,
  defaultGradient: {
    from: "green.9",
    to: "green.8",
  },
  breakpoints: {
    xs: "481",
    sm: "769",
    md: "1025",
    lg: "1201",
    xl: "1401",
  },
};

export const customScroll = () => css`
  &::-webkit-scrollbar-thumb {
    scroll-margin-bottom: 0.625rem;
    outline: 1px solid transparent;
    background-color: slategray;
    border-radius: 0.625rem;

    &:hover {
      background-color: ${theme?.colors?.yellow?.[5]};
    }
  }

  &::-webkit-scrollbar {
    outline: 1px solid transparent;
    width: 0.25rem;
    height: 0.25rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar-button {
    outline: 0px solid transparent;
  }
`;

export const invisibleScroll = () => css`
  &::-webkit-scrollbar-thumb {
    scroll-margin-bottom: 0;
    outline: 0 solid transparent;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    outline: 0 solid transparent;
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-button {
    outline: 0 solid transparent;
  }
`;

export const onTablet = `
  @media screen and (min-width: ${theme?.breakpoints?.xs}px)
`;

export const onDesktop = `
  @media screen and (min-width: ${theme?.breakpoints?.sm}px)
`;

export const defaultTransition = `
  all .2s ease-in-out
`;

export const getCorrectHeightSize = () => {
  if (typeof window !== "undefined") {
    return `${window.innerHeight}px`;
  } else {
    return "100vh";
  }
};
