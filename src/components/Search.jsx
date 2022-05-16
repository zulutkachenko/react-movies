import { Component } from 'react';

class Search extends Component {
	state = {
		search: '',
		type: 'all',
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	}

	handleFilter = (e) => {
		this.setState(() => ({ type: e.target.dataset.type }), () => {
			this.props.searchMovies(this.state.search, this.state.type)
		})
	}

	render() {
		return <div className="row">
			<div className="input-field">
				<input
					placeholder="search"
					type="search"
					id="email_inline"
					className="validate"
					value={this.state.search}
					onChange={(e) => {
						this.setState({ search: e.target.value })
					}}
					onKeyDown={this.handleKey} />
				<button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
			</div>

			<div className="radio-search">
				<label>
					<input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
					<span>All</span>
				</label>
				<label className="radio-search">
					<input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
					<span>Movies Only</span>
				</label>
				<label className="radio-search">
					<input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
					<span>Series Only</span>
				</label>
			</div>
		</div >
	}
}


export { Search };