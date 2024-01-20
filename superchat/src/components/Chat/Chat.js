import React, { useEffect } from 'react';
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "../Chat/chat.css"

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {

    const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    
    useEffect(()=>{
        socket.on('connect',()=>{
            alert("Connected");
        })
        return ()=>{

        }
    },[socket])


  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='chatHeader'>
                <div className='chatBox'>
                    <div className='inputBox'>
                        {user}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Chat