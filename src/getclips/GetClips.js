import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ClipComp from './ClipComp';
import 'react-datepicker/dist/react-datepicker.css';

//https://api.twitch.tv/helix/games?name=fortnite gets info on game, name must match

class GetClips extends Component {
	constructor() {
		super();

		this.state = {
			startDate: new Date(),
			category: '',
			loading: false,
			url: ``,
			data: [],
			options: {
				method: 'GET',
				headers: {
					'Client-ID': 'sb5llptnugi6b8i5yqm9qqkzkotniu'
				}
			}
		};
		this.handleChange = this.handleChange.bind(this);
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

	handleSubmit() {
		this.setState({ data: [], loading: true });
		this.setURL();
		fetch(this.state.url, this.state.options).then((response) => response.json()).then((response) => {
			this.setState({ data: response.data, loading: false });
			this.displayClips();
		});
	}

	setURL() {
		this.setState({
			url: `https://api.twitch.tv/helix/clips?game_id=${this.state
				.category}&started_at=${this.state.startDate.getUTCFullYear()}-${this.state.startDate.getUTCMonth() +
				1}-${this.state.startDate.getUTCDate()}T00:00:00Z`
		});
	}

	render() {
		const games = this.state.data.map((game) => {
			return <option value={game.id}>{game.name}</option>;
		});

		const clips = this.state.data.map((clip) => {
			return (
				<ClipComp
					key={clip.id}
					info={{ broadcaster_name: clip.broadcaster_name, thumbnail: clip.thumbnail_url }}
				/>
			);
		});

		return (
			<div>
				<header data-test="getClipComp">
					<div className="button">
						<h1 data-test="getClipDesc">{}</h1>
						<form onSubmit={this.handleSubmit}>
							{this.state.loading ? (
								<div>Loading...</div>
							) : (
								<div>
									<DatePicker selected={this.state.startDate} onChange={this.dateChange} />

									<select name="category" value={this.state.category} onChange={this.handleChange}>
										{games}
									</select>

									<button data-test="getClipButton">Get Clips</button>
								</div>
							)}
						</form>
					</div>
				</header>
			</div>
		);
	}
}

export default GetClips;
