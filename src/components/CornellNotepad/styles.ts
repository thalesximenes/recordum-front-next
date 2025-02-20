import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0.2rem;
  /* background-color: steelblue; */

  display: flex;
  flex-direction: column;

  height: 600px;
`;

const TopSection = styled.div`
  padding: 0.2rem 0.2rem 0 0.2rem;
  /* background-color: thistle; */

  display: flex;
  justify-content: space-between;
  height: 85%;
`;

const Topics = styled.div`
  padding: 0.2rem;
  /* background-color: burlywood; */
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* flex-grow: 0.3; */
  min-width: 30%;
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

  margin-top: 0.5rem;
  cursor: pointer;

  &:first-of-type {
    margin-top: 0;
  }

  &.new {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #000;
  }
`;

const Notes = styled.div`
  padding: 0.2rem;
  /* background-color: chocolate; */
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  /* flex-grow: 0.7; */
  min-width: 70%;
  overflow-y: scroll;

  > div {
    /* height: ; */

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
  }
`;

const Note = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  overflow: hidden;
  resize: none;
  line-height: 20px;

  /* background-color: cornflowerblue; */
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;
`;

const BottomSection = styled.div`
  position: relative;
  padding: 0 0.2rem 0.2rem 0.2rem;
  /* background-color: cornsilk; */

  display: flex;
  height: 15%;
  /* min-height: 15%; */
`;

const Summary = styled.div`
  padding: 0.2rem;
  /* background-color: lightseagreen; */
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  flex-grow: 1;
`;

export {
  Container,
  TopSection,
  Topics,
  TopicPreview,
  Topic,
  Notes,
  Note,
  BottomSection,
  Summary,
};
