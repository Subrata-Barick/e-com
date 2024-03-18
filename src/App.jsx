import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ContextStore from "./contextandreducers/ContextStore";

const App = () => {
  return (
    <div>
      <ContextStore>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ContextStore>
    </div>
  );
};

export default App;
