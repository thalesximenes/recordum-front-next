import { TextInputProps as MTextInputProps } from "@mantine/core";

export interface TextInputProps extends MTextInputProps {
  value?: any;
  setValue?: (value: any) => void;
  loading?: boolean;
}
