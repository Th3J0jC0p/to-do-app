import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Panel from "./components/Panel.jsx";
import Footer from "./components/Footer.jsx";

import styled from "styled-components";

import { useEffect, useState } from "react";

const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 100px 1fr 50px;
	margin: 0;
	font-family: sans-serif;
`;

const Main = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 300px;
	grid-template-rows: 1fr;
`;

function App() {
	const [tasks, setTasks] = useState([]);
	const [isPropertiesPanelOpen, setPropertiesPanelOpen] = useState(-1);

	useEffect(() => {
		let newTasks = JSON.parse(localStorage.getItem("tasks"));
		if (newTasks) {
			setTasks(newTasks);
		}
	}, []);

	useEffect(() => {
		if (tasks.length !== 0) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		} else {
			localStorage.removeItem("tasks");
		}
	}, [tasks]);

	return (
		<Container>
			<Header />
			<Main>
				<Content
					tasks={tasks}
					setTasks={setTasks}
					isPropertiesPanelOpen={isPropertiesPanelOpen}
					setPropertiesPanelOpen={setPropertiesPanelOpen}
				/>
				<Panel
					tasks={tasks}
					setTasks={setTasks}
					isPropertiesPanelOpen={isPropertiesPanelOpen}
					setPropertiesPanelOpen={setPropertiesPanelOpen}
				/>
			</Main>
			<Footer />
		</Container>
	);
}

export default App;
