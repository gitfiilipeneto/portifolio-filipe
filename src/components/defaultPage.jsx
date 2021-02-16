import React, { Component } from 'react'
import { StyledContainer, StyledDiv, StyledTag } from '../assets/DefaultContainer'

class DefaultPage extends Component {
    render() {
        let tecnologias = []
        // let tecnologias = this.props.tecnologias

        return (
            <StyledContainer>

                <StyledDiv>

                    <h1> {this.props.projectTittle} </h1>

                    <div>
                        <h2> {this.props.comment} </h2>

                        <StyledTag>{this.props.techs}</StyledTag>
                    </div>
                </StyledDiv>

            </StyledContainer>

        )
    }
}

export default DefaultPage