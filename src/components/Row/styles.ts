import { onDesktop, onTablet } from "../themes";

import { Group as MGroup } from "@mantine/core";
import { RowItemProps } from "./interfaces";
import styled from "@emotion/styled";

const Group = styled(MGroup)`
  gap: 0.5rem;
  align-items: flex-start;

  &:not(:first-of-type) {
    margin-top: 0.5rem;

    ${onTablet} {
      margin-top: 0.625rem;
    }
  }

  ${onTablet} {
    gap: 0.625rem;
  }
`;

const GroupItem = styled(MGroup)<RowItemProps>`
  max-width: 100%;
  flex: 1 1 150px;
  display: ${({ center, end }) => (center || end ? "flex" : "block")};
  ${(props) => {
    let justifyContentValue = "flex-start";
    if (props.end) {
      justifyContentValue = "flex-end";
    } else if (props.center) {
      justifyContentValue = "center";
    }

    return `
      justify-content: ${justifyContentValue};
    `;
  }}

  ${onTablet} {
    flex: 1 1 200px;
  }

  ${onDesktop} {
    flex: 1 1 300px;
  }
`;

export { Group, GroupItem };
