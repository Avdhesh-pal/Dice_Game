import React, { useState } from "react";
import styled from "styled-components";
import Rule from "../Rule/Rule";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`dice_${currentDice}.png`} alt={`dice${currentDice}`} />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 3rem;
  }

  .dice {
    cursor: pointer;
  }
  
`;

