import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { User } from "./Main Concepts/Containment";
import { Caculator } from "./Main Concepts/Lifting State Up/Caculator";
import { Counter } from "./Main Concepts/Lifting State Up/Counter";

const cars = ["Audi", "BMW", "Ford", "KIA"];
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={true} />
      <User>
        <h3>This is the children component</h3>
      </User>
      <Caculator />
      <Counter />
    </div>
  );
}

export default App;
