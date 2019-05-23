import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import dl from './../images/dl-24px.svg';
import date from './../images/date-24px.svg';
import views from './../images/views-24px.svg';
import watch from './../images/watch-24px.svg';

const ClipComp = (props) => {
	return (
		<Card>
			<Card.Img src={props.info.thumbnail} alt="clip thumbnail" />
			<Card.Title>{props.info.title}</Card.Title>
			<div className="authorInfo">
				<Image src={props.info.profPic} roundedCircle height="30px" width="30px" />
				<Card.Subtitle className="mb-2 text-muted">{props.info.streamer}</Card.Subtitle>
			</div>

			<Card.Body>
				<div className="watchComp">
					<img src={watch} alt="watch clip icon" />
					<Card.Link className="watchText" href={props.info.link}>
						Watch Clip
					</Card.Link>
				</div>
				<div className="dlComp">
					<img src={dl} alt="download" />
					<Card.Link className="dlText" href={props.info.thumbnail.split('-preview-')[0] + '.mp4'}>
						Download Clip
					</Card.Link>
				</div>
			</Card.Body>

			<Card.Footer>
				<div className="footerComp">
					<img src={date} alt="date icon" />
					<div className="footerText">{props.info.date.split('T')[0]}</div>
				</div>
				<div className="footerComp">
					<img src={views} alt="views icon" />
					<div className="footerText">{props.info.views}</div>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default ClipComp;
