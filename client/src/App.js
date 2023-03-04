import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import AddStudent from "./components/AddStudent";
import StudentsTable from "./components/StudentsTable";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<StudentsTable />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
