import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import "./App.css";
import { Search } from "./component/search-box/search.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((e) => e.json())
			.then((e) => this.setState({ monsters: e }));
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<Search
					placeholder="search monsters"
					handleFunction={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonster} />
			</div>
		);
	}
}

export default App;
