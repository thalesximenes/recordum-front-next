import { onDesktop, onTablet, theme } from "../themes";

import { TextProps } from "./interfaces";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";

const _Container = styled.div<TextProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  background: ${theme?.colors?.gray?.[2]};
  flex: ${({ flex }) => (flex ? "1" : "0")};

  border: 1px solid ${theme?.colors?.gray?.[3]};
  border-radius: 8px;
  padding: 0.5rem;
  justify-content: flex-start;
  text-align: left;

  flex-basis: ${({ fitContent }) =>
    fitContent ? "fit-content" : "calc(50% - 4px)"};

  label {
    margin-right: 0.5rem;
    white-space: nowrap;

    font-weight: ${({ weight }) => weight ?? "bold"};
    font-size: ${({ size }) => size ?? "0.875rem"};
    color: ${({ labelColor }) => labelColor ?? "#fff"};

    ${onTablet} {
      font-size: ${({ size }) => size ?? "1.125rem"};
    }
  }

  .mantine-Tooltip-tooltip {
    overflow: initial;
    white-space: initial;
    text-align: center;
    font-weight: 600;
    color: ${"#fff"};
  }

  p {
    margin: 0;
    font-weight: ${({ weight, text }) =>
      text || text === 0 ? weight ?? "400" : "bold"};
    font-size: ${({ size }) => size ?? "0.8125rem"};
    color: ${({ textColor }) => textColor ?? "#fff"};

    ${onTablet} {
      font-size: ${({ size }) => size ?? "1rem"};
    }
  }

  ${onTablet} {
    padding: 0.625rem;
    flex-basis: ${({ fitContent }) =>
      fitContent ? "fit-content" : "calc(25% - 8px)"};
  }

  ${onDesktop} {
    background: none;
    border: none;
  }
`;

const Container = createPolymorphicComponent<"div", TextProps>(_Container);

export { Container };
