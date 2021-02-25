import React, { Component } from 'react'

import gandalf from '../assets/images/wizard.png'
import styled from 'styled-components'


const StyledContainer = styled.div`
    width: 100vw;
    height:100vh;
    max-width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const StyledImg = styled.img`
    width: 150px;
    height:150px;
    margin:10px;
`

class YouShallNotPass extends Component {
    render() {

        return (
            <StyledContainer>
                

                <StyledImg src={gandalf} ></StyledImg>
                <h1>"You shall not pass!"</h1>
                <p>ainda estamos trabalhando por aqui</p>
            </StyledContainer>
        )
    }
}
export default YouShallNotPass