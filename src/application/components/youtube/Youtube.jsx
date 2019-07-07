import React from 'react';
import YouTube from 'react-youtube';
 
class Youtube extends React.Component {
  render() {
    const opts = {
      height: this.props.height,
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId="eIdJ22AfsO8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
    event.target.mute();
  }
}

export default Youtube;