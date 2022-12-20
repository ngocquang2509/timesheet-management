import HoverImage1 from "./Advance/HOC/Image1";
import HoverImage2 from "./Advance/HOC/Image2";
import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={true} />
      <HoverImage1 />
      <HoverImage2 />
    </div>
  );
}

export default App;
