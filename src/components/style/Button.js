import styled from "styled-components";

export const Button = styled.button`  
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  font-size: 2rem;
  border: 2px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: grey;
  }
`;
