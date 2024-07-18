import { Container } from "./styles";
import { TextInputProps } from "./interfaces";

const TextInput = (props: TextInputProps) => {
  const { setValue, value, loading, ...otherProps } = props;

  return (
    <div style={{ position: "relative" }}>
      <Container
        {...otherProps}
        value={value}
        errorProps={{ size: "md" }}
        onChange={(e) => setValue && setValue(e.target.value)}
        withAsterisk={props.required}
      />
    </div>
  );
};

export default TextInput;
