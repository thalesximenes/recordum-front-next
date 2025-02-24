import { Meta, StoryObj } from "@storybook/react";

import CornellNotepad from "./index";
import { CornellNotepadProps } from "./interfaces";

export default {
  title: "Layout/CornellNotepad",
  component: CornellNotepad,
  args: {},
} as Meta<CornellNotepadProps>;

type Story = StoryObj<CornellNotepadProps>;

export const Default: Story = {
  args: {},
};
