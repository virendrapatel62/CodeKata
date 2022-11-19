import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { Dashboard } from "./components/Dashboard";
import Users from "./components/Users";

function App() {
  const style = {
    color: "red",
  };

  const loginButtonHandler = () => {
    console.log("Login");
  };

  const logOutButtonHandler = () => {
    console.log("Logout");
  };

  return (
    <div>
      <h1>Hello World...</h1>

      <Button handler={logOutButtonHandler} label="Click here" style={style}>
        Logout
      </Button>
      <Button handler={loginButtonHandler} color="blue" style={style}>
        Login
      </Button>

      <Dashboard />

      <Users></Users>
    </div>
  );
}

export default App;
