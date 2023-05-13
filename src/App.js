import logo from "./logo.svg";
import "./App.css";
//import Greeting from "./components/pure/Greeting";
//import GreetingF from "./components/pure/GreetingF";
import tasklistComponent from "./components/container/task_list";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name={"Soad FC"}></Greeting>*/}
        {/*<GreetingF name="Martin"></GreetingF>*/}
        <tasklistComponent></tasklistComponent>
      </header>
    </div>
  );
}

export default App;
