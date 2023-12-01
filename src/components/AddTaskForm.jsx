import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AddTask = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Button = styled.input`
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
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
	transition: 0.1s all ease-in-out;
	&:focus {
		outline: none;

		border-bottom: 2px solid white;
	}
	&:focus::placeholder {
		color: transparent;
	}
`;

function AddTaskForm({ tasks, setTasks }) {
	function handleTaskSubmit(e) {
		if (task.length > 0) {
			e.preventDefault();
			setTasks([...tasks, task]);
			setTask("");
		}
	}

	function handleTaskNameInputChange(e) {
		if (e.target.value.length <= 30 && e.target.value.length >= 0) {
			console.log(e.target.value);
			setTask(e.target.value);
		}
	}

	const [task, setTask] = useState("");

	return (
		<section>
			<AddTask action="index.html" onSubmit={e => handleTaskSubmit(e)}>
				<TextField
					type="text"
					placeholder="Enter Task"
					value={task}
					onChange={e => handleTaskNameInputChange(e)}
				/>
				<Button type="submit" value="Submit" />
			</AddTask>
		</section>
	);
}

AddTaskForm.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired
};

export default AddTaskForm;
