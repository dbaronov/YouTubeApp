import React from 'react';

const VideoListItem = ({video, onVideoSelect, activeVideo}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	const theActiveVideo = activeVideo;

	return (
		<li onClick={() => onVideoSelect(video)} className = "list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<p className="media-heading">{videoTitle}</p>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;