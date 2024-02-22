import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Start playing the audio when the component mounts
        setIsPlaying(true);
    }, []);

    const togglePlayback = () => {
        const audio = document.getElementById("audioPlayer");

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                onClick={togglePlayback}
            />
            {/* Hidden audio element */}
            <audio id="audioPlayer" controls={false} autoPlay={true} style={{ display: "none" }}>
                <source src="/audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default MusicPlayer;
