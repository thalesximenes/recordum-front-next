import { LoadingOverlay, Text, Tooltip } from "@mantine/core";

import { Container } from "./styles";
import Img from "../Img";
import React from "react";
import { Row } from "../Row";
import { VideoThumbProps } from "./interfaces";
import { theme } from "../themes";

const VideoThumb = ({
  src,
  alt,
  onClick,
  title,
  description,
  description2,
  loading = false,
  summarized = false,
}: VideoThumbProps) => {
  return (
    <Container>
      {!summarized ? (
        <VideoLarge
          src={src}
          alt={alt}
          onClick={onClick}
          title={title}
          description={description}
          description2={description2}
          loading={loading}
        />
      ) : (
        <VideoSummarized
          src={src}
          alt={alt}
          onClick={onClick}
          title={title}
          loading={loading}
        />
      )}
    </Container>
  );
};

const VideoLarge = ({
  src,
  alt,
  onClick,
  title,
  description,
  description2,
  loading = false,
}) => {
  return (
    <>
      <Img
        src={src}
        alt={alt}
        height={100}
        width={175}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
      <Row>
        <Tooltip label={title}>
          <Text
            maw={175}
            lineClamp={1}
            c={theme?.colors?.purple[6]}
            fw={500}
            size="20px"
          >
            {title}
          </Text>
        </Tooltip>
      </Row>
      <Row style={{ margin: 0 }}>
        <Tooltip label={description}>
          <Text maw={82} lineClamp={1} c={theme?.colors?.purple[6]}>
            {description}
          </Text>
        </Tooltip>
        <div style={{ padding: "0 5px 0 5px" }}>
          <Text c={theme?.colors?.purple[6]}>{"|"}</Text>
        </div>
        <Tooltip label={description2}>
          <Text maw={82} lineClamp={1} c={theme?.colors?.purple[6]}>
            {description2}
          </Text>
        </Tooltip>
      </Row>
      <LoadingOverlay visible={loading} />
    </>
  );
};

const VideoSummarized = ({ src, alt, onClick, title, loading = false }) => {
  return (
    <>
      <Img
        src={src}
        alt={alt}
        height={67}
        width={116}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
      <Row>
        <Tooltip label={title}>
          <Text
            maw={116}
            lineClamp={1}
            c={theme?.colors?.purple[6]}
            fw={500}
            size="14px"
          >
            {title}
          </Text>
        </Tooltip>
      </Row>
      <LoadingOverlay visible={loading} />
    </>
  );
};

export default VideoThumb;
