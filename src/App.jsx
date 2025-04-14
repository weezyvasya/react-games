import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./Components/Main/Main";
import Game1 from "./Pages/Game1/Game1";
import Game2 from "./Pages/Game2/Game2";
import Game3 from "./Pages/Game3/Game3";
import Game4 from "./Pages/Game4/Game4";
import Game5 from "./Pages/Game5/Game5";
import Game6 from "./Pages/Game6/Game6";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/game1" element={<Game1 />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/game3" element={<Game3 />} />
            <Route path="/game4" element={<Game4 />} />
            <Route path="/game5" element={<Game5 />} />
            <Route path="/game6" element={<Game6 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
