import React, { useState } from 'react';
import Image from 'next/image';
import { Figure } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import styles from './reel.module.scss';

const ShowReel = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Handle video play
    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    const videoSrc = isPlaying 
    ? "https://player.vimeo.com/video/1008072695?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
    : "";

    return (
        <div style={{paddingBottom: '56.25%', height: 0 }}>
            {!isPlaying && (
                <Figure
                    className={styles.figure}
                    onClick={handlePlayVideo}
                >
                    <Image
                        alt="Cover"
                        width={1000}
                        height={800}
                        src="/vid-show-reel.png"
                        className={`img-responsive ${styles.coverImage}`}
                    />
                    <FontAwesomeIcon icon={faPlay} className={`fa-fw ${styles.playButton}`} />
                </Figure>
            )}

            {isPlaying && (
                <iframe
                    title="Showreel '24"
                    src={videoSrc}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default ShowReel;
