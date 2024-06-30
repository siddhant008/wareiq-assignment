import "./App.css";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<div className="App">
			<Layout>
				<Dashboard />
			</Layout>
		</div>
	);
}

export default App;
