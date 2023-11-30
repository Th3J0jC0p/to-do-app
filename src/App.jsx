import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Panel from "./components/Panel.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);
	const [isPropertiesPanelOpen, setPropertiesPanelOpen] = useState({
		isOpen: false,
		index: -1
	});

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
		<div className="h-screen w-screen text-secondary bg-primary grid grid-cols-5 grid-rows-6">
			<Header />
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
			<Footer />
		</div>
	);
}

export default App;
