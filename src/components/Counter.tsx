import React from "react";
import styled from "styled-components";

interface IProps {
  count: number;
}

export const Counter: React.FC<IProps> = ({ count }) => {
  return (
    <Container>
      <h1>The count is {count}</h1>
    </Container>
  );
};

const Container = styled.div`
  flex: 100%;
  text-align: center;
`;
