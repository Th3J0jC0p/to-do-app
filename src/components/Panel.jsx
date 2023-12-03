import AddTaskForm from "./AddTaskForm.jsx";
import Properties from "./Properties.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";

const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Header = styled.header`\
	text-align: center;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: bold;
	margin-top: 10px;
`;

function Panel({
	tasks,
	setTasks,
	isPropertiesPanelOpen,
	setPropertiesPanelOpen
}) {
	return (
		<Article>
			<Header>Add a Task:</Header>
			<AddTaskForm
				tasks={tasks}
				setTasks={setTasks}
				setPropertiesPanelOpen={setPropertiesPanelOpen}
			/>
			{isPropertiesPanelOpen != -1 && (
				<Properties
					setPropertiesPanelOpen={setPropertiesPanelOpen}
					index={isPropertiesPanelOpen}
					tasks={tasks}
					setTasks={setTasks}
				/>
			)}
		</Article>
	);
}

Panel.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setTasks: PropTypes.func.isRequired,
	isPropertiesPanelOpen: PropTypes.number,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Panel;
