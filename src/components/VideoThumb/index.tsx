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
  width,
  height,
  onClick,
  title,
  description,
  description2,
  direction,
  loading = false,
  summarized = false,
}: VideoThumbProps) => {
  return (
    <Container>
      {!summarized ? (
        <VideoLarge
          src={src}
          alt={alt}
          width={width}
          height={height}
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
          direction={direction}
        />
      )}
    </Container>
  );
};

const VideoLarge = ({
  src,
  alt,
  width,
  height,
  onClick,
  title,
  description,
  description2,
  loading = false,
}) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick} onKeyDown={() => null}>
      <Img
        src={src}
        alt={alt}
        height={height || 100}
        width={width || 175}
        onClick={onClick}
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
    </div>
  );
};

const VideoSummarized = ({
  src,
  alt,
  onClick,
  title,
  loading = false,
  direction = "column",
}: {
  src: any;
  alt: any;
  onClick: any;
  title: string;
  loading: boolean;
  direction: any;
}) => {
  return (
    <>
      <Row
        style={{
          flexDirection: direction,
          flexWrap: "nowrap",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Img src={src} alt={alt} height={67} width={116} />
        <Tooltip label={title}>
          <Text
            maw={direction === "column" && 116}
            lineClamp={direction === "column" && 1}
            lh={"20px"}
            c={theme?.colors?.purple[6]}
            fw={500}
            size="16px"
            style={{ alignSelf: "center" }}
            onClick={onClick}
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
