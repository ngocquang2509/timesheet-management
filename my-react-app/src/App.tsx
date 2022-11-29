import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { Counter } from "./Main Concepts/Counter";
import { ListNumber } from "./Main Concepts/Keys";
import { Garage } from "./Main Concepts/Lists";

const cars = ["Audi", "BMW", "Ford", "KIA"];
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting isLoggedIn={true} />
      <Garage cars={cars} />
      <ListNumber value={numbers} />
    </div>
  );
}

export default App;
