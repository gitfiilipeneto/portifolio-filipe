import React from 'react'
import DefaultPage from '../components/defaultPage'



const ProjetoTeste = () => {

    let tecnologias = ['tech1', 'tech2']
    
    return(
        <DefaultPage
        
        projectTittle = "Class component tittle"
        comment = "Comment Class component Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        techs = {tecnologias}

        />
    )
}

export default ProjetoTeste