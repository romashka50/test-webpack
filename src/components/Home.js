import React from 'react';
import Header from './Header';

const Home = ({ children }) => (
    <div className="container">
      <Header />
      {children}
    </div>
  );

export default Home;
