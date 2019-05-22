import React from 'react';
import Card from 'react-bootstrap/Card';

const ClipComp = (props) => {
	return (
		<Card>
			<Card.Title>{props.info.title}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">{props.info.streamer}</Card.Subtitle>
			<Card.Img src={props.info.thumbnail} alt="clip thumbnail" />
			<Card.Link href={props.info.link}>Watch Clip</Card.Link>
			<Card.Link href={props.info.thumbnail.split('-preview-')[0] + '.mp4'}>
				<img src="./dl.jpg" alt="download" />
			</Card.Link>
			<Card.Text>
				Clipped on: {props.info.date.split('T')[0]}
				Views: {props.info.views}
			</Card.Text>
		</Card>
	);
};

export default ClipComp;
