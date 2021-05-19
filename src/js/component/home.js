import React from "react";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home(props) {
	const useState = {
		newItem: "",
		list: ""
	};
	function updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}
	function addItem() {
		//crear item con único id
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};
		// copiar la lista actual de items
		const list = [...this.state.list];

		// añadir nuevo item
		list.push(newItem);

		// actualizar stado con una nueva lista y rsetearlo a newitem input
		this.setState({
			list,
			newItem: ""
		});
	}
	function deleteItem(id) {
		//copia de los items en la lista

		const list = [...this.state.list];

		// filtro de los items borrados
		const updatedList = list.filter(item => item.id !== id);

		this.setState({ list: updatedList });
	}
	return (
		<div className="todo-list">
			<div>
				Add item ...
				<br />
				<input
					type="text"
					placeholder="Tyoe item here..."
					value={useState.newItem}
					onChange={e => this.updateInput("newItem", e.target)}
				/>
				<button onClick={() => this.addItem()}>Add</button>
				<br />
				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.value}
								<buttom
									onClick={() => this.deleteItem(item.id)}>
									X
								</buttom>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
