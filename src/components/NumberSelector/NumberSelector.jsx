import React, { useState } from 'react'
import styled from 'styled-components'
const arrNumber = [1, 2, 3, 4, 5, 6];
const NumberSelector = ({ seterror, error, selectedNumber, setselectedNumber }) => {

  return (
    <NumContainer>
      <p className='error_msg'>{error}</p>
      <div className='flex'>
        {arrNumber.map((value, i) => (

          <Box key={i}
            onClick={() => {
              setselectedNumber(value);
              seterror("");
            }}
            isSelected={value === selectedNumber}
          >{value}</Box>
        ))
        }
      </div>
      <p>Select Number</p>
    </NumContainer>
  )
}

export default NumberSelector
const Box = styled.div`
    width:4.5rem;
    height:4.5rem;
    border:1px solid black;
    font-size:1.5rem;
    font-weight:700;
    cursor:pointer;
    display:grid;
    place-items:center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color:${(props) => (!props.isSelected ? "black" : "white")};
`
const NumContainer = styled.div`
    display:flex;
    gap:2rem;
    flex-direction:column;
    align-items:flex-end;
    .flex {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;  
        justify-content: center; 
        width: 100%;
    }
    p{
        font-size:1.5rem;
        font-weight:700px;
    }
    .error_msg{
     color: red;
  font-weight: bold;
  display: flex;
  align-items: center;
    }
`