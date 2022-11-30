import { useState } from "react";
import { Button } from "@mui/material";
import VideoCall from "./components/js/VideoCall";
import './VideoCallPage.scss'

function VideoCallPage() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="video-call-page" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>
      )}
    </div>
  );
}

export default VideoCallPage;