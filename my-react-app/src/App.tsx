import { Profiler } from "react";
import HoverImage1 from "./Advance/HOC/Image1";
import HoverImage2 from "./Advance/HOC/Image2";
import NewForm from "./Advance/Profiler/NewForm";
import { profilerCallback } from "./Advance/Profiler/profilerCallback";
import "./App.css";
import { Greeting } from "./Main Concepts/Conditional Rendering";

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={true} />
      <HoverImage1 />
      <HoverImage2 />
      <Profiler id="NewForm" onRender={profilerCallback}>
        <NewForm />
      </Profiler>
    </div>
  );
}

export default App;