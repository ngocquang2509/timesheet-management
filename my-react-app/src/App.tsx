import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { Counter } from "./Main Concepts/Counter";
import { Garage } from "./Main Concepts/Lists";

const cars = ["Audi", "BMW", "Ford", "KIA"];

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting isLoggedIn={true} />
      <Garage cars={cars}/>
    </div>
  );
}

export default App;
