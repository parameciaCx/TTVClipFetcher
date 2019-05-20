import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

//https://api.twitch.tv/helix/games?name=fortnite gets info on game, name must match

class GetClips extends Component {
	constructor() {
		super();

		this.state = {
			startDate: '',
			category: '',
			loading: false,
			url: 'https://api.twitch.tv/helix/clips?game_id=${category}&started_at=2019-05-01T00:00:00Z',
			data: [],
			options: {
				method: 'GET',
				headers: {
					'Client-ID': 'sb5llptnugi6b8i5yqm9qqkzkotniu'
				}
			}
		};
	}

	componentDidMount() {
		//populate the game list
		this.setState({ loading: true });
		fetch('https://api.twitch.tv/helix/games/top', this.state.options)
			.then((response) => response.json())
			.then((response) => {
				this.setState({ data: response.data });
			});
		this.setState({ loading: false });
	}
	//look for div class ="player-video" or look for <video></video> tags

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}

	handleSubmit(event) {
		const { name, value, type, checked } = event.target;
		type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}

	render() {
		const games = this.state.data.map((game) => {
			return <option value={game.id}>{game.name}</option>;
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
									<DatePicker selected={this.state.startDate} onChange={this.handleChange} />

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
