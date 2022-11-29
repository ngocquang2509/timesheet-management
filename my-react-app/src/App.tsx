import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { Counter } from "./Main Concepts/Counter";
import { Garage } from "./Main Concepts/Lists";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting isLoggedIn={true} />
      <Garage/>
    </div>
  );
}

export default App;
