import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ClipComp from './ClipComp';
import Slider from 'react-slick';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';
import './../styles/style.css';

//https://api.twitch.tv/helix/games?name=fortnite gets info on game, name must match

function pad(n) {
	return n < 10 ? '0' + n : n;
}

class GetClips extends Component {
	constructor() {
		super();

		this.state = {
			startDate: new Date(),
			category: '',
			category_id: '',
			loading: false,
			loadingClips: false,
			display: false,
			url: ``,
			data: [],
			clips: [],
			options: {
				method: 'GET',
				headers: {
					'Client-ID': 'sb5llptnugi6b8i5yqm9qqkzkotniu'
				}
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.dateChange = this.dateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		//populate the game list
		this.setState({ loading: true });
		fetch('https://api.twitch.tv/helix/games/top', this.state.options)
			.then((response) => response.json())
			.then((response) => {
				this.setState({ data: response.data, loading: false });
			});
	}

	//look for div class ="player-video" or look for <video></video> tags

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}

	dateChange(date) {
		this.setState({
			startDate: date
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			loadingClips: true,
			display: true
		});
		console.log(this.state.display);
		console.log(this.state.loadingClips);
		fetch(
			`https://api.twitch.tv/helix/clips?game_id=${this.state
				.category_id}&started_at=${this.state.startDate.getUTCFullYear()}-${pad(
				this.state.startDate.getUTCMonth() + 1
			)}-${pad(this.state.startDate.getUTCDate())}T00:00:00Z`,
			this.state.options
		)
			.then((response) => response.json())
			.then((response) => {
				this.setState({ clips: response.data, loadingClips: false });
			});
	}

	handleClick(event) {
		const { name, id } = event.target;
		this.setState({ category: name, category_id: id });
	}

	render() {
		console.log(this.state.clips);
		//map fetched games to select list
		const games = this.state.data.map((game) => {
			return (
				// <option value={game.id} onMouseOver={this.displayThumbnail()}>
				// 	{game.name}{' '}
				// </option>
				<div>
					<img
						id={game.id}
						name={game.name}
						src={game.box_art_url.replace('{width}', '285').replace('{height}', '380')}
						onClick={this.handleClick}
						alt={`${game.name} box art`}
					/>
				</div>
			);
		});

		//map fetched clips to clip components
		const clips = this.state.clips.map((clip) => {
			return (
				<ClipComp
					key={clip.id}
					info={{
						streamer: clip.broadcaster_name,
						title: clip.title,
						date: clip.created_at,
						thumbnail: clip.thumbnail_url,
						link: clip.url,
						language: clip.language,
						views: clip.view_count.toString()
					}}
				/>
			);
		});

		const settings = {
			dots: false
		};

		return (
			<header data-test="getClipComp">
				<h1 data-test="getClipDesc">{}</h1>

				<form onSubmit={this.handleSubmit}>
					{this.state.loading ? (
						<div>Loading...</div>
					) : (
						<div>
							<div className="container">
								Select date:
								<DatePicker selected={this.state.startDate} onChange={this.dateChange} />
								<Slider {...settings}>{games}</Slider>
								{/* <select name="category" value={this.state.category} onChange={this.handleChange}>
								{games}
							</select> */}
								Selected:{this.state.category}
							</div>
							<Button variant="light" type="submit">
								Get Clips
							</Button>
						</div>
					)}
				</form>

				<div test-data="clipDisplay">
					{this.state.display &&
						(this.state.loadingClips ? <img src={'loading.svg'} alt="loading.." /> : <div>{clips}</div>)}
				</div>
			</header>
		);
	}
}

export default GetClips;
