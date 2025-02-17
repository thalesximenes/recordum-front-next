import { Meta, StoryObj } from "@storybook/react";

import FaEllipsisV from "@/public/images/faEllipsisV.svg";
import IconBtn from "./index";
import { IconBtnProps } from "./interfaces";

export default {
  title: "Button/Icon Btn",
  component: IconBtn,
  args: {
    children: <FaEllipsisV fill="currentColor" width={16} height={16} />,
  },
} as Meta<IconBtnProps>;

type Story = StoryObj<IconBtnProps>;

export const Default: Story = {
  args: {},
};
