import { onDesktop, onTablet, theme } from "../themes";

import { TextProps } from "./interfaces";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";

const _Container = styled.div<TextProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  flex: ${({ flex }) => (flex ? "1" : "0")};
  padding: 0;
  justify-content: flex-start;
  text-align: left;

  flex-basis: ${({ fitContent }) =>
    fitContent ? "fit-content" : "calc(50% - 4px)"};

  label {
    margin-right: 0.5rem;
    white-space: nowrap;

    font-weight: ${({ weight }) => weight ?? "bold"};
    color: ${({ disciplinaColor }) =>
      disciplinaColor ?? `${theme.colors.purple?.[5]}`};

    font-size: ${({ size }) => size ?? "1.125rem"};
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
    font-weight: ${({ weight, eixo }) =>
      eixo || eixo === 0 ? weight ?? "400" : "bold"};
    color: ${({ eixoColor }) => eixoColor ?? `${theme.colors.purple?.[5]}`};

    font-size: ${({ size }) => size ?? "1rem"};
  }

  ${onTablet} {
    flex-basis: ${({ fitContent }) =>
      fitContent ? "fit-content" : "calc(25% - 8px)"};
  }

  ${onDesktop} {
    background: none;
  }
`;

const Container = createPolymorphicComponent<"div", TextProps>(_Container);

export { Container };
