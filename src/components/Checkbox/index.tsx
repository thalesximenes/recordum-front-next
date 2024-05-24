import { Container, CustomRowItem, Item } from "./styles";

import { CheckboxGroupProps } from "./interfaces";
const Checkbox = (props: CheckboxGroupProps) => {
  const { onChange, loading, items, ...otherProps } = props;

  return (
    <div style={{ position: "relative" }}>
      <Container
        {...otherProps}
        size={"md"}
        onChange={(e) => onChange && onChange(e)}
      >
        {items?.map((i, index) => (
          <CustomRowItem key={index}>
            <Item value={i.value} label={i.label} />
          </CustomRowItem>
        ))}
      </Container>
    </div>
  );
};

export default Checkbox;
