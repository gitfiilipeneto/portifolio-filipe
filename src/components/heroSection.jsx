import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/images/HeroImg.png'

import gitHub from '../assets/images/github.png'
import insta from '../assets/images/instagram.png'
import linkedIn from '../assets/images/linkedin.png'


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
align-items:center;
`

const Layer = styled.div`
background-color: rgba(63, 127, 146, 0.5);
position: absolute;
width: 100%;
height: 100%;

`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
    flex-direction: column;
`

const StyledTextBox = styled.div`
    height:max-content;
    margin: 20px;
    padding: 25px;
    z-index:1;
    color: black;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2em;

    & div h1{
        font-size: 70px;
        margin: unset;
    }
    & div p{
        font-size: 25px;
        margin: unset;
    }

 
    & div img{
        
        max-width: 40px;
        
        margin: 5px;
    }
`

const Hero = () => {
    return (
        <StyledContainer>

            <Layer />

            <StyledTextBox>



                <h1>Filipe Neto</h1>
                <p> jr Front-end dev</p>

                <div>

                    <img src={gitHub} />
                    <img src={insta} />
                    <img src={linkedIn} />

                </div>




            </StyledTextBox>

        </StyledContainer>
    )
}

export default Hero