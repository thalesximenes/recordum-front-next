import { TextInput, createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import { onTablet, theme } from "../themes";
import { TextInputProps } from "./interfaces";

const _Container = styled(TextInput)`
  transition: all 0.2s ease-in-out;

  label {
    font-weight: 400;
    font-size: 0.675rem;
    text-transform: uppercase;
    color: ${theme?.colors?.purple?.[6]};

    ${onTablet} {
      font-size: 0.875rem;
    }
  }

  > div {
    input {
      height: 25px;
      padding: 1px 0.625rem;

      border-radius: 0px;
      border-color: ${theme?.colors?.dark?.[0]};
      border: none;
      border-bottom: 2px solid ${theme?.colors?.dark?.[2]};
      transition: all 0.2s ease-in-out;

      font-size: 1rem;
      font-weight: 500;
      color: ${theme?.colors?.dark?.[4]};

      &::placeholder {
        color: ${theme?.colors?.dark?.[2]};
      }

      &:focus {
        border-bottom-color: ${theme?.colors?.purple?.[8]};
      }

      ${onTablet} {
        height: 48px;
        padding: 1px 0.75rem;
        font-size: 1.125rem;
      }
    }
  }

  .mantine-InputWrapper-error {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

const Container = createPolymorphicComponent<"input", TextInputProps>(
  _Container
);

export { Container };
