import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OptionInterface from "./components/OptionInterface";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptionInterface />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;