import Counter from "./components/counterApp/counterApp";
import TodoApp from "./components/todoApp/TodoApp";

function App() {
  return (
    <main className="container">
      <Counter></Counter>

      <hr />
      <TodoApp></TodoApp>
    </main>
  );
}

export default App;
