import React, { Component } from 'react'
import styled from 'styled-components'

//estilizar cada cardzin pra tecnologia
//deixar a mente voar aqui

const StyledCardForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: max-content;
    border: 1px black solid;
    & img {
        width: 150px;
        height:150px;
    }
    & h2 {
        width: 150px;
        height:max-content;
        margin: unset;
        text-align: center;
    }
    & p {
        font-size: 11px;
        width: 180px;
        height:150px;
        text-align: justify;
    }
`


class FavoriteTechnologies extends Component {
    render() {
        return (

            <StyledCardForm>
                <img src={this.props.techLogo} />
                <h2>{this.props.techTittle}</h2>
                <p>{this.props.techText}</p>
            </StyledCardForm>

        )
    }
}

export default FavoriteTechnologies