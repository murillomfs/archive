import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Navbar />
    </BrowserRouter>
  );
}

export default App;
