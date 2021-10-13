import '../css/VideoPage.css'

import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from 'react';

const VideoButton = ({ id, name, type, thumbnail, setIde }) => {
    const [isItStream, setIsItStream] = useState(true);
    const [streamImgUrl, setStreamImgUrl] = useState("/media/thumbnails/streamThumbnail.jpg");

    const changeVideo = () => {
        setIde(id);
    }

    useEffect(() => {
        try {
            if (type === 'stream') {
                setIsItStream(true);
                if (thumbnail !== '') {
                    setStreamImgUrl(thumbnail);
                }
            } else {
                setIsItStream(false);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [type]);


    return (
        <ListGroup.Item className="videoItem" >
            {isItStream ? (
                <Card className="videoCard" onClick={changeVideo}>
                    <Card.Img variant="top" src={streamImgUrl} onError={(e) => { e.target.onerror = null; e.target.src = "/media/thumbnails/streamThumbnail.jpg" }} />
                    <Card.Body>
                        <Card.Title className="h6 videoCardTitle" >{name}</Card.Title>
                    </Card.Body>
                </Card>
            ) : (
                <Card className="videoCard" onClick={changeVideo}>
                    <Card.Img variant="top" src={thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = "/media/thumbnails/videoThumbnail.jpg" }} />
                    <Card.Body>
                        <Card.Title className="h6 videoCardTitle" >{name}</Card.Title>
                    </Card.Body>
                </Card>
            )}
        </ListGroup.Item>
    )
}

export default VideoButton;