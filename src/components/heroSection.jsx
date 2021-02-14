import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction:
`

const StyledDiv = styled.div`
    display: flex;
    margin: unset;
    align-items: center;
    justify-content: space-between;
    padding:20px;
    flex-direction: column;
`

const Hero = () => {
    return (
        <StyledContainer>
            <StyledDiv>
                <div>
                    <h1>
                        ola
                </h1>
                    <h2>
                        teste
                </h2>
                </div>
                <p>test tagging</p>
            </StyledDiv>

        </StyledContainer>
    )
}

export default Hero