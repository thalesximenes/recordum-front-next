import { BtnListProps } from "./interfaces";
import { Container } from "./styles";
import { Row } from "../Row";
import { theme } from "../themes";
import useWindowSize from "../../hooks/useWindowSize";

const Btn = ({ buttons }: BtnListProps) => {
  const { isTablet } = useWindowSize();

  const getColor = (index: number) => {
    return theme?.colors?.random?.[index % 8];
  };

  return buttons?.map((b, i) => (
    <Row key={i}>
      <Container
        {...b}
        template={b.template}
        size={b.size ?? (isTablet ? "md" : "sm")}
        radius={b.radius ?? "md"}
        color={getColor(i)}
        onClick={(e: any) => {
          e.preventDefault();
          b.onClick?.(e);
        }}
      >
        Testes
      </Container>
    </Row>
  ));
};

export default Btn;
