import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Hero = () => {
    return (
        <StyledContainer>
            <StyledDiv>
                <h1>
                    ola
                </h1>
            </StyledDiv>
        </StyledContainer>
    )
}

export default Hero