import React, { Component } from 'react'
import { StyledContainer, StyledDiv } from '../assets/DefaultContainer'
import styled from 'styled-components'

const styledSection = styled.section`
    height: max-content;
`

class AboutMeSection extends Component {
    render() {
        return (
            <styledSection>
           <div>
                <h1>Filipe Neto</h1>
                <p>Front End jr Developer</p>
            </div>
            </styledSection>
 



        )
    }
}

export default AboutMeSection