import { Row } from "../Row";
import { Text } from "@mantine/core";
import TextHover from "../TextHover";
import assert from "assert";
import { theme } from "../themes";
import { useRouter } from "next/router";

const BreadCrumbs = () => {
  const router = useRouter();
  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  if (typeof router.query.slug === "string") return <></>;

  return (
    <Row wrap="nowrap">
      <Row>
        <TextHover
          fw={500}
          style={{ cursor: `pointer`, width: "fit-content" }}
          c={theme?.colors?.purple[5]}
          hoverColor={theme?.colors?.purple[7]}
          textDecoration="underline"
          onClick={() => router.push("/home")}
        >
          Home
        </TextHover>
      </Row>
      {router?.query?.slug?.map((s, i) => {
        assert(typeof router?.query?.slug !== "string");
        const link = router?.query?.slug?.slice(0, i + 1)?.join("/");
        return (
          <Row wrap="nowrap" key={i} style={{ marginTop: 0 }}>
            <Text>{">"}</Text>
            <TextHover
              fw={500}
              lineClamp={1}
              w={100}
              style={{ cursor: `pointer`, width: "fit-content" }}
              c={theme?.colors?.purple[5]}
              hoverColor={theme?.colors?.purple[7]}
              textDecoration="underline"
              onClick={() => router.push(`/eixo-tematico/${link}`)}
            >
              {formatText(s)}
            </TextHover>
          </Row>
        );
      })}
    </Row>
  );
};

export default BreadCrumbs;
