import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./components/Search";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
