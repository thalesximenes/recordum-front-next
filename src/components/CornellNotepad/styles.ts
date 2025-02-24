import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  height: 600px;
  overflow: hidden;
`;

const MiddleSection = styled.div`
  position: relative;
  padding: 0;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 85%;
  position: relative;

  overflow-y: auto;
`;

const Topics = styled.div`
  padding: 0.2rem;
  position: relative;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 20%;
  min-width: 100px;

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

  height: 100%;

  top: 0;
  bottom: 0;
  left: 0;
`;

const Notes = styled.div`
  padding: 0.2rem;

  width: 100%;
  line-height: 0;

  display: flex;
  flex-direction: column;
  min-height: 100%;

  cursor: pointer;

  > textarea {
    width: 100%;
    padding: 0.5rem;
    overflow: hidden;
    resize: none;
    line-height: 20px;

    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    outline: none;

    &:not(:first-of-type) {
      margin-top: 0.5rem;
    }
  }
`;

const Note = styled.textarea<{ color: string }>`
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
  resize: none;
  line-height: 20px;

  background-color: ${({ color }) => color ?? "transparent"};
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;

  &:not(:first-of-type) {
    margin-top: 0.5rem;
  }
`;

const AddNoteSign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 5rem;
  line-height: 30px;
  order: 999999;
  font-weight: 500;

  cursor: pointer;
`;

const BottomSection = styled.div`
  position: absolute;
  // top: calc(85% - 0.2rem);
  background-color: cadetblue;
  bottom: 0;
  left: 0;
  right: 0;

  // padding: 0 0.2rem 0.2rem 0.2rem;
  // border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-top: 0;

  display: flex;
  height: 15%;
  transition: 0.2s ease-in-out;

  &:focus-within {
    height: 90%;
    box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Summary = styled.textarea`
  padding: 0.5rem;

  border: 0.5px solid rgba(0, 0, 0, 0.1);
  resize: none;
  outline: none;

  flex-grow: 1;

  &::placeholder {
    font-weight: 500;
    color: #000;
  }
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
  AddNoteSign,
  BottomSection,
  Summary,
};
