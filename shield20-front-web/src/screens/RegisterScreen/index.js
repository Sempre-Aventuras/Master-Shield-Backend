import React, { Component } from 'react';
import { Player } from 'video-react';
import styled from 'styled-components';
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import './style.css';

// Video
import IntroVideo from './video.mp4';
// Components
import WellcomeNavbar from '../../components/navbars/WellcomeNavbar';


const DivText = styled.div`
  color: black;

  h3{
    font-weight: 700;
  }

  p{
    font-weight: 600;
    font-size: 1rem;
  }
`

export default class RegisterScreen extends Component {
  render() {
    return (
        <>

          <WellcomeNavbar />

          <Container>
            <div className="divVideoPlayer">
              <Player
                autoPlay="true"
                loop 
                src={IntroVideo}
                className="videoPlayer"
              >
                <ControlBar disabled disableDefaultControls={true}/>
              </Player>
            </div>

            <Row className="mt-4">
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal pt-1 pb-2">
                  <DivText className="description">
                    <h3>Crie o que quiser com facilidade.</h3>
                    <p>
                      Com poucos cliques crie automaticamente personagens, monstros,
                      aventuras, equipamentos, itens mágicos, campanhas inteiras,
                      depois exporte para onde quiser. 
                    </p>
                  </DivText>
                </div>
                <div className="info info-horizontal py-2">
                  <DivText className="description">
                    <h3>Ouvimos vocês.</h3>
                    <p>
                      Funcionalidades e novidades são feitas ouvindo os pedidos
                      que fazem, e tudo é pensado na melhor experiência de vocês.
                    </p>
                  </DivText>
                </div>
                <div className="info info-horizontal">
                  <DivText className="description">
                    <h3>Valorizamos sua Privacidade.</h3>
                    <p>
                      Toda a plataforma é criada com o máximo de segurança
                      e somente os materiais que você deseja compartilhar os seus
                      amigos poderão ler.
                    </p>
                  </DivText>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register mt-5" style={{ textAlign:"center"}}>
                  <CardTitle className="text-center" tag="h3">
                    Registrar
                  </CardTitle>
                  
                  <Form className="register-form mt-4">
                    <Input className="my-1" name="name" placeholder="Nome" type="text" />
                    <Input className="my-1" name="email" placeholder="Email" type="text" />
                    <Input className="my-1" name="password" placeholder="Senha" type="password" />
                    <Input className="my-1" placeholder="Confirme a Senha" type="password" />
                    <Button
                      style={{ backgroundColor: "#355B8C"}}
                      block className="btn-round" color="default">
                      Registrar
                    </Button>
                  </Form>

                  <div className="login">
                    <p className="mt-2">
                      Já tem uma conta?{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Login
                      </a>
                      .
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
    );
  }
}
