import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import Homepage from './components/Home/Homepage';
import GamePlay from './components/GamePlay/GamePlay';
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
function App() {
  const [count, setCount] = useState(0);
  const [isGamePlay, setisGamePlay] = useState(false);
  const toggleGamelay = () => {
    setisGamePlay(prevState => !prevState);
  }

  return (
    <>
      {isGamePlay ? <GamePlay /> : <Homepage toggle={toggleGamelay} />}
    </>
  )
}
export default App
