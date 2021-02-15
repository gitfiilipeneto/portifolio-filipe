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

const StyledTag = styled.p`
    border: 1px black solid;
    font-size: 14px;
    width:max-content;
    padding: 3px;
`

const Hero = () => {
    return (
        <StyledContainer>
            <StyledDiv>

                <h1>
                    nome do projeto
                </h1>

                <div>
                    <h2>
                        Descrição do projeto
                    </h2>

                    <StyledTag>tags</StyledTag>
                </div>
            </StyledDiv>

        </StyledContainer>
    )
}

export default Hero