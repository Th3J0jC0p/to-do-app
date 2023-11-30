import PropTypes from "prop-types";

function Properties({ index, tasks, setTasks, setPropertiesPanelOpen }) {
	return (
		<div className="h-20">
			{tasks.map((task, i) => {
				index == i ? <div key={i}>task</div> : null;
			})}
		</div>
	);
}

Properties.propTypes = {
	index: PropTypes.number.isRequired,
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Properties;
