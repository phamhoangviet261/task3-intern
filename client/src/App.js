import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageType1 from './pages/pageType1/PageType1'
import PageType2 from './pages/pageType2/PageType2'
import PageType3 from './pages/pageType3/PageType3'
import Header from './components/header/Header'
function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageType1 />}/>
        <Route path="/page2" element={<PageType2 />}/>
        <Route path="/page3" element={<PageType3 />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
