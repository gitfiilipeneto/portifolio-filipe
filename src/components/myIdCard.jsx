import React, { Component } from 'react'
import { StyledContainer, StyledDiv } from '../assets/DefaultContainer'
import gitHub from '../assets/images/github.png'
import insta from '../assets/images/instagram.png'
import linkedIn from '../assets/images/linkedin.png'


//social media Git,Instagram, linkedin




class PersonalCard extends Component {
    render() {
        return (

            <StyledContainer>
                <StyledDiv>
                    <h1>Filipe Neto</h1>
                    <p>Front End jr Developer</p>
                    <div> 
                         {/* fazer o grid do card */}
                        <img src={gitHub} />
                        <img src={insta} />
                        <img src={linkedIn} />
                    </div>

                </StyledDiv>
            </StyledContainer>

        )
    }
}

export default PersonalCard