import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import IndexPage from './IndexPage'
import Login from "./Login";
import Chat from "./Chat";
import HomePage from "./HomePage";
import Card from "./Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
