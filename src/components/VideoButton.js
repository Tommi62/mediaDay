import '../css/VideoPage.css'

import { Card, ListGroup } from "react-bootstrap";

const VideoButton = ({ id, name, thumbnail, setIde }) => {

    const changeVideo = () => {
        setIde(id);
    }

    return (
        <ListGroup.Item className="videoItem" >
            <Card className="videoCard" onClick={changeVideo}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title className="h6 videoCardTitle" >{name}</Card.Title>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default VideoButton;