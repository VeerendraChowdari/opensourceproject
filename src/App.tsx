import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
