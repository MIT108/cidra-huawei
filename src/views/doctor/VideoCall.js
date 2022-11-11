import React, { useState } from 'react'
import { VideoRoom } from './vidoeComponents/components/VideoRoom';

function VideoCall() {
    const [joined, setJoined] = useState(false);
  return (
      <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
      <h1>WDJ Virtual Call</h1>

      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && (
        <>
          <button onClick={() => setJoined(false)}>
            To Lobby
          </button>
          <VideoRoom />
        </>
      )}
    </div>
  )
}

export default VideoCall