import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import AllUsers from "./components/AllUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all" element={<AllUsers/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter >
  );
}

export default App;
