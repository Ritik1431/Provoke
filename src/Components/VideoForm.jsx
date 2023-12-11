import React, { useState } from 'react';
import './VideoForm.scss'
import Lottie from 'lottie-react';
import animationData from './../assets/utube.json';
const VideoForm = ({ onVideoSubmit }) => {
    const [videoId, setVideoId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onVideoSubmit(videoId);
    };

    return (
        <div className="container1">
            <div className="upper">
                <h2>Enter YouTube Video ID:</h2>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: '40px', height: '40px' }} 
                />
            </div>
            <div className="input">
        <input
                    type="text"
                    value={videoId}
                    onChange={(e) => setVideoId(e.target.value)}
                />
            </div>
            <div className="button">
        <button type="submit" onClick={handleSubmit}>Play Video</button>
            </div>
        </div>
    );
};

export default VideoForm;
