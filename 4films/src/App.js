import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./pages/routes";
import PrivateRoot from "./components/PrivateRoot";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AuthState from "./contexts/AuthContext/AuthState";
function App() {
  console.log(window.location.href);
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthState>
          <Routes>
            {routes.map(({ component: Component, path }) => {
              return path == "/login" ? (
                <Route path={path} element={<Component />} />
              ) : (
                <Route
                  path={path}
                  element={<PrivateRoot component={<Component />} />}
                />
              );
            })}
          </Routes>
        </AuthState>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
