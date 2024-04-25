import { Card, createPolymorphicComponent } from "@mantine/core";
import { onTablet, theme } from "../themes";

import { CardProps } from "./interfaces";
import styled from "@emotion/styled";

const getWidthType = (w: any) => {
  return typeof w === "number" ? `${w}px` : w;
};

const _Container = styled(Card)<CardProps>`
  transition: all 0.2s ease-in-out;
  color: ${theme?.colors?.dark?.[4]};
  overflow: visible;
  width: ${({ width }) => (width ? getWidthType(width) : "100%")};
  margin: 0 auto;
  border: none;
  --paper-shadow: none !important;

  > div {
    &:first-of-type {
      padding: 0.5rem;
      color: ${theme?.colors?.purple?.[6]} !important;
      border: none;

      transition: all 0.2s ease-in-out;

      h2 {
        margin: 0;
        font-weight: 700;
        font-size: 1.125rem;

        ${onTablet} {
          font-size: 1.25rem;
        }
      }

      ${onTablet} {
        padding: 0.625rem;
      }
    }

    &:last-of-type {
      padding: 0.5rem;
      border: 3px dashed ${theme?.colors?.gray?.[3]} !important;
      border-radius: inherit;

      ${onTablet} {
        padding: 0.625rem;
      }
    }
  }
`;

const Container = createPolymorphicComponent<"div", CardProps>(_Container);

export { Container };
