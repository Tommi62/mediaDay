import React, { useEffect, useRef, useState } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = ({ url, type, mediaType, setIde, setShow, setIsStreamLive, isItStreamTime }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const [videoTimeout, setVideoTimeout] = useState();
    const [triggered, setTriggered] = useState(false);
    const [videoPlayer, setVideoPlayer] = useState();

    const options = {
        // lookup the options in the docs for more options
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: url,
                type,
            },
        ],
    };

    const onReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on("waiting", () => {
            console.log("player is waiting");
        });

        player.on("dispose", () => {
            console.log("player will dispose");
        });

        player.on("loadedmetadata", () => {
            console.log("Metadata loaded", player.duration());
            if (isItStreamTime) {
                setTriggered(true);
            }
        });

    };

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = (playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
                setVideoPlayer(player);
            }));
        } else {
            // you can update player here [update player through props]
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options]);


    useEffect(() => {
        try {
            if (isItStreamTime) {
                const timeout = setTimeout(() => {
                    console.log('VIDEOTIMEOUT');
                    if (mediaType === 'stream') {
                        setTriggered(true);
                    }
                }, 1500);
                setVideoTimeout(timeout);
                return () => clearTimeout(timeout);
            } else {
                setIde(1);
                setShow(true);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    useEffect(() => {
        try {
            if (triggered) {
                console.log('playeri', videoPlayer.duration());
                clearTimeout(videoTimeout);
                if (videoPlayer.duration() !== Infinity && mediaType === 'stream') {
                    setIde(1);
                    console.log('Not live');
                } else {
                    setIsStreamLive(true);
                }
                setShow(true);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [triggered]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <>
            <div data-vjs-player>
                <video ref={videoRef} className="video-js vjs-big-play-centered" />
            </div>
        </>
    );
};

export default Video;


