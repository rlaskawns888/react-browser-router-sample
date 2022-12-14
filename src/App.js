import React from "react";
import { 
  Routes, 
  Route, 
  BrowserRouter, 
  useLocation
} from 'react-router-dom';

import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/product/:prdNum" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
