import React from "react";
import { Player } from 'video-react';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import styled from 'styled-components';

// reactstrap components
import { Button, Container } from "reactstrap";

// video components
import IntroVideo from './video.mp4';
import './style.css';

// components
const WellcomeContainer = styled.div`
  background-color: none !important;
`
const PlayerStyled = styled(Player)`
  min-height: 100%;
  min-width: 100vw;
`

// core components

function WellcomeHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>


      <WellcomeContainer
        className="page-header"
        ref={pageHeader}
      >

      <div className="divVideoPlayer">
        <PlayerStyled
          autoPlay="true" 
          fluid="false"
          heigth="100%"
          loop 
          src={IntroVideo}
          className="videoPlayer"
        >
          <ControlBar disabled disableDefaultControls={true}/>
        </PlayerStyled>
      </div>

        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">Master Shield</h1>
              <h3 className="description">
                Start designing your landing page here.
              </h3>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?ref=creativetim"
                target="_blank"
              >
                <i className="fa fa-play" />
                Entrar
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                type="button"
                outline
              >
                Registrar
              </Button>
            </div>
          </Container>
        </div>
      </WellcomeContainer>
    </>
  );
}

export default WellcomeHeader;
