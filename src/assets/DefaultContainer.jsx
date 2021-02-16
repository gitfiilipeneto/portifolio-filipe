import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    
`

const StyledDiv = styled.div`
width: 50vw;
display: flex;
margin: unset;
justify-content: space-between;
padding: 20px;
flex-direction: column;
& h2 {
    padding: 10px;
    font-size: 18px;
    background-color: lightblue;
}
`

const StyledTag = styled.p`
border: 1px black solid;
font-size: 14px;
width:max-content;
padding: 3px;
`

export {
    StyledContainer,
    StyledDiv,
    StyledTag
}