import React, { useContext } from "react";

import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);

  return (
    <div className="container">
      {stream && (
        <div className="paper">
          <div
            className="item"
            style={{ width: "300px", border: "2px solid black" }}
          >
            <h5>{name || "Name"}</h5>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div
            className="item"
            style={{ width: "300px", border: "2px solid black" }}
          >
            <h5>{call.name || "Name"}</h5>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;