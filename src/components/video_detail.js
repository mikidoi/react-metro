import React from 'react';
import {Col} from 'react-bootstrap';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    console.log(url);
    return (
        <Col md={8}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} title={video.snippet.title} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </Col>
    );
};

export default VideoDetail;