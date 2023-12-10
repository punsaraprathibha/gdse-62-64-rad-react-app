import React from 'react';
import './App.css';
import {Navbar} from "./Navbar/Navbar";
import {MainContent} from "./MainContent/MainContent";
import {Footer} from "./Footer/Footer";

function App() {
  return (
      <>
          <Navbar/>
          <MainContent/>
          <Footer/>
      </>
  );
}

export default App;
