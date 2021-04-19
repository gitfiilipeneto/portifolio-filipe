import React from 'react'
import styled from 'styled-components'
import heroImage from '../assets/images/HeroImg.png'


import { ReactComponent as GitHubSVG } from '../assets/images/github.svg'
import { ReactComponent as LinkedinSVG } from '../assets/images/linkedin.svg'
import { ReactComponent as InstagramSVG } from '../assets/images/instagram.svg'



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

    & h1{
        font-size: 65px;
        margin: unset;
    }
    & p{
        font-size: 25px;
        margin: unset;
    }

 
    & div {
        width: 300px;
        align-items:center;        
        

    }
`
const SVGWrapper = styled.div`
    display: flex;
    justify-content:center;

    & svg{
            max-width: 45px;
            height:auto;
            margin: 2px;
            & :hover{

            fill:rgba(63, 127, 146, 0.5);
            }
        }
`

const Hero = () => {
    return (
        <StyledContainer>

            <Layer />

            <StyledTextBox>



                <h1>Filipe Neto</h1>
                <p> jr Front-end dev</p>

                <SVGWrapper>

                    <a href='https://github.com/gitfiilipeneto'>
                        <GitHubSVG />
                    </a>


                    <a href='https://www.linkedin.com/in/fiilipe-neto/'>
                        <LinkedinSVG />
                    </a>


                    <a href='https://www.instagram.com/fiilipeneto/'>
                        <InstagramSVG/>
                    </a>


                </SVGWrapper>




            </StyledTextBox>

        </StyledContainer>
    )
}

export default Hero