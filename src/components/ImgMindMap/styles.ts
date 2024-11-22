import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  width: fit-content;
  line-height: 0;
`;

const MindMapContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  background-color: rgba(100, 100, 100, 0.7);
  text-align: center;
  line-height: 20px;
  cursor: move;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  border-radius: 20px;
`;

export { Container, MindMapContainer };
