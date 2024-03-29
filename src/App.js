import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
	constructor () {
		super();
		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	onSearchChange = e => this.setState({ searchField: e.target.value });

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(users => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					handleChange={ this.onSearchChange }
					placeholder="search monster" />
				<CardList monsters={ filteredMonsters } />
			</div>
		);
	}
}

export default App;
