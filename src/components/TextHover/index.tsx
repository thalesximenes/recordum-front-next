import React from "react";

import { Container } from "./styles";
import { TextProps } from "./interfaces";

const TextHover = (props: TextProps) => {
  const { hoverColor, textDecoration, children, onClick, ...otherProps } =
    props;

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
