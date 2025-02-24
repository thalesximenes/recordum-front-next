import { Container } from "./styles";
import React from "react";
import { TextProps } from "./interfaces";

const TextHover = (props: TextProps) => {
  const { hoverColor, textDecoration, children, onClick, ...otherProps } =
    props;
  console.log(otherProps.size);

  return (
    <Container
      {...otherProps}
      hoverColor={hoverColor}
      textDecoration={textDecoration}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      {children}
    </Container>
  );
};

export default TextHover;
