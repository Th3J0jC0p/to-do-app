import PropTypes from "prop-types";

function Content({ tasks, setTasks }) {
	function handleTaskRemoval(index) {
		let newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	}

	function handlePropertiesPanel(index) {
		let newTasks = [...tasks];
		let task = newTasks[index];
		let newTask = prompt("Enter new task", task);
		if (newTask !== null && newTask !== "") {
			newTasks.splice(index, 1, newTask);
			setTasks(newTasks);
		}
	}

	function handleTaskElementClick(e, index) {
		if (e.ctrlKey) {
			handleTaskRemoval(index);
		} else {
			handlePropertiesPanel(index);
		}
	}
	return (
		<main className="content">
			<ol>
				{tasks.map((task, index) => (
					<li
						key={index}
						onClick={e => handleTaskElementClick(e, index)}
					>
						{task}
					</li>
				))}
			</ol>
		</main>
	);
}

Content.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired
};

export default Content;
