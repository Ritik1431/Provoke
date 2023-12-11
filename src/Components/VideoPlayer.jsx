import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.scss'; // Import the SCSS file

const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: '480',
        width: '800',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="video-player-container">
            <div className="youtube-video">
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
    );
};

export default VideoPlayer;