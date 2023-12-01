import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.main``;

const ListContainer = styled.ol`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: minmax(100px, auto);
	grid-gap: 10px;
	padding: 0;
	margin: 0;
	justify-content: stretch;
	align-items: stretch;
	margin-top: 10px;
	width: 100%;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	text-align: center;
	transition: all 0.3s ease-in-out;
	&:hover {
		cursor: pointer;
		background-color: rgba(200, 0, 0, 0.6);
		color: white;
	}
`;

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
		setPropertiesPanelOpen(index);
	}

	function handleTaskElementClick(e, index) {
		if (e.ctrlKey) {
			handleTaskRemoval(index);
			setPropertiesPanelOpen(-1);
		} else {
			handlePropertiesPanel(index);
		}
	}

	return (
		<Container>
			<ListContainer>
				{tasks.map((task, index) => (
					<ListItem
						key={index}
						onClick={e => handleTaskElementClick(e, index)}
					>
						{task}
					</ListItem>
				))}
			</ListContainer>
		</Container>
	);
}

Content.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTasks: PropTypes.func.isRequired,
	isPropertiesPanelOpen: PropTypes.number.isRequired,
	setPropertiesPanelOpen: PropTypes.func.isRequired
};

export default Content;
