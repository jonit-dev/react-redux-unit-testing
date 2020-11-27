import React from "react";
import styled from "styled-components";

interface IProps {
  count: number;
}

export const Counter: React.FC<IProps> = ({ count }) => {
  return (
    <Container>
      <CounterDisplay data-test="count">{count}</CounterDisplay>
    </Container>
  );
};

const Container = styled.div`
  flex: 100%;
  text-align: center;
  margin-top: 5rem;
  padding: 1rem;
`;

const CounterDisplay = styled.span`
  font-size: 2rem;
  color: blueviolet;
`;
