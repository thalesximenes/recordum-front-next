import styled from "@emotion/styled";
import { theme } from "@/components/themes";

const Container = styled.div`
  position: relative;
  width: fit-content;
  line-height: 0;
`;

const MindMapContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  text-align: center;
  line-height: 20px;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  border-radius: 20px;
  background-color: ${theme?.white};
  border: 2px solid ${theme?.colors?.purple?.[6]};
  color: ${theme?.colors?.purple?.[6]};
  cursor: pointer;
`;

export { Container, MindMapContainer };
