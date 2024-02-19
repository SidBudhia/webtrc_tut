import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Zegocloud = () => {
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    // generate kit token
    const appID = 511735584;
    const serverSecret = "7512eb77f34a004a33573a7b1828b1b2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(), //userid
      "Siddharth" //username
    );

    //Create instance object from Kit Token
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Zegocloud;
