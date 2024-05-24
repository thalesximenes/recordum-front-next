import styled from "@emotion/styled";
import { onDesktop, onTablet, theme } from "../themes";
import { Checkbox, createPolymorphicComponent } from "@mantine/core";
import { CheckboxGroupProps } from "./interfaces";

const _Container = styled(Checkbox.Group)<CheckboxGroupProps>`
  > .mantine-Group-root {
    align-items: flex-start;
    flex-wrap: ${({ noWrap }) => (noWrap ? "nowrap" : "wrap")};
  }

  .mantine-CheckboxGroup-label {
    font-weight: 400;
    font-size: 0.675rem;
    text-transform: uppercase;
    color: ${theme?.colors?.purple?.[6]};

    ${onTablet} {
      font-size: 0.875rem;
    }
  }

  .mantine-CheckboxGroup {
    &-error {
      font-size: 0.75rem;
      font-weight: 500;
      margin-left: 0.5rem;

      ${onTablet} {
        font-size: 0.875rem;
      }
    }

    &-description {
      font-size: 0.75rem;
      margin-left: 0.5rem;

      ${onTablet} {
        font-size: 0.875rem;
      }
    }
  }
`;

const Item = styled(Checkbox)`
  transition: all 0.2s ease-in-out;
  padding-bottom: 10px;

  .mantine-Checkbox-labelWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      padding-left: 0.5rem;
      cursor: pointer;
      line-height: 1;
      font-size: 0.75rem;
      font-weight: 500;
      color: ${theme?.colors?.dark?.[4]};

      ${onTablet} {
        padding-left: 0.75rem;
        font-size: 0.875rem;
      }
    }
  }

  > div {
    .mantine-Checkbox-inner {
      width: 1.25rem;
      height: 1.25rem;

      input {
        cursor: pointer;
        border: 2px solid ${theme?.colors?.dark?.[3]};
        border-radius: 2px;
        transition: all 0.2s ease-in-out;

        width: 1.25rem;
        height: 1.25rem;

        font-size: 1rem;
        font-weight: 500;
        color: ${theme?.colors?.dark?.[4]};

        &:checked {
          border-color: ${theme?.colors?.purple?.[8]};
          background-color: ${theme?.colors?.purple?.[8]};
        }

        ${onTablet} {
          width: 1.5rem;
          height: 1.5rem;
          font-size: 1.125rem;
        }
      }

      svg {
        width: 0.8125rem;

        ${onTablet} {
          width: 0.875rem;
        }
      }

      ${onTablet} {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

const CustomRowItem = styled.div`
  max-width: 100%;
  flex: 1 1 75px;

  ${onTablet} {
    flex: 1 1 100px;
  }

  ${onDesktop} {
    flex: 1 1 150px;
  }
`;

const Container = createPolymorphicComponent<"input", CheckboxGroupProps>(
  _Container
);

export { Container, Item, CustomRowItem };
