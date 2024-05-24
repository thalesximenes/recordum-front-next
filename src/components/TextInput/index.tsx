import { Container } from "./styles";
import { TextInputProps } from "./interfaces";

const TextInput = (props: TextInputProps) => {
  const { onClick, value, loading, ...otherProps } = props;

  return (
    <div style={{ position: "relative" }}>
      <Container
        {...otherProps}
        value={value}
        errorProps={{ size: "md" }}
        onChange={(e) => onClick && onClick(e.target.value)}
        withAsterisk={props.required}
      />
    </div>
  );
};

export default TextInput;
