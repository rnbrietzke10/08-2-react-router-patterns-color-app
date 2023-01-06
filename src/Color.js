import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  const routeParams = useParams();

  return (
    <div>
      <h1>{routeParams.color}</h1>
    </div>
  );
};

export default Color;
