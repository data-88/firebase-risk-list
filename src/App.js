import "./App.css";
import Title from "./components/Title"
import AddRisk from "./components/AddRisk";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddRisk />
      </div>
    </div>
  );
}

export default App;
