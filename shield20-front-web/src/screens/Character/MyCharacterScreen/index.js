import React from 'react'
import styled from 'styled-components';

// Components
// Imported
import MainNavbar from '../../../components/navbars/MainNavbar';

// Styled
const MyCharacterContainer = styled.div`
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #1c1e21;
`

export const MyCharacterScreen = () => {
    return (
        <MyCharacterContainer>
            <MainNavbar />
            Meus Personagens
        </MyCharacterContainer>
    )
}

const mapDispatchToProps = {
    
}

export default MyCharacterScreen;
