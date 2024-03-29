import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import LoginPage from "./components/LoginPage";
import Verification from "./components/Verification";
import AccountCreated from "./components/AccountCreated";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={FirstPage} />
        <Route exact path="/loginpage" Component={LoginPage} />
        <Route exact path="/verification" Component={Verification} />
        <Route exact path="/account" Component={AccountCreated} />
        <Route exact path="/home" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
