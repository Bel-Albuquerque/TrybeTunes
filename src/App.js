import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './components/AppRouters';

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
