import * as React from 'react'
import '../scss//VideoCall.scss'
import { AgoraVideoPlayer } from "agora-rtc-react";
import { useState, useEffect, useRef } from 'react';
import { useClient, config, useMicrophoneAndCameraTracks, channelName } from '../../../settings';



function VideoCall(props) {

    const { setInCall } = props.setInCall;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();

    useEffect(() => {
        let init = async (name) => {
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
                console.log("error");
            }

            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        };

        if (ready && tracks) {
            try {
                init(channelName);
            } catch (error) {
                console.log(error);
            }
        }
    }, [channelName, client, ready, tracks]);

    return (
        <div className="video-call">
            {start && tracks && <AgoraVideoPlayer className='self-video' videoTrack={tracks[1]} />}
            {users.length > 0 &&
                users.map((user) => {
                    if (user.videoTrack) {
                        return (
                            <AgoraVideoPlayer
                                className='other-video'
                                videoTrack={user.videoTrack}
                                key={user.uid}
                                style={{ height: "100%", width: "100%" }}
                            />
                        );
                    } else return null;
                })}
            <br />
        </div>
    );
}

export default VideoCall;