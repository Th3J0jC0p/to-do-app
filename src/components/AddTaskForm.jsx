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

function AddTaskForm({ tasks, setTasks, setPropertiesPanelOpen }) {
	function handleTaskSubmit(e) {
		if (taskName.length > 0) {
			setPropertiesPanelOpen(-1);
			e.preventDefault();
			setTasks([...tasks, { name: taskName, description: "" }]);
			setTaskName("");
		}
	}

	function handleTaskNameInputChange(e) {
		if (e.target.value.length <= 30 && e.target.value.length >= 0) {
			console.log(e.target.value);
			setTaskName(e.target.value);
		}
	}

	const [taskName, setTaskName] = useState("");

	return (
		<section>
			<AddTask action="index.html" onSubmit={e => handleTaskSubmit(e)}>
				<TextField
					type="text"
					placeholder="Enter Task"
					value={taskName}
					onChange={e => handleTaskNameInputChange(e)}
				/>
				<Button type="submit" value="Submit" />
			</AddTask>
		</section>
	);
}

AddTaskForm.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setTasks: PropTypes.func.isRequired
};

export default AddTaskForm;
