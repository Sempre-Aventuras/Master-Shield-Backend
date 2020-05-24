import React, { Component } from 'react';
import { Player } from 'video-react';
import styled from 'styled-components';
import axios from 'axios';
import './style.css';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';

// Video
import IntroVideo from './intro.mp4';
// Components
import WellcomeNavbar from '../../components/navbars/WellcomeNavbar';


const LoginFormContainer = styled.div`
  position: absolute;
  top: 15vh;
  left: 30vw;
  z-index: 1;
  height: 80vh;
  width: 40vw;
  background: white;
  border-radius: 5%;
  text-align: center;
`

export default class LoginScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password} = this.state;  

    this.changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    this.submitHandler = e => {
      e.preventDefault()
      axios.post('http://localhost:3001/api/user/login', this.state)
          .then(function (response) {
            if (response.data.redirect == '/home') {
                window.location = "/home"
            } 
          }).catch(function(error) {
              window.location = "/login"
          })
    }

    return (
        <>

          <WellcomeNavbar />

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

            <LoginFormContainer>
            <h1>Login</h1>
            <form onSubmit={this.submitHandler}>
                <input type="email" name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                <input type="submit" value="submit" />
            </form>
            </LoginFormContainer>
            
        </>
    );
  }
}
