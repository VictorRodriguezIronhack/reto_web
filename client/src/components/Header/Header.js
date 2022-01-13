import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import Home from '../Home';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <Button type="primary" style={{ width: 30, height: 30, margin: 10 }}>
          Home
        </Button>
      </Link>
      <Routes>
        <Route exact path="/" render={() => <Home />} />
      </Routes>
    </div>
  );
};

export default Header;

