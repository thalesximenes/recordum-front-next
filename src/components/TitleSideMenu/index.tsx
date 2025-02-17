import React, { isValidElement } from "react";

import { Container } from "./styles";
import { TextProps } from "./interfaces";

const TitleSideMenu = (props: TextProps) => {
  const { eixo, disciplina, direction = "column" } = props;
  return (
    <Container {...props} direction={direction}>
      <p>
        {isValidElement(disciplina)
          ? disciplina
          : handleEmptyString(disciplina)}
      </p>
      <label>{`${eixo}`}</label>
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

export default TitleSideMenu;
