import React from 'react'
import styled from 'styled-components'
import FavoriteTechnologies from './favTechs'
import git from '../assets/images/github.png'
import { StyledContainer } from '../assets/DefaultContainer'

//criar o "grid" dos cards          

const GridFavTechs = () => {
    return (
        <StyledContainer>
            
            <FavoriteTechnologies
                techLogo={git}
                techText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                techTittle={"GIT"}
            />

        </StyledContainer>
    )
}

export default GridFavTechs