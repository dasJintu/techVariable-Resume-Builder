import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Builder from "./pages/Builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="build" element={<Builder />} />
    </Routes>
  );
}

export default App;
