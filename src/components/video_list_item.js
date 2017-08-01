import React from 'react';
import {ListGroupItem} from 'react-bootstrap';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <ListGroupItem onClick={() => onVideoSelect(video)} >
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object"/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </ListGroupItem>
    );    
};

export default VideoListItem;