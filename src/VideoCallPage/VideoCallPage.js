import './VideoCallPage.scss'
import ReactPlayer from 'react-player';
import { useState, useEffect, useRef } from 'react';

function VideoCallPage() {

    const servers = {
        iceServers:[
        {
            urls:["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"]
        }    
        ]
    }

    const localVideoRef = useRef()
    const remoteVideoRef = useRef()
    const pc = useRef(new RTCPeerConnection())
    const textRef = useRef()

    let [remoteStream, setRemoteStream] = useState(new MediaStream())
    let [peerConnection, setPeerConnection] = useState(new RTCPeerConnection(servers))
        

    useEffect(() => {
        
        navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then(stream => {
            localVideoRef.current.srcObject = stream;
            stream.getTracks().forEach(track => {
                _pc.addTrack(track, stream)
            })
        }

        ).catch(e => {
            console.log("Error in local video!");
        })

        const _pc = new RTCPeerConnection(null)
        _pc.onicecandidate = (e) => {
            if(e.candidate){
                console.log(JSON.stringify(e.candidate))
            }
        }

        _pc.oniceconnectionstatechange = (e) => {
            console.log(e)
        }

        _pc.ontrack = (e) => { 

            remoteVideoRef.current.srcObject = e.streams[0]
        }

        pc.current = _pc
    }, [])

    const createOffer = () => {

        pc.current.createOffer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        }).then(sdp => {
            console.log(JSON.stringify(sdp))
            pc.current.setLocalDescription(sdp)
        }).catch(e => {
            console.log(e)
        })
    }

    const createAnswer = () => {
        pc.current.createAnswer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        }).then(sdp => {
            console.log(JSON.stringify(sdp))
            pc.current.setLocalDescription(sdp)
        }).catch(e => {
            console.log(e)
        })

    }

    const setRemoteDescription = () => {

        const sdp = JSON.parse(textRef.current.value)
        console.log(sdp)
        pc.current.setRemoteDescription(new RTCSessionDescription(sdp))
    }

    const addCandidate = () => {

        const candidate = JSON.parse(textRef.current.value)
        console.log('Adding Candidate...', candidate)
        pc.current.addIceCandidate(new RTCIceCandidate(candidate))
    }
    
    return (  
        <div className="video-call-page">
            <video width={"100%"} height={"100%"} className="video-player" id="player1" ref={localVideoRef} autoPlay/>
            <video width={"100%"} height={"100%"} className="video-player" id="player2" ref={remoteVideoRef} autoPlay/>
            <button onClick={createOffer}>Create Offer</button>
            <button onClick={createAnswer}>Create Answer</button>
            <br />
            <textarea ref={textRef}></textarea>
            <br />
            <button onClick={setRemoteDescription}>Set Remote Description</button>
            <button onClick={addCandidate}>Add Candidates</button>
        </div>
    );
}

export default VideoCallPage;