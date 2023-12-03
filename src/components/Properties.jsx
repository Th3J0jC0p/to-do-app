import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.input`
	margin-top: 10px;
	margin-bottom: 10px;
	width: 120px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	background-color: #333;
	color: white;
	border: none;
	border-radius: 10px;
	padding: 10px;
	transition: all 0.3s ease-in-out;
	&:hover {
		cursor: pointer;
		background-color: #ad0000;
	}
`;

const TextField = styled.input`
	background-color: transparent;
	color: white;
	border: 0;
	padding: 5px 2px;
	margin: 5px;
	transition: 0.1s all ease-in-out;
	&:focus {
		outline: none;

		border-bottom: 2px solid white;
	}
	&:focus::placeholder {
		color: transparent;
	}
`;

const Props = styled.div`
	display: flex;
	position: relative;
	padding: 30px 0;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ButtonClose = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	padding: 5px;
	border-radius: 10px;
	border: none;
	background-color: transparent;
	color: white;
	font-size: 20px;
	font-weight: bold;

	top: 10px;
	transition: all 0.3s ease-in-out;
	&:hover {
		cursor: pointer;
		background-color: #ad0000;
	}
`;

function Properties({ index, tasks, setTasks, setPropertiesPanelOpen }) {
	const [changeTask, setChangeTask] = useState(tasks[index]);

	function handleTaskNameSet(e) {
		e.preventDefault();
		const newTasks = [...tasks];
		newTasks[index] = changeTask;
		setTasks(newTasks);
		setPropertiesPanelOpen(-1);
	}

	//Bug: Problem with Text Field. See Developer Console

	return (
		<Props>
			<ButtonClose onClick={() => setPropertiesPanelOpen(-1)}>
				X
			</ButtonClose>
			<TextField
				type="text"
				defaultValue={changeTask.name}
				placeholder="Enter Task"
				onChange={e =>
					setChangeTask({ ...changeTask, name: e.target.value })
				}
			/>
			<TextField
				type="text"
				defaultValue={changeTask.description}
				placeholder="Description"
				onChange={e =>
					setChangeTask({
						...changeTask,
						description: e.target.value
					})
				}
			/>
			<Button
				type="submit"
				value="Set"
				onClick={e => handleTaskNameSet(e)}
			/>
		</Props>
	);
}

Properties.propTypes = {
	index: PropTypes.number.isRequired,
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setTasks: PropTypes.func.isRequired,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Properties;
