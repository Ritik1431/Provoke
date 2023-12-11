import React, { useState } from 'react';
import VideoForm from './Components/VideoForm';
import VideoPlayer from './Components/VideoPlayer';
import Header from './Components/Header';

function App() {
  const [currentVideoId, setCurrentVideoId] = useState('');

  const handleVideoSubmit = (videoId) => {
    setCurrentVideoId("aL2nYsXNfMI");
  };

  return (
    <div>
      <Header/>
      <VideoForm onVideoSubmit={handleVideoSubmit} />
      {currentVideoId && <VideoPlayer videoId={currentVideoId} />}
    </div>
  );
}

export default App;
