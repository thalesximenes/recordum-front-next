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

  flex-grow: 0.3;
`;

const Notes = styled.div`
  padding: 0.2rem;
  background-color: chocolate;

  flex-grow: 0.7;

  textarea {
    width: 100%;
    overflow: hidden;
    resize: none;
    line-height: 20px;

    background-color: cornflowerblue;
    border: none;
    outline: none;
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

export { Container, TopSection, Topics, Notes, BottomSection, Summary };
