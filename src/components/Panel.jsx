import AddTaskForm from "./AddTaskForm.jsx";
import PropTypes from "prop-types";

function Panel({ tasks, setTasks }) {
	return (
		<article className="panel">
			<AddTaskForm tasks={tasks} setTasks={setTasks} />
		</article>
	);
}

Panel.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired
};

export default Panel;
