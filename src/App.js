
import "./App.css";
import { CheckBox } from "./components/CheckBox";
import { Stopwatch } from "./components/Stopwatch";
// import { Timer } from "./components/Timer";
function App() {
	return (
		<div className="App">
			<CheckBox />
			<h1>Stopwatch</h1>

      <Stopwatch />
      {/* <Timer /> */}
		</div>
	);
}

export default App;
