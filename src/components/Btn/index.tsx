import { BtnProps } from "./interfaces";
import { Container } from "./styles";
import { DefaultMantineColor } from "@mantine/core";
import useWindowSize from "../../hooks/useWindowSize";

const Btn = ({
  size,
  children,
  radius,
  template,
  type,
  onClick,
  ...otherProps
}: BtnProps) => {
  const { isTablet } = useWindowSize();

  const getColor = (template: BtnProps["template"]): DefaultMantineColor => {
    switch (template) {
      case "primary":
        return "purple.6";
      case "secondary":
        return "purple.7";
      default:
        return "white.0";
    }
  };

  return (
    <Container
      {...otherProps}
      template={template}
      size={size ?? (isTablet ? "md" : "sm")}
      radius={radius ?? "md"}
      color={getColor(template)}
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      {children}
    </Container>
  );
};

export default Btn;
