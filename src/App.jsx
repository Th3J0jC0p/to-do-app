import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Panel from "./components/Panel.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);

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
		<>
			<Header />
			<Content tasks={tasks} setTasks={setTasks} />
			<Panel tasks={tasks} setTasks={setTasks} />
			<Footer />
		</>
	);
}

export default App;
