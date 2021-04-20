import React from "react";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = ()=> {
  return (
    <div>
      <h1>VIDEO CHAT APP</h1>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
