import React, { Component } from 'react'
import styled from 'styled-components';

// Components
// Imported
import MainNavbar from '../../com../../components/navbars/MainNavbar';

// Styled
const HomeContainer = styled.div`
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #1c1e21;
`
const ExploreSection = styled.div`
    position: relative;
    top: 15vh;
`

export default class HomeScreen extends Component {
    render() {
        return (
            <HomeContainer>
                <MainNavbar />

                <ExploreSection className="container">
                            <p>Hello World</p>
                </ExploreSection>
                
            </HomeContainer>
        )
    }
}
