import React from "react";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";
import "../../styles/home.scss";

//create your first component
export function Home(props) {
	const [todo, setTodo] = useState(["Make the bed ", " Wash my hands"]);
	const [inputValue, setInputValue] = useState("");

	const handleClick = () => {
		const newTodo = todo;
		newTodo.push(inputValue);
		setTodo(newTodo);
		setInputValue("");
	};

	const deleteItem = (index, event) => {
		let newTodo = [...todo];
		let removed = newTodo.splice(index, 1);
		setTodo(newTodo);
	};
	return (
		<div className="todo-list">
			<div className="add-item-container">
				<div className="text-center">Add item</div>
				<br />
				<input
					className="inputs-container"
					type="text"
					placeholder="What needs to be done"
					value={inputValue}
					onChange={e => setInputValue(event.target.value)}
				/>
				<button onClick={handleClick} className="add-button">
					Add
				</button>
				<br />
				<ul>
					{todo.map((item, index) => {
						return (
							<li className="key" key={index}>
								{item}
								<button
									className="delete-button"
									onClick={e => deleteItem(index, event)}>
									X
								</button>
							</li>
						);
					})}

					{/* <li>{todo}</li> */}
					{/* {this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.value}
								<buttom
									onClick={() => this.deleteItem(item.id)}>
									X
								</buttom>
							</li>
						);
					})} */}
				</ul>
			</div>
		</div>
	);
}
