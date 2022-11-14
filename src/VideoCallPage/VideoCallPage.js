import * as React from 'react'
import './VideoCallPage.scss'
import io from 'socket.io-client'
import { useState, useEffect, useRef } from 'react';


const socket = io('/webRTCPeers', {

    path:'/webrtc'
})

function VideoCallPage() {

    const localVideoRef = useRef()
    const remoteVideoRef = useRef()
    const pc = useRef(new RTCPeerConnection())
    const textRef = useRef()

    const [callVisible, setCallVisible] = useState(true)
    const [answerVisible, setAnswerVisible] = useState(false)
    const [status, setStatus] = useState('Make a call now')

    useEffect(() => {

        socket.on('connection-success', success => {

            console.log(success)
        })

        socket.on('sdp', data => {
            console.log(data)
            textRef.current.value = JSON.stringify(data.sdp) 
            pc.current.setRemoteDescription(new RTCSessionDescription(data.sdp))

            if(data.sdp.type === "offer"){
                setCallVisible(false)
                setAnswerVisible(true)
                setStatus('Incoming Call...')
            } else {

                setStatus('Call established.')
            }
        })

        socket.on('candidate', candidate => {
            console.log(candidate)
            //candidates.current = [...candidates.current, candidate]
            pc.current.addIceCandidate(new RTCIceCandidate(candidate))
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
                sendToPeer('candidate', e.candidate)
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

    const sendToPeer = (eventType, payload) => {

        socket.emit(eventType, payload)
    }

    const processSDP = (sdp) => {

        console.log(JSON.stringify(sdp))
        pc.current.setLocalDescription(sdp)
        sendToPeer('sdp', {sdp})
    }

    const createOffer = () => {

        pc.current.createOffer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        }).then(sdp => {
            
            processSDP(sdp)
            setCallVisible(false)
            setStatus('Calling...')
            
        }).catch(e => {
            console.log(e)
        })
    }

    const createAnswer = () => {
        pc.current.createAnswer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        }).then(sdp => {
            processSDP(sdp)
            setAnswerVisible(false)
            setStatus('Call established.')
        }).catch(e => {
            console.log(e)
        })

    }



    return (  
        <div className="video-call-page">
            <video width={"100%"} height={"100%"} className="video-player" id="player1" ref={localVideoRef} autoPlay/>
            <video width={"100%"} height={"100%"} className="video-player" id="player2" ref={remoteVideoRef} autoPlay/>
            {callVisible && <button onClick={createOffer}>Call</button>}
            {answerVisible && <button onClick={createAnswer}>Answer</button>} 
            <br />
            <div>{status}</div>
            <textarea ref={textRef}></textarea>
            <br />
        </div>
    );
}

export default VideoCallPage;