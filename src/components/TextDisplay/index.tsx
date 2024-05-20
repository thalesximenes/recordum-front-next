import React, { isValidElement } from "react";

import { Container } from "./styles";
import { TextProps } from "./interfaces";

const TextDisplay = (props: TextProps) => {
  const { label, text, direction = "column" } = props;
  return (
    <Container {...props} direction={direction}>
      <label>{`${label}`}</label>
      <p>{isValidElement(text) ? text : handleEmptyString(text)}</p>
    </Container>
  );
};

export const handleEmptyString = (text: any): string | React.ReactNode => {
  return text !== null && text !== "" && text !== undefined ? (
    text
  ) : (
    <strong>Não disponível</strong>
  );
};

export default TextDisplay;
