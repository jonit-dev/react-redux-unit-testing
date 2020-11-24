import "./App.css";

import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState<number>(0);

  const onIncrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <></>
    // <Container>
    //   <Counter count={count} />
    //   <ButtonContainer>
    //     <button onClick={onIncrementCounter}>Increment counter</button>
    //   </ButtonContainer>
    // </Container>
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
