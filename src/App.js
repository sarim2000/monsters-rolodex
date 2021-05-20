import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((e) => e.json())
			.then((e) => this.setState({ monsters: e }));
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
