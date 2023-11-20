import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create"

function App() {
  return (
    <div className="App">

        <BrowserRouter>

              <Routes>

                  <Route path="/home" element={<Home/>}/>
                  <Route path="/create" element={<Create/>}/>


              </Routes>

        </BrowserRouter>
    
    </div>
  );
}

export default App;
