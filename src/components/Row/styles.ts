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

const GroupItem = styled.div<RowItemProps>`
  max-width: 100%;
  flex: 1 1 150px;
  display: ${({ center, end }) => (center || end ? "flex" : "block")};
  justify-content: ${({ center, end }) =>
    end || center ? (end ? "flex-end" : "center") : "flex-start"};

  ${onTablet} {
    flex: 1 1 200px;
  }

  ${onDesktop} {
    flex: 1 1 300px;
  }
`;

export { Group, GroupItem };
