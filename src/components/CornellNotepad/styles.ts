import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0.2rem;
  /* background-color: steelblue; */

  display: flex;
  flex-direction: column;

  height: 600px;
`;

const MiddleSection = styled.div`
  position: relative;
  padding: 0 0.2rem 0 0.2rem;
  /* background-color: thistle; */
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  height: 85%;
  position: relative;

  overflow-y: scroll;
`;

const Topics = styled.div`
  padding: 0.2rem;
  position: relative;
  /* background-color: burlywood; */
  /* border: 0.5px solid rgba(0, 0, 0, 0.1); */

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* flex-grow: 0.3; */
  /* min-width: 20%; */
  width: 20%;
  min-width: 100px;
  /* height: 100%; */

  .new {
    margin-bottom: 0.5rem;
  }
`;

const TopicPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  > div {
    margin: 1rem 0 !important;
  }
`;

const Topic = styled.div<{ color?: string }>`
  padding: 0.4rem;
  background-color: ${({ color }) => color ?? "#fff"};
  border-radius: 8px;
  word-break: break-word;

  /* margin-top: 0.5rem; */
  cursor: pointer;

  &:first-of-type {
    margin-top: 0;
  }

  &.new {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #000;
  }
`;

const MiddleDivider = styled.div`
  position: sticky;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  top: 0;
  bottom: 0;
  left: 0;
`;

const Notes = styled.div`
  padding: 0.2rem;
  /* background-color: chocolate; */
  /* border: 0.5px solid rgba(0, 0, 0, 0.1); */

  /* flex-grow: 0.7; */
  /* min-width: 70%; */
  width: 100%;
  line-height: 0;
  /* max-width: 80%; */
  /* overflow-y: scroll; */

  > div {
    /* height: ; */
  }
  > textarea {
    width: 100%;
    padding: 0.5rem;
    overflow: hidden;
    resize: none;
    line-height: 20px;

    /* background-color: cornflowerblue; */
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    outline: none;
  }
`;

const Note = styled.textarea<{ color: string }>`
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
  resize: none;
  line-height: 20px;

  background-color: ${({ color }) => color ?? "transparent"};
  /* border: 2px solid ${({ color }) => color ?? "rgba(0, 0, 0, 0.1)"}; */
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;

  &:not(:first-of-type) {
    margin-top: 0.5rem;
  }
`;

const BottomSection = styled.div`
  /* position: relative; */
  padding: 0 0.2rem 0.2rem 0.2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-top: 0;
  /* background-color: cornsilk; */

  display: flex;
  height: 15%;
  /* min-height: 15%; */
`;

const Summary = styled.div`
  padding: 0.2rem;
  /* background-color: lightseagreen; */

  flex-grow: 1;
`;

export {
  Container,
  MiddleSection,
  Topics,
  TopicPreview,
  Topic,
  MiddleDivider,
  Notes,
  Note,
  BottomSection,
  Summary,
};
