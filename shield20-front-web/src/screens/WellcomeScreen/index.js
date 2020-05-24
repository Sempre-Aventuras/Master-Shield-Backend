import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    Container,
    Row,
    Col
  } from "reactstrap";

// Pages imported
import Register from '../RegisterScreen';
import Login from '../LoginScreen';

// Components imported
// import WellcomeNavbar from '../../components/navbars/wellcomeNavbar';
import WellcomeNavbar from "../../components/navbars/WellcomeNavbar.js";
import WellcomeHeader from "./wellcomeHeader.js";
import FooterWhite from "../../components/Footers/FooterWhite.js";

import ImgBanner from './panel.jpg';
import './style.css';




const ImgContainer = styled.img` 
    max-height: 90vh;
    position: absolute;
    top: 20%;
    left: 10%;
`

const Wellcome = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("landing-page");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("landing-page");
      };
    });

    return (
        <>
            <WellcomeNavbar />
            <WellcomeHeader />

            <div className="wrapper">
                <div className="section text-center landing-section">
                <Container>
                    <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="title">Descubra os poderes de Master Shield</h2>
                        <h5>
                        Crie fichas de personagem com poucos cliques, salve, compartilhe,
                        e baixe em PDF. Tudo organizado em um só lugar para que nunca mais
                        perca nenhum personagem e acelere ainda mais o preparo de seu jogo.
                        E ainda mais ferramentas virão.
                        </h5>
                        <br />
                        <Button
                        className="btn-fill btn-round"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        >
                        See Details
                        </Button>
                    </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                    <Col md="3">
                        <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-palette" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">Beautiful Gallery</h4>
                            <p className="description">
                            Spend your time generating new ideas. You don't have to
                            think of implementing.
                            </p>
                            <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button>
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-bulb-63" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">New Ideas</h4>
                            <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient.
                            </p>
                            <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button>
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-chart-bar-32" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">Statistics</h4>
                            <p>
                            Choose from a veriety of many colors resembling sugar
                            paper pastels.
                            </p>
                            <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button>
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-sun-fog-29" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">Delightful design</h4>
                            <p>
                            Find unique and handmade delightful designs related items
                            directly from our sellers.
                            </p>
                            <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button>
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>


            <div className="wrapper">
                <div className="section text-center landing-section">
                <Container>
                    <Row style={{justifyContent: "center"}}>
                        <h1>Atualizações Semanais todas Terças-Feiras!</h1>      
                    </Row>            
                    <Row className="mt-5">
                        <Col>
                            <h4>Estamos na Versão: <strong>0.0.1</strong></h4>
                            <img src={ImgBanner} style={{ maxWidth: "40vw"}}/>
                        </Col>
                        <Col>
                            
                            <h3>Veja as Atualizações até Agora:</h3>
                            <h4><strong>19/05:</strong> Início do Projeto</h4>
                        </Col>

                    </Row>
                </Container>
                </div>
            </div>

            <FooterWhite />
        </> 
    )
}


export default class WellcomeScreen extends Component {
    render() {
        return (
            <div>
                <Router>

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
