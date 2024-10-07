import { Container } from "./styles";
import { PasswordInputProps } from "./interfaces";

const PasswordInput = (props: PasswordInputProps) => {
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

export default PasswordInput;
