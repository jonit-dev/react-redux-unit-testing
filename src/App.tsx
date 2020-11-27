import "./App.css";

import React, { useState } from "react";
import styled from "styled-components";

import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);

  const onCounterChange = (type: "INCREMENT" | "DECREMENT") => {
    switch (type) {
      case "INCREMENT":
        setCount(count + 1);
        break;
      case "DECREMENT":
        count > 0
          ? setCount(count - 1)
          : alert("The counter cannot go below 0!");
        break;
    }
  };

  return (
    <Container data-test="component-app">
      <Counter count={count} data-test="counter-display" />
      <ButtonContainer>
        <button
          onClick={() => onCounterChange("INCREMENT")}
          data-test="increment-button"
        >
          Increment counter
        </button>
        <button
          onClick={() => onCounterChange("DECREMENT")}
          data-test="decrement-button"
        >
          Decrement counter
        </button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const ButtonContainer = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
