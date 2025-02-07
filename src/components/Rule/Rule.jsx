import React from "react";
import styled from "styled-components";

const Rule = () => {
    return (
        <RulesContainer>
            <h2>🎲 How to Play Dice Game 🎲</h2>
            <RuleText>
                <li>🎯 <span>Select any number between <strong>1 to 6</strong>.</span></li>
                <li>🎲 <span>Roll the dice by clicking on the image.</span></li>
                <li>✅ <span>If the selected number matches the dice roll, you <strong>earn points</strong> equal to the selected value.</span></li>
                <li>❌ <span>If the guess is incorrect, the same points are <strong>deducted</strong> from your score.</span></li>
                <li>🔥 <span>Keep playing and try to reach the <strong>highest score</strong>!</span></li>
            </RuleText>
        </RulesContainer>
    );
};

export default Rule;
const RulesContainer = styled.div`
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
`;

const RuleText = styled.ul`
  text-align: left;
  font-size: 1rem;
  color: #333;
  list-style-type: none;
  padding: 0;

  li {
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    margin: 8px 0;
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  span {
    flex: 1;
  }

  strong {
    color: #d32f2f;
  }
`;
