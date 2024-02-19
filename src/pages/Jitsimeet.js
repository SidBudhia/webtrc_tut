import React from "react";
import { JitsiMeeting, JaaSMeeting } from "@jitsi/react-sdk";

const Jitsimeet = () => {
  const [domain, setDomain] = React.useState("meet.jit.si");
  const [roomName, setRoomName] = React.useState("dsvebw");
  return (
    <div>
      <JitsiMeeting
        domain={domain}
        roomName={roomName}
        userInfo = {{
            displayName: "Sid"
        }}
        onApiReady={() => {
          // The Jitsi Meet API is now ready
        }}

        getIFrameRef = { (iframeRef) => { iframeRef.style.height = '600px'; } }
      />
    </div>
  );
};

export default Jitsimeet;
