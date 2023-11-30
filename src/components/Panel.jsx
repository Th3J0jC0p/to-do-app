import AddTaskForm from "./AddTaskForm.jsx";
import Properties from "./Properties.jsx";
import PropTypes from "prop-types";

function Panel({
	tasks,
	setTasks,
	isPropertiesPanelOpen,
	setPropertiesPanelOpen
}) {
	return (
		<article className="col-start-6 row-span-4 row-start-2 p-2">
			<AddTaskForm tasks={tasks} setTasks={setTasks} />
			{isPropertiesPanelOpen.isOpen && (
				<Properties
					setPropertiesPanelOpen={setPropertiesPanelOpen}
					index={isPropertiesPanelOpen.index}
					tasks={tasks}
					setTasks={setTasks}
				/>
			)}
		</article>
	);
}

Panel.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired,
	isPropertiesPanelOpen: PropTypes.object.isRequired,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Panel;
