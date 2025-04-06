import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return ( 
    <>
      <div className="app">
        <Header/>
        <Main/>

      </div>
    </>
   );
}

export default App;