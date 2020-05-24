import React, { Component } from 'react'
import styled from 'styled-components';
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";

// Components
// Imported
import MainNavbar from '../../../components/navbars/MainNavbar';
import ImageUpload from "../../../components/CustomUpload/ImageUpload.js";

// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

// Styled
const NewCharacterContainer = styled.div`
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #1c1e21;
`

const RowStyled = styled(Row)`
    width: 100%;
    margin: 0 auto;
`;

const ColStyled = styled(Col)`
    justify-content: center;
    align-content: center;
    text-align: center;
`

export default class NewCharacterScreen extends Component {
    constructor(props){
        super(props);

    }


      submitHandler(){};

      render(){
        return (
            <NewCharacterContainer>
                <Row><MainNavbar /></Row>
                
                <Row className="mt-5">


                    <Container>
                        <h3>Novo Personagem</h3>
                        <div>
                        <Row>
                            <Col md="5" sm="5">
                            <h6>Foto do Personagem</h6>
                            <ImageUpload />

                            {/* <h6>Categories</h6>
                            <div id="tags-2">
                                <TagsInput
                                onlyUnique
                                onChange={value => setCategories(value)}
                                tagProps={{
                                    className: "react-tagsinput-tag badge-success"
                                }}
                                value={categories}
                                />
                            </div>
                            <h6>
                                Format <span className="icon-danger">*</span>
                            </h6>
                            <div className="form-check-radio">
                                <Label check>
                                <Input
                                    defaultValue="option1"
                                    id="exampleRadios1"
                                    name="exampleRadios"
                                    type="radio"
                                />
                                Digital <span className="form-check-sign" />
                                </Label>
                            </div>
                            <div className="form-check-radio">
                                <Label check>
                                <Input
                                    defaultChecked
                                    defaultValue="option2"
                                    id="exampleRadios2"
                                    name="exampleRadios"
                                    type="radio"
                                />
                                Print <span className="form-check-sign" />
                                </Label>
                            </div> */}
                            </Col>
                            <Col md="7" sm="7">
                            <FormGroup>
                                <h6>
                                Nome <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                className="border-input"
                                placeholder="Escreva o nome do Personagem"
                                type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <h6>
                                Tagline <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                className="border-input"
                                placeholder="enter the product tagline here..."
                                type="text"
                                />
                            </FormGroup>
                            <Row className="price-row">
                                <Col md="6">
                                <h6>
                                    Price <span className="icon-danger">*</span>
                                </h6>
                                <InputGroup className="border-input">
                                    <Input
                                    className="border-input"
                                    defaultValue=""
                                    placeholder="enter price"
                                    type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i className="fa fa-euro" />
                                    </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                </Col>
                                <Col md="6">
                                <h6>Discount</h6>
                                <InputGroup className="border-input">
                                    <Input
                                    className="border-input"
                                    defaultValue=""
                                    placeholder="enter discount"
                                    type="text"
                                    />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupText>%</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <h6>Description</h6>
                                <Input
                                className="textarea-limited"
                                maxLength="150"
                                placeholder="This is a textarea limited to 150 characters."
                                rows="13"
                                type="textarea"
                                />
                                <h5>
                                <small>
                                    <span
                                    className="pull-right"
                                    id="textarea-limited-message"
                                    >
                                    150 characters left
                                    </span>
                                </small>
                                </h5>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input defaultValue="" type="checkbox" />
                                Display on landing page{" "}
                                <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            </Col>
                        </Row>

                            {/* Atributos */}

                        <Row>
                            <div style={{ textAlign: "center"}}><h3>Atributos</h3></div>
                            <RowStyled className="mt-2" md="4">
                                <ColStyled><h4></h4></ColStyled>
                                <ColStyled><h4>Valor Original</h4></ColStyled>
                                <ColStyled><h4>Valor Modificado</h4></ColStyled>
                                <ColStyled><h4>Teste Normal</h4></ColStyled>
                            </RowStyled>
                            <RowStyled className="mt-2" md="4">
                                <ColStyled><h4>Força</h4></ColStyled>
                                <ColStyled><h4>Valor Original</h4></ColStyled>
                                <ColStyled><h4>Valor Modificado</h4></ColStyled>
                                <ColStyled><h4>Teste Normal</h4></ColStyled>
                            </RowStyled>                            

                        </Row>

                            {/* Botões */}
                        <Row className="buttons-row mt-5">
                            <Col md="4" sm="4">
                            <Button
                                block
                                className="btn-round"
                                color="danger"
                                outline
                                type="reset"
                            >
                                Cancel
                            </Button>
                            </Col>
                            <Col md="4" sm="4">
                            <Button
                                block
                                className="btn-round"
                                color="primary"
                                outline
                                type="submit"
                            >
                                Save
                            </Button>
                            </Col>
                            <Col md="4" sm="4">
                            <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="submit"
                            >
                                Save &amp; Publish
                            </Button>
                            </Col>
                        </Row>
                        </div>
                    </Container>                

                </Row>
 
                
            </NewCharacterContainer>
        )          
    }
}
