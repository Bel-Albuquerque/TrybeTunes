import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './components/AppRouters';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    );
  }
}

export default App;
