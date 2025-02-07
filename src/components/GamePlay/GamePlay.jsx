import React, { useState } from "react";
import TotalScore from "../TotalScore/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import styled from "styled-components";
import RollDice from "../RollDice/RollDice";
import Rule from "../Rule/Rule";
import { Button } from "../style/Button";

const GamePlay = () => {
  const [error, seterror] = useState("");
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setshowRules] = useState(false);

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetScore = () => {
    setscore(0);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      seterror("❌   !! YOU HAVE NOT SELECTED ANY NUMBER");
      return;
    }
    seterror("");

    let rollingInterval = setInterval(() => {
      setCurrentDice(generateRandom(1, 6));
    }, 100);

    setTimeout(() => {
      clearInterval(rollingInterval);

      const finalNumber = generateRandom(1, 6);
      setCurrentDice(finalNumber);

      if (selectedNumber === finalNumber) {
        setscore((prev) => prev + finalNumber);
      } else {
        setscore((prev) => prev - selectedNumber);
      }
      setselectedNumber(undefined);
    }, 500);
  };

  return (
    <MainContainer>
      <TopSection>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </TopSection>

      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <ButtonContainer>
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setshowRules((prev) => !prev)}>Show Rules</Button>
      </ButtonContainer>

      {showRules && <Rule />}
    </MainContainer>
  );
};

export default GamePlay;

// Styled Components
const MainContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width:100vw;
  over-flow:hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
   flex-wrap: wrap; /* Allows elements to wrap if needed */
  width: 100%;
  max-width: 90%; /* Ensures content stays within the screen */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on small screens */
  }
     @media (max-width: 550px) {
    gap: 10px; /* Reduce spacing on extra small screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 550px) {
    max-width: 80%; /* Ensures buttons stay within screen width */
  }
`;
