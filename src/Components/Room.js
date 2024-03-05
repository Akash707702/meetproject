import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Room = () => {
  const { roomId } = useParams();
  const meeting = async (element) => {
      const appID = 684677621 ;
    const serverSecret = "018797fd1539931b492394f395997a90";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Akash"
     
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [{
        name: "Copy Link",
        url:`http://localhost:3000/room/${roomId}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton:false
    })
  }
  return (
    <div>
       <div ref={meeting}/>
    </div>
  );
};

export default Room;
