import React, { Component } from 'react';
import { Player } from 'video-react';

import IntroVideo from './video.mp4';
import './style.css';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';

export default class RegisterScreen extends Component {
  render() {
    return (
        <>
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
            {/* <h1>Register</h1>
            <form method="POST" action="http://localhost:1337/user">
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="submit" />
            </form> */}
        </>
    );
  }
}
