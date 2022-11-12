// import React, { useState } from 'react'
// import { VideoRoom } from './vidoeComponents/components/VideoRoom';

// function VideoCall() {
//     const [joined, setJoined] = useState(false);
//   return (
//       <div>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
          
//       <h1>WDJ Virtual Call</h1>

//       {!joined && (
//         <button onClick={() => setJoined(true)}>
//           Join Room
//         </button>
//       )}

//       {joined && (
//         <>
//           <button onClick={() => setJoined(false)}>
//             To Lobby
//           </button>
//           <VideoRoom />
//         </>
//       )}
//     </div>
//   )
// }

// export default VideoCall


import {
    Card,
  Container,
  Row,
  Col,
} from "reactstrap";


import Header from "components/Headers/Header.js";
import 'styles/VideoCall.css'

import live from "assets/videocall/images/live.png"
import video from "assets/videocall/images/video.png"
import message from "assets/videocall/images/message.png"
import notification from "assets/videocall/images/notification.png"
import users from "assets/videocall/images/users.png"
import settings from "assets/videocall/images/setting.png"
import hostImg from "assets/videocall/images/image.png"
import chat from "assets/videocall/images/chat.png"
import disconnect from "assets/videocall/images/disconnect.png"
import call from "assets/videocall/images/call.png"
import mic from "assets/videocall/images/mic.png"
import cast from "assets/videocall/images/cast.png"


const VideoCall = () => {

  
  return (
    <>
      <Header  />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="p-3 shadow video-header">
              <nav className="video-nav">
                <ul>
                  <li><img src={live} alt="" className="video-active" /></li>
                  <li><img src={video} alt="" /></li>
                  <li><img src={message} alt="" /></li>
                  <li><img src={notification} alt="" /></li>
                  <li><img src={users} alt="" /></li>
                  <li><img src={settings} alt="" /></li>
                </ul>
              </nav>
              <div className="video-container">
                <div className="video-row mt-5">
                  <div className="video-col-1" >
                    <img src={hostImg} alt="" className="host-img" />
                    
                    <img src={hostImg} alt="" className="patient-img" />
                    <div className="video-controls">
                      <img src={chat} alt="" className="img-controls" />
                      <img src={disconnect} alt="" className="img-controls" />
                      <img src={call} alt="" className="img-controls img-controls-call" />
                      <img src={mic} alt="" className="img-controls" />
                      <img src={cast} alt="" className="img-controls" />
                    </div>
                  </div>
                  <div className="video-col-2">
                    <div className="video-patient-status-container">
                      <p>Patient Status:</p>
                    </div>
                    <div div className = "video-medical-book" >
                      <p>Patient Medical book:</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoCall;
