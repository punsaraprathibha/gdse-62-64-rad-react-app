import React from 'react';
import './App.css';
import {Navbar} from "./view/Navbar/Navbar";
import {MainContent} from "./view/MainContent/MainContent";
import {Footer} from "./view/Footer/Footer";

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
