import { DefaultMantineColor, useMantineTheme } from "@mantine/core";

import { Container } from "./styles";
import { IconBtnProps } from "./interfaces";
import Link from "next/link";
import { forwardRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const IconBtn = forwardRef<HTMLButtonElement, IconBtnProps>(
  (props: IconBtnProps, ref) => {
    const theme = useMantineTheme();
    const { isTablet } = useWindowSize();
    const {
      linkPath,
      size,
      children,
      radius,
      template,
      variant,
      color,
      ...otherProps
    } = props;

    const getColor = (
      template: IconBtnProps["template"]
    ): DefaultMantineColor => {
      switch (template) {
        case "primary":
          return theme.primaryColor as DefaultMantineColor;
        case "secondary":
          return "green.9";
        default:
          return "gray.1";
      }
    };

    const getSize = (size: IconBtnProps["size"]): number => {
      switch (size) {
        case "xs":
          return 30;
        case "sm":
          return 36;
        case "md":
          return 42;
        case "lg":
          return 50;
        case "xl":
          return 60;
        default:
          return typeof size === "number" ? size : 42;
      }
    };

    const setVariant = () => {
      if (template) {
        if (template === "gradient") return template;
        return "filled";
      }

      if (variant) return variant;

      return "default";
    };

    return (
      <>
        {linkPath ? (
          <Link href={linkPath} passHref>
            <Container
              {...otherProps}
              size={isTablet ? getSize(size || "md") : getSize(size || "sm")}
              radius={radius || "md"}
              variant={setVariant()}
              color={template ? getColor(template) : color}
            >
              {children}
            </Container>
          </Link>
        ) : (
          <Container
            {...otherProps}
            ref={ref}
            size={isTablet ? getSize(size || "md") : getSize(size || "sm")}
            radius={radius || "md"}
            variant={setVariant()}
            color={template ? getColor(template) : color}
          >
            <div>{children}</div>
          </Container>
        )}
      </>
    );
  }
);

export default IconBtn;
