import { PasswordInputProps as MPasswordInputProps } from "@mantine/core";

export interface PasswordInputProps extends MPasswordInputProps {
  value?: any;
  setValue?: (value: any) => void;
  loading?: boolean;
}
