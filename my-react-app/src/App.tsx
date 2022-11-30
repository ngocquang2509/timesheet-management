import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { Counter } from "./Main Concepts/Counter";
import { Form } from "./Main Concepts/Forms";
import { ListNumber } from "./Main Concepts/Keys";
import { Caculator } from "./Main Concepts/Lifting State Up/Caculator";
import { Garage } from "./Main Concepts/Lists";

const cars = ["Audi", "BMW", "Ford", "KIA"];
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting isLoggedIn={true} />
      <Caculator/>
    </div>
  );
}

export default App;
