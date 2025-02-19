import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0.2rem;
  background-color: steelblue;

  display: flex;
  flex-direction: column;

  min-height: 600px;
`;

const TopSection = styled.div`
  padding: 0.2rem;
  background-color: thistle;

  display: flex;
  justify-content: space-between;
  flex-grow: 0.85;
`;

const Topics = styled.div`
  padding: 0.2rem;
  background-color: burlywood;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 0.3;
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
  background-color: chocolate;

  flex-grow: 0.7;

  > div {
    /* height: ; */

    > textarea {
      width: 100%;
      overflow: hidden;
      resize: none;
      line-height: 20px;

      background-color: cornflowerblue;
      border: none;
      outline: none;
    }
  }
`;

const BottomSection = styled.div`
  padding: 0.2rem;
  background-color: cornsilk;

  display: flex;
  flex-grow: 0.15;
`;

const Summary = styled.div`
  padding: 0.2rem;
  background-color: lightseagreen;

  flex-grow: 1;
`;

export {
  Container,
  TopSection,
  Topics,
  TopicPreview,
  Topic,
  Notes,
  BottomSection,
  Summary,
};
