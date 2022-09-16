import logo from "./logo.svg";
import "./App.css";
import UserefComponent from "./components/UserefComponent";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

function App() {
  return (
    <div className="App">
      {/* <UserefComponent /> */}
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}

export default App;
