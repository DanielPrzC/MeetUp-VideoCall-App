import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const { me, name, setName, callAccepted, callEnded, leaveCall, callUser } = useContext(
    SocketContext
  );
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="container">
      <div className="paper">
        <form noValidate autoComplete="off" onSubmit={(e)=> e.preventDefault()} >
          <div className="gridContainer">
            <h3>Account Info</h3>
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Insert your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <CopyToClipboard text={me}>
              <button>Copy Your ID</button>
            </CopyToClipboard>
          </div>
          <div className="gridContainer">
            <h3>Make a Call</h3>
            <label>ID to Call</label>
            <br />
            <input
              type="text"
              placeholder="Insert the ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <br />
            {callAccepted && !callEnded ? (
                <button onClick={leaveCall}>Hang Up</button>
            ) : (
                <button onClick={()=> callUser(idToCall)}>Call</button>
            )}
          </div>
        </form>
      </div>
      {children}
    </div>
  );
};

export default Options;
