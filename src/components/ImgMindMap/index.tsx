import { Container, MindMapContainer } from "./styles";
import { Row, RowItem } from "../Row";
import { useEffect, useRef, useState } from "react";

import Btn from "../Btn";
import Draggable from "react-draggable";
import { ImgMindMapProps } from "./interfaces";
import ImgMindMapViewer from "./ImgMindMapViewer";

const ImgMindMap = (props: ImgMindMapProps) => {
  const { src, alt, width, height, mindMaps: mindMapsInitial = [] } = props;
  const [imgScale, setImgScale] = useState<number>(1);
  const [imgScaleO, setImgScaleO] = useState<number>(1);
  const [infoPosition, setInfoPosition] = useState<any>(null);
  const [dragPosition, setDragPosition] = useState<any>(null);
  const [mindMaps, setMindMaps] = useState<any>(mindMapsInitial);

  const containerRef = useRef<HTMLDivElement>(null);

  const HINT_WIDTH = 20;
  const HINT_HEIGHT = 20;

  const handleClickMovement = (e: any) => {
    if (!e?.target?.draggable) return;
    const target = containerRef?.current as HTMLElement;
    const rect = target.getBoundingClientRect();
    const clientRectX = e.pageX - e.clientX + rect.left;
    const clientRectY = e.pageY - e.clientY + rect.top;

    const x = e.pageX + target.scrollLeft - clientRectX - HINT_WIDTH / 2;
    const y = e.pageY + target.scrollTop - clientRectY - HINT_HEIGHT / 2;

    setInfoPosition(adjustPosition({ x, y }));
  };

  const handleDragMovement = (e: any) => {
    const x = infoPosition.x + e.pageX - dragPosition.pageX;
    const y = infoPosition.y + e.pageY - dragPosition.pageY;

    setInfoPosition(adjustPosition({ x, y }));
  };

  const adjustPosition = ({ x, y }: { x: number; y: number }) => {
    if (0 > x) {
      x = 0;
    }

    if (0 > y) {
      y = 0;
    }

    if (x + HINT_WIDTH > +width * imgScale) {
      x = +width * imgScale - HINT_WIDTH;
    }

    if (y + HINT_HEIGHT > +height * imgScale) {
      y = +height * imgScale - HINT_HEIGHT;
    }

    return {
      x: Math.floor(x),
      y: Math.floor(y),
    };
  };

  useEffect(() => {
    const target = containerRef?.current as HTMLElement;
    const handleResize = () => {
      if (target) {
        setImgScale(target.clientWidth / +width);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (target) resizeObserver.observe(target);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <Container
        onClick={(e: any) => handleClickMovement(e)}
        onKeyDown={() => null}
        ref={containerRef}
      >
        <ImgMindMapViewer
          src={src}
          alt={alt}
          width={width}
          mindMaps={mindMaps}
        />
        {infoPosition && (
          <Draggable
            bounds={{
              left: -infoPosition?.x,
              top: -infoPosition?.y,
              right: -infoPosition?.x + +width * imgScale - HINT_WIDTH,
              bottom: -infoPosition?.y + +height * imgScale - HINT_HEIGHT,
            }}
            position={{ x: 0, y: 0 }}
            onStart={(e) => setDragPosition(e)}
            onStop={handleDragMovement}
          >
            <MindMapContainer
              style={{
                left: `${infoPosition?.x}px`,
                top: `${infoPosition?.y}px`,
                width: `${HINT_WIDTH}px`,
                height: `${HINT_HEIGHT}px`,
              }}
            />
          </Draggable>
        )}
      </Container>
      <Row>
        <RowItem>
          <Btn
            disabled={!infoPosition}
            onClick={() => {
              setInfoPosition(null);
              setMindMaps([
                ...mindMaps,
                {
                  x: infoPosition.x / imgScale,
                  y: infoPosition.y / imgScale,
                  info: "Teste Info",
                },
              ]);
            }}
          >
            Adicionar
          </Btn>
        </RowItem>
      </Row>
    </>
  );
};

export default ImgMindMap;
