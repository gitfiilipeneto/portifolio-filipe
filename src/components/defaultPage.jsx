import React, { Component } from 'react'
import { StyledContainer } from '../assets/style'

class DefaultPage extends Component {
    render() {
        return (
            <StyledContainer>
                
                <h1> {this.props.ProjectTittle} </h1>,

                <h2> {this.props.Comment} </h2>,

                <p> {this.props.techs} </p>
            </StyledContainer>

        )
    }
}

export default DefaultPage