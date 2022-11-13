import './VideoCallPage.scss'
import io from 'socket.io-client'
import { useState, useEffect, useRef } from 'react';


const socket = io('/webRTCPeers', {

    path:'/webrtc'
})

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
    const candidates = useRef([])

    let [remoteStream, setRemoteStream] = useState(new MediaStream())
    let [peerConnection, setPeerConnection] = useState(new RTCPeerConnection(servers))
        

    useEffect(() => {

        socket.on('connection-success', success => {

            console.log(success)
        })

        socket.on('sdp', data => {
            console.log(data)
            textRef.current.value = JSON.stringify(data.sdp) 
        })

        socket.on('candidate', candidate => {
            console.log(candidate)
            candidates.current = [...candidates.current, candidate]
        })
        
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
                socket.emit('candidate', e.candidate)
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

            // send sdp to socket
            socket.emit('sdp', {
                sdp
            })
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

            // send answer sdp to socket
            socket.emit('sdp', {
                sdp
            })
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

        candidates.current.forEach(candidate => {

            pc.current.addIceCandidate(new RTCIceCandidate(candidate))
        })
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