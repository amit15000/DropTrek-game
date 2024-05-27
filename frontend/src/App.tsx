import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/simulation"></Route>
        <Route path="/game"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
