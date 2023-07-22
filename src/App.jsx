import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
