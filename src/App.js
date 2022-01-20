import logo from "./logo.svg";
import "./App.scss";
import "./styles/scss/index.scss";
import LoginPage from "./components/Login";
import Dashboard from "./Pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Dashboard />
    </div>
  );
}

export default App;
