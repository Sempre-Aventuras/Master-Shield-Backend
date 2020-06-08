import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import './style.css';
import Logo from '../../../assets/img/msLogo.png';

// core components
const StyledImg = styled.img`
  max-width: 7vw;
`

const StyledButtons = styled(Button)`
  background-color: #303237;
  border-color: #303237;

  a {
    color: white;
  }
  
`

function WellcomeNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("bg-navbar");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        id="navbar-main"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              <StyledImg src={Logo} />
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Master Shield
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse className="styleMobileNavbar" navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <Link to="/login">
                <StyledButtons>
                Login
                </StyledButtons>
              </Link>
              <Link to="/register">
                <StyledButtons>
                Registrar
                </StyledButtons>              
              </Link>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WellcomeNavbar;