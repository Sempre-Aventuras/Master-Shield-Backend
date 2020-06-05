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
    display: block;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: auto auto;
`

const H4Aligned = styled.h4`
    margin: auto auto;
`

export default class NewCharacterScreen extends Component {
    constructor(props){
        super(props);

        this.state={
            constitution: 0,
            strength: 0,
            dextery: 0,
            agility: 0,
            intelligence: 0,
            will: 0,
            perception: 0,
            charisma: 0,
            constitutionPerc: 0,
            strengthPerc: 0,
            dexteryPerc: 0,
            agilityPerc: 0,
            intelligencePerc: 0,
            willPerc: 0,
            perceptionPerc: 0,
            charismaPerc: 0,            
        }

        this.strengthHandleChanger = this.strengthHandleChanger.bind(this);
    }

    constitutionHandleChanger = async (e) => {
        await this.setState({constitution: e.target.value});
        this.setState({constitutionPerc: (this.state.constitution * 10)})
    };

    strengthHandleChanger = async (e) => {
        await this.setState({strength: e.target.value});
        this.setState({strengthPerc: (this.state.strength * 10)})
    };

    dexteryHandleChanger = async (e) => {
        await this.setState({dextery: e.target.value});
        this.setState({dexteryPerc: (this.state.dextery * 10)})
    };
    
    agilityHandleChanger = async (e) => {
        await this.setState({agility: e.target.value});
        this.setState({agilityPerc: (this.state.agility * 10)})
    };
    
    intelligenceHandleChanger = async (e) => {
        await this.setState({intelligence: e.target.value});
        this.setState({intelligencePerc: (this.state.intelligence * 10)})
    };
    
    willHandleChanger = async (e) => {
        await this.setState({will: e.target.value});
        this.setState({willPerc: (this.state.will * 10)})
    };
    
    perceptionHandleChanger = async (e) => {
        await this.setState({perception: e.target.value});
        this.setState({perceptionPerc: (this.state.perception * 10)})
    };
    
    charismaHandleChanger = async (e) => {
        await this.setState({charisma: e.target.value});
        this.setState({charismaPerc: (this.state.charisma * 10)})
    };    



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

                            {/* <FormGroup>
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
                            </FormGroup> */}
                            </Col>
                        </Row>

                            {/* Atributos */}

                        <Row className="my-4 border">
                            <div style={{ textAlign: "center", margin: "auto auto"}}><h2>Atributos</h2></div>
                            <RowStyled className="mt-2" md="4">
                                <ColStyled><h4></h4></ColStyled>
                                <ColStyled><h4>Valor Original</h4></ColStyled>
                                <ColStyled><h4>Valor Modificado</h4></ColStyled>
                                <ColStyled><h4>Teste Normal</h4></ColStyled>
                            </RowStyled>
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Constituição</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder={this.state.constitution} min={0} max={100} type="number" step="1" onChange={this.constitutionHandleChanger}/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1" disabled/></ColStyled>
                                <ColStyled><Input  placeholder={this.state.constitutionPerc} min={0} type="number" disabled/></ColStyled>
                            </RowStyled>         
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Força</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" onChange={this.strengthHandleChanger}/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input placeholder={this.state.strengthPerc} min={0} type="number" disabled/></ColStyled>
                            </RowStyled>   
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Dextreza</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>   
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Agilidade</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>   
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Inteligência</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1" disabled /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>   
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Força de Vontade</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>          
                            <RowStyled className="mt-4" md="4">
                                <ColStyled><H4Aligned>Percepção</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>   
                            <RowStyled className="my-4" md="4">
                                <ColStyled><H4Aligned>Carisma</H4Aligned></ColStyled>
                                <ColStyled><Input placeholder="0" min={0} max={100} type="number" step="1" /></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" step="1"  disabled/></ColStyled>
                                <ColStyled><Input  min={0} max={100} type="number" disabled/></ColStyled>
                            </RowStyled>                                                                                                                                                                                                                   

                        </Row>

                            {/* Botões */}
                        <Row className="buttons-row my-5">
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
