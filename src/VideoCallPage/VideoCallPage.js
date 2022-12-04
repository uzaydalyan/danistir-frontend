import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import VideoCall from "./components/js/VideoCall";
import './VideoCallPage.scss'
import jQuery from "jquery";

function VideoCallPage() {
    const [inCall, setInCall] = useState(false);

    useEffect(() => {

        if(inCall){
            jQuery(".navbar").css("display", "none")
            jQuery(".video-call-page").css("background-color", "black")
        } else{
            jQuery(".navbar").css("display", "block")
            jQuery(".video-call-page").css("background-color", "white")
        }

    }, [inCall])

    function leaveVideoPage(){


    }

    return (
        <div className="video-call-page">
            {inCall ? (
                <VideoCall setInCall={setInCall} />
            ) : (
                <div className="pre-call-buttons">
                    <Button
                        variant="contained"
                        color="primary"
                        className="pre-button"
                        onClick={() => setInCall(true)}
                    >
                        Join Call
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="pre-button"
                        onClick={() => leaveVideoPage()}
                    >
                        <a href="javascript:javascript:history.go(-1)" style={{textDecoration: "none"}}>Back</a>
                    </Button>
                </div>
            )}
        </div>
    );
}

export default VideoCallPage;