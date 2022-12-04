import {Button} from '@mui/material';
import * as React from 'react';
import { useClient } from '../../../settings';
import '../scss/VideoControls.scss';
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



function VideoControls(props) {

    const client = useClient();
    const tracks = props.tracks;
    const [trackState, setTrackState] = React.useState({ video: true, audio: true });

    const setInCall = () => {

        props.setInCall()
    }

    const setStart = () => {

        props.setStart()
    }

    const mute = async (type) => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            });
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((ps) => {
                return { ...ps, video: !ps.video };
            });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
    };

    return (
        <div className="video-controls">
            <Button
                className='control-button'
                variant="contained"
                onClick={() => mute("audio")}>
                {trackState.audio ? <MicIcon /> : <MicOffIcon />}
            </Button>
            <Button
                className='control-button'
                variant="contained"
                onClick={() => mute("video")}>
                {trackState.video ? <VideocamIcon /> : <VideocamOffIcon />}
            </Button>
            <Button
                className='control-button'
                variant="contained"
                onClick={() => leaveChannel()}>
                <ExitToAppIcon />
            </Button>
        </div>
    );
}

export default VideoControls;