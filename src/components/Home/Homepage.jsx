import React from 'react'
import style from './Homepage.module.css'
import styled from 'styled-components'
import GamePlay from '../GamePlay/GamePlay'
import { Button } from '../style/Button'
const Homepage = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src='dice.svg' alt='dice' />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}
export default Homepage
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    gap: 2rem; 

    .content {
        text-align: center; 
    }

    .content h1 {
        font-size: 6rem;
        white-space: nowrap;
    }

    img {
        max-width: 100%; 
        height: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        .content h1 {
            font-size: 3rem; 
            white-space: normal;
        }

        img {
            width: 80%; 
            max-width: 250px;
        }
    }

    @media (max-width: 480px) {
        .content h1 {
            font-size: 2rem; 
        }

        img {
            width: 70%; 
        }
    }
`;


