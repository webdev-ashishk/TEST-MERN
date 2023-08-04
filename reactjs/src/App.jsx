import "./App.css";
import TodoComponent from "./TodoComponent";

function App() {
  console.log("app-rendered");
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
      <TodoComponent></TodoComponent>
    </>
  );
}

export default App;
