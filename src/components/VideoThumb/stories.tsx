import { Meta, StoryObj } from "@storybook/react";
import { Row, RowItem } from "../Row";

import Checkbox from "../Checkbox";
import VideoThumb from "./index";
import { VideoThumbProps } from "./interfaces";
import thumb from "../../../public/images/bgCadastro.png";
import { useState } from "react";

export default {
  title: "Image/VideoThumb",
  component: VideoThumb,
  args: {
    title: "Int. à Genética",
    src: thumb,
    alt: "Vídeo",
    description: "Genética",
    description2: "Biologia",
  },
} as Meta<VideoThumbProps>;

type Story = StoryObj<VideoThumbProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Summarized: Story = {
  args: {
    summarized: true,
  },
};

export const VersusSummarized: Story = {
  render: (args) => {
    const [loading, setLoading] = useState([]);
    return (
      <>
        <Row align="flex-start" style={{ wrap: "nowrap" }}>
          <VideoThumb {...args} loading={loading.length === 1} />
          <VideoThumb {...args} summarized loading={loading.length === 1} />
        </Row>
        <Row>
          <RowItem>
            <Checkbox
              value={loading}
              onChange={setLoading}
              items={[{ label: "Loading", value: "" }]}
            />
          </RowItem>
        </Row>
      </>
    );
  },
};
