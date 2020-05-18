import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import TextBanner from './banner01.png';
import ImgBanner from './panel.jpg';

import Register from '../RegisterScreen';
import Login from '../LoginScreen';
import WellcomeNavbar from '../../components/navbars/wellcomeNavbar';

const ImgContainer = styled.img`
    max-height: 90vh;
    position: absolute;
    top: 20%;
    left: 10%;
`

const Wellcome = () => {
    return (
        <>
            <ImgContainer src={TextBanner} />
            {/* <ImgContainer src={ImgBanner} /> */}
        </> 
    )
}


export default class WellcomeScreen extends Component {
    render() {
        return (
            <div>
                <Router>

                        <WellcomeNavbar />

                        <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Wellcome />
                        </Route>
                        </Switch>      

                </Router>
            </div>
        )
    }
}
