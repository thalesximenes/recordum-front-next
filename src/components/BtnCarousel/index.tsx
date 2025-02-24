import "@mantine/carousel/styles.css";

import { Btn, Container, Slide } from "./styles";

import { BtnCarouselProps } from "./interfaces";
import { Row } from "../Row";
import { theme } from "../themes";
import useWindowSize from "../../hooks/useWindowSize";

const BtnCarousel = ({ buttons }: BtnCarouselProps) => {
  const { isTablet } = useWindowSize();

  const getColor = (index: number) => {
    return theme?.colors?.random?.[index % 8];
  };

  return (
    <Row>
      <Container
        slideSize="1%"
        slideGap="xs"
        align="start"
        buttons={buttons}
        withControls={false}
      >
        {buttons?.map((b, i) => (
          <Slide key={i}>
            <Btn
              {...b}
              template={b?.template}
              size={b?.size ?? (isTablet ? "md" : "sm")}
              radius={b?.radius ?? "md"}
              bd={getColor(i)}
              onClick={(e: any) => {
                e.preventDefault();
                b?.onClick?.(e);
              }}
            >
              {b?.children}
            </Btn>
          </Slide>
        ))}
      </Container>
    </Row>
  );
};

export default BtnCarousel;
