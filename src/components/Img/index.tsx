import Image from "next/image";
import { ImgProps } from "./interfaces";

const Img = (props: ImgProps) => {
  const { src, alt, width, height } = props;
  const blurDataUrl =
    "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOs/w8AAgMBgMd74YAAAAAASUVORK5CYII=";

  if (typeof src === "string") {
    return width && height ? (
      <Image
        placeholder="blur"
        style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
        width={width}
        height={height}
        alt={alt}
        src={src}
        blurDataURL={blurDataUrl}
      />
    ) : (
      <Image
        placeholder="blur"
        layout={"fill"}
        alt={alt}
        src={src}
        blurDataURL={blurDataUrl}
      />
    );
  } else {
    return (
      <Image
        {...props}
        style={{ minWidth: props?.width ?? 0, minHeight: props?.height ?? 0 }}
        placeholder="blur"
        alt={alt}
        src={src}
        blurDataURL={blurDataUrl}
      />
    );
  }
};

export default Img;
