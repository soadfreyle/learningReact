import logo from "./logo.svg";
import "./App.css";
//import Greeting from "./components/pure/Greeting";
//import GreetingF from "./components/pure/GreetingF";
import TasklistComponent from "./components/container/Task_list";
//import Ejemplo1 from "./hooks/Ejemplo1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*<Greeting name={"Soad FC"}></Greeting>*/}
        {/*<GreetingF name="Martin"></GreetingF>*/}
        {/* <GreetingF name="Martin"></GreetingF> */}
        {/* <Ejemplo1></Ejemplo1> */}
        <TasklistComponent></TasklistComponent>
      </header>
    </div>
  );
}

export default App;
