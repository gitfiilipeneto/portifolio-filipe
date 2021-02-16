import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/images/HeroImg.png'

const StyledContainer = styled.div`
width: 100vw;
height: 100vh;
max-width: 100%;
max-height: 100%;
display:flex;
background:url(${heroImage});
object-fit: cover;
position:relative;
justify-content:center;

`

const Layer = styled.div`
background-color: rgba(63, 127, 146, 0.5);
position: absolute;
width: 100%;
height: 100%;

`

const StyledDiv = styled.div`
    display: flex;
    margin: unset;
    align-items: center;
    justify-content: space-between;
    padding:20px;
    flex-direction: column;
`

const StyledTextBox = styled.div`
    // border: 1px black solid;
    height:auto;
    padding: 3px;
    z-index:1;
    color: white;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    & h1{
        font-size: 70px;
    }
    & p{
        font-size: 25px;
    }
`

const Hero = () => {
    return (
        <StyledContainer>
            <Layer/>
            <StyledTextBox>
                <h1>Filipe Neto</h1>
                <p>Front end Developer</p>
            </StyledTextBox>

        </StyledContainer>
    )
}

export default Hero