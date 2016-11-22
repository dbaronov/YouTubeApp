import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';

class SearchBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { term: '' };
	}

	render() {
		return ( 
			<div className="search-bar">
				<DebounceInput
					minLength={2}
					debounceTimeout={500}
					className = "search-bar__input"
					placeholder = "I am looking for"
					value = { this.state.term }
					onChange = { (event) => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;