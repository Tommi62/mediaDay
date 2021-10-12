import '../css/VideoPage.css'

import { Card, ListGroup } from "react-bootstrap";

const VideoButton = ({ id, name, thumbnail, setIde }) => {

    const changeVideo = () => {
        setIde(id);
    }

    return (
        <ListGroup.Item className="videoItem" >
            <Card className="videoCard" onClick={changeVideo}>
                <Card.Img variant="top" src={thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = "/media/thumbnails/videoThumbnail.jpg" }} />
                <Card.Body>
                    <Card.Title className="h6 videoCardTitle" >{name}</Card.Title>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default VideoButton;