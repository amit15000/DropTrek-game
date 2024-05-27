import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/simulation"></Route>
        <Route path="/game"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
