import { useState } from "react";
import PropTypes from "prop-types";

function AddTaskForm({ tasks, setTasks }) {
	function handleTaskSubmit(e) {
		e.preventDefault();
		setTasks([...tasks, task]);
		setTask("");
	}

	function handleTaskNameInputChange(e) {
		setTask(e.target.value);
	}

	const [task, setTask] = useState("");

	return (
		<section className="addTaskSection">
			<form action="index.html" onSubmit={e => handleTaskSubmit(e)}>
				<input
					type="text"
					placeholder="Enter Task"
					value={task}
					onChange={e => handleTaskNameInputChange(e)}
				/>
				<button type="submit">Add Task</button>
			</form>
		</section>
	);
}

AddTaskForm.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired
};

export default AddTaskForm;
