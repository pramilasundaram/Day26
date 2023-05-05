import "./styles.css";
import User from "./pages/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./pages/actioncard/Action";
import Profile from "./pages/actioncard/Profile";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/action" element={<Action />} />
          <Route path="/action/:id" element={<Action />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
