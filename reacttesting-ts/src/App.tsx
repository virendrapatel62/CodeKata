import Counter from "./components/counterApp/counterApp";
import TodoApp from "./components/todoApp/TodoApp";

function App() {
  return (
    <main className="container">
      <h1 className="display-3 text-center">React Unit Testing</h1>
      <hr />
      <Counter></Counter>
      <hr />
      <TodoApp></TodoApp>
    </main>
  );
}

export default App;
