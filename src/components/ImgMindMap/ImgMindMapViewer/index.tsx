import { HoverCard, Image, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import Img from "@/components/Img";
import { ImgMindMapProps } from "../interfaces";
import { MindMapContainer } from "./styles";
import { theme } from "@/components/themes";

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
      <Image
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      {mindMaps.map((mM, index) => (
        <HoverCard width={280} shadow="md" key={index} closeDelay={1000}>
          <HoverCard.Target>
            <MindMapContainer
              style={{
                left: `${mM?.x * imgScale}px`,
                top: `${mM?.y * imgScale}px`,
                width: `${HINT_WIDTH}px`,
                height: `${HINT_HEIGHT}px`,
              }}
            >
              <Text lh={"16px"} fw={600}>
                {" "}
                {index + 1}
              </Text>
            </MindMapContainer>
          </HoverCard.Target>
          <HoverCard.Dropdown
            style={{
              border: `.25rem ${theme.colors.purple[5]} solid`,
              borderRadius: ".5rem",
            }}
          >
            <Text
              size="sm"
              c={theme.colors.purple[5]}
              fw={600}
              style={{ textAlign: "justify" }}
            >
              {mM.texto}
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      ))}
    </div>
  );
};

export default ImgMindMapViewer;
