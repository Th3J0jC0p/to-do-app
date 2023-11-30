import PropTypes from "prop-types";

function Content({
	tasks,
	setTasks,
	isPropertiesPanelOpen,
	setPropertiesPanelOpen
}) {
	function handleTaskRemoval(index) {
		let newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	}

	function handlePropertiesPanel(index) {
		setPropertiesPanelOpen(previousState => {
			return {
				isOpen: true,
				index: previousState.idOpen ? -1 : index
			};
		});
	}

	function handleTaskElementClick(e, index) {
		if (e.ctrlKey) {
			handleTaskRemoval(index);
			setPropertiesPanelOpen(() => {
				return {
					isOpen: false,
					index: -1
				};
			});
		} else {
			handlePropertiesPanel(index);
		}
	}

	return (
		<main className="flex flex-col row-start-2 row-span-4 col-span-4">
			<ol className="p-2 flex-1 grid grid-cols-3 grid-rows-auto">
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
	setTasks: PropTypes.func.isRequired,
	isPropertiesPanelOpen: PropTypes.object.isRequired,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Content;
