import React, { Component } from 'react'
import lipeIcon from '../assets/images/lipe-icon.png'
import styled from 'styled-components'

const StyledSection = styled.section`
    
    height: max-content;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    alingn-items: center;

    background-color: rgba(63, 127, 146, 0.2);
`
const Styledimg = styled.img`
    
    max-width: 200px;
    height: auto;
`
const StyledDiv = styled.div`
    margin: 15px;
    width: 30vw;
    & h1{
        font-size:18px;
    }
    & h1:after{
        content: '';
        width: 100px;
        height: 1px;
        background: black;
        display: flex;
        padding-top: 
        // margin: 2px;
    }
    & p {
        font-size: 14px;
    }
    // & p:after{
    //     content: '';
    //     width: 100px;
    //     height: 2px;
    //     background: black;
    //     display: flex;
    //     margin: 2px;
    // }

`

class AboutMeSection extends Component {
    render() {
        return (
            <StyledSection>

                <Styledimg src = {lipeIcon}/>

                
                <StyledDiv>
                    <h1>About me</h1>
                    <p>Graduando em economia, apaixonado por tecnologia (principalmente por fones de ouvido) e um recém amante do basquete :D</p>
                    <h1>Contact Info</h1>
                </StyledDiv>
            </StyledSection>




        )
    }
}

export default AboutMeSection