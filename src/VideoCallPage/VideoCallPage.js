import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import VideoCall from "./components/js/VideoCall";
import './VideoCallPage.scss'
import jQuery from "jquery";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import MeetingNotes from "./components/js/MeetingNotes";

function VideoCallPage() {
    const [inCall, setInCall] = useState(false);
    const tk = useRef()
    const channelName = useRef()
    const params = useParams();

    useEffect(() => {
        tk.current = params.t
        var url_string = window.location.href
        var url = new URL(url_string);
        tk.current = url.searchParams.get("t");
        channelName.current = url.searchParams.get("ch");

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
            {inCall && tk ? (
                <><VideoCall setInCall={setInCall} tk={tk.current} channelName={channelName.current} /><MeetingNotes /></>
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