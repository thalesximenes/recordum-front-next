import { Text, Tooltip } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import Img from "@/components/Img";
import { ImgMindMapProps } from "../interfaces";
import { MindMapContainer } from "./styles";

const ImgMindMapViewer = (props: ImgMindMapProps) => {
  const { src, alt, width, mindMaps } = props;
  const [imgScale, setImgScale] = useState<number>(1);

  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const HINT_WIDTH = 20;
  const HINT_HEIGHT = 20;

  useEffect(() => {
    const target = viewerContainerRef?.current as HTMLElement;
    const handleResize = () => {
      if (target) {
        setImgScale(target.clientWidth / +width);
      }
    };

    handleResize();
    const viewerResizeObserver = new ResizeObserver(handleResize);
    if (target) viewerResizeObserver.observe(target);

    return () => viewerResizeObserver.disconnect();
  }, []);

  return (
    <div ref={viewerContainerRef}>
      <Img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          maxWidth: width,
          height: "auto",
        }}
      />
      {mindMaps.map((mM, index) => (
        <Tooltip label={mM?.info} key={index}>
          <MindMapContainer
            style={{
              left: `${mM?.x * imgScale}px`,
              top: `${mM?.y * imgScale}px`,
              width: `${HINT_WIDTH}px`,
              height: `${HINT_HEIGHT}px`,
            }}
          >
            <Text lh={"16px"} fw={600}>
              {index + 1}
            </Text>
          </MindMapContainer>
        </Tooltip>
      ))}
    </div>
  );
};

export default ImgMindMapViewer;
