import React from 'react';

const ClipComp = (props) => {
	return (
		<div>
			<h2>{props.info.title}</h2>
			<p>Streamer: {props.info.streamer}</p>
			<a href={props.info.link}>Watch Clip</a>
			<a href={props.info.thumbnail.split('-preview-')[0] + '.mp4'}>
				<img src="./dl.jpg" alt="download" />
			</a>
			<p>Clipped on: {props.info.date.split('T')[0]} </p>
			<p>Views: {props.info.views}</p>
			<img src={props.info.thumbnail} alt="clip thumbnail" />
		</div>
	);
};

export default ClipComp;
