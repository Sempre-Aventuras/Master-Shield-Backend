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
import WellcomeNavbar from "../../components/navbars/WellcomeNavbar/index.js";
import WellcomeHeader from "./wellcomeHeader.js";
import FooterWellcome from "../../components/Footers/FooterWellcome.js";

import ImgBanner from './panel.jpg';
import './style.css';




const ImgContainer = styled.img` 
    max-height: 90vh;
    position: absolute;
    top: 20%;
    left: 10%;
`

const FeatureSection = styled.div`
    background-color: #1c1e21;
    color: white;
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

            <FeatureSection className="wrapper">
                <div className="text-center landing-section">
                <Container>
                    <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="mb-4 ">Descubra os poderes de Master Shield</h2>
                        <h5>
                        Crie fichas de personagem com poucos cliques, salve, compartilhe,
                        e baixe em PDF. Tudo organizado em um só lugar para que nunca mais
                        perca nenhum personagem e acelere ainda mais o preparo de seu jogo.
                        E ainda mais ferramentas virão.
                        </h5>
                        <br />
                        {/* <Button
                        className="btn-fill btn-round"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        >
                        See Details
                        </Button> */}
                    </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                    <Col md="3">
                        <div className="info">
                        <div className="icon">
                            <i className="nc-icon nc-palette" />
                        </div>
                        <div className="description">
                            <h4 className="">Criador de Personagens</h4>
                            <p className="description">
                            Gaste menos tempo criando seus personagens, basta clicar e selecionar 
                            e em instantes termine as fichas.
                            </p>
                            {/* <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button> */}
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon">
                            <i className="nc-icon nc-bulb-63" />
                        </div>
                        <div className="description">
                            <h4 className="">New Ideas</h4>
                            <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient.
                            </p>
                            {/* <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button> */}
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon">
                            <i className="nc-icon nc-chart-bar-32" />
                        </div>
                        <div className="description">
                            <h4 className="">Statistics</h4>
                            <p>
                            Choose from a veriety of many colors resembling sugar
                            paper pastels.
                            </p>
                            {/* <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button> */}
                        </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                        <div className="icon">
                            <i className="nc-icon nc-sun-fog-29" />
                        </div>
                        <div className="description">
                            <h4 className="">Delightful design</h4>
                            <p>
                            Find unique and handmade delightful designs related items
                            directly from our sellers.
                            </p>
                            {/* <Button
                            className="btn-link"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            See more
                            </Button> */}
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </div>
            </FeatureSection>


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

            <FooterWellcome />
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
