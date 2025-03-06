import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import IndexPage from './IndexPage'
import Login from "./Login";
import Chat from "./Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
