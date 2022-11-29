import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";
import { Counter } from "./Main Concepts/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
