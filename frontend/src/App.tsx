import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Home from "./pages/Home";
import { Game } from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/simulation"></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
