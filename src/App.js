import "./App.scss";
import LoginPage from "./components/pages/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import "./styles/scss/index.scss";
import AppRouter from "./router/index";

function App() {
  return (
    <div className="App">
      <span className="btn-new-message">
        <i className="far fa-edit"></i>
      </span>

      <AppRouter />
    </div>
  );
}

export default App;
