import * as React from 'react'
import '../scss//VideoCall.scss'
import { AgoraVideoPlayer } from "agora-rtc-react";
import VideoControls from './VideoControls';
import { useState, useEffect, useRef } from 'react';
import { useClient, config, useMicrophoneAndCameraTracks} from '../../../settings';



function VideoCall(props) {

    const [selfState, setSelfState] = useState("small-video")
    const [otherState, setOtherState] = useState("large-video")
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    config.token = props.tk
    console.log(config)


    const setInCall = () => {

        props.setInCall()
    }

    function switchVideos(state){
        if(state=="small-video"){
            setSelfState(selfState == "small-video" ?  "large-video" : "small-video")
            setOtherState(otherState == "small-video" ?  "large-video" : "small-video")
        }
    }

    useEffect(() => {
        
        let init = async (name) => {
            console.log("BEFORE PUBLISH")
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        console.log("NEW USER UZAY");
                        return [...prevUsers, user];
                    });
                }
                if (mediaType === "audio") {
                    user.audioTrack.play();
                }
            });

            client.on("user-unpublished", (user, mediaType) => {
                if (mediaType === "audio") {
                    if (user.audioTrack) user.audioTrack.stop();
                }
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            });

            client.on("user-left", (user) => {
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            try {
                await client.join(config.appId, name, config.token, null);
            } catch (error) {
                alert("Video chat is broken, please refresh the page or leave the chat.")
                tracks[0].close()
                tracks[1].close()
                console.log(error)
            }

            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        };

        if (ready && tracks) {
            try {
                init(props.channelName);
            } catch (error) {
                console.log(error);
            }
        }
    }, [props.channelName, client, ready, tracks]);

    return (
        <div className="video-call">
            {ready && tracks && <VideoControls tracks={tracks} setStart={setStart} setInCall={setInCall}/>}
            {start && tracks && <AgoraVideoPlayer onClick={() => {switchVideos(selfState)}} className={selfState} videoTrack={tracks[1]} />}
            {users.length > 0 && start && tracks &&
                users.map((user) => {
                    console.log("USER: " + user)
                    if (user.videoTrack) {
                        return (
                            <AgoraVideoPlayer
                                onClick={() => {switchVideos(otherState)}}
                                className={otherState}
                                videoTrack={user.videoTrack}
                                key={user.uid}
                            />
                        );
                    } else return (
                        <AgoraVideoPlayer
                            onClick={() => {switchVideos(otherState)}}
                            className={otherState}
                        />
                    );;
                })}
            <br />
        </div>
    );
}

export default VideoCall;