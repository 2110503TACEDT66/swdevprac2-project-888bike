'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard () {
    const [playing, setPlaying] = useState(true)

    const handleContextMenu: EventListener = (event) => {
        event.preventDefault();
    }
    
    useWindowListener({
        eventType: 'contextmenu',
        listener: handleContextMenu
    })
    return (
        <div className="flex flex-row m-3 h-[300px]">
            <div className="w-1/2">
                <VideoPlayer vdoSrc="/video.mp4" isPlaying={playing}/>
            </div>
            
            <div className="flex flex-col ml-3 items-start">
                <h2>search your ideal job today</h2>
                <button 
                    className="py-1 px-5 bg-red-300 rounded-lg mt-5"
                    onClick={() => {
                        setPlaying(!playing)
                    }}
                    >
                        {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    )
}