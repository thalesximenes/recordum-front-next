import { Meta, StoryObj } from "@storybook/react";

import CornellNotepad from "./index";
import { CornellNotepadProps } from "./interfaces";
import { theme } from "../themes";

export default {
  title: "Layout/CornellNotepad",
  component: CornellNotepad,
  args: {},
} as Meta<CornellNotepadProps>;

type Story = StoryObj<CornellNotepadProps>;

export const Default: Story = {
  args: {
    notesData: [
      {
        id: "n1",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent placerat dapibus arcu. Sed eleifend metus quis purus vestibulum ultricies.\nVestibulum quis mattis felis.\nMaecenas tempor tortor nisl, ac convallis orci sodales ut.\nFusce nibh tellus, placerat at enim ac, viverra dapibus arcu.",
        idTopic: "t1",
      },
      {
        id: "n2",
        value:
          "Aenean in arcu nulla. In tempus, justo nec aliquet lacinia, vitae nisi ex a diam.\nEtiam at quam eu tellus fermentum maximus.\nProin et iaculis dui. Etiam quis facilisis purus.\nVestibulum a placerat sem. Donec nec pellentesque sapien.\nMorbi dignissim iaculis commodo.\nDonec sed eros in elit consectetur lacinia eu et risus.\nSed tempor feugiat mauris, vel auctor elit.",
        idTopic: "t2",
      },
      {
        id: "n3",
        value:
          "Suspendisse vitae sem mi.\nPhasellus venenatis tristique diam, non pretium purus vulputate sit amet.\nSuspendisse consectetur sodales ullamcorper. Sed ac quam justo.\nDuis nec tincidunt tellus, a ullamcorper felis.\nDonec pulvinar sapien justo. Mauris sed mi neque.",
        idTopic: "t1",
      },
    ],
    topicsData: [
      {
        id: "t1",
        value: "Suspendisse potenti.",
        color: theme.colors.random[0],
      },
      {
        id: "t2",
        value: "Vestibulum quis mattis felis.",
        color: theme.colors.random[1],
      },
    ],
  },
};
