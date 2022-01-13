import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <Button type="primary">
          Go back home
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;

