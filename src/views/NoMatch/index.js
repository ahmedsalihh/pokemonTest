import React from 'react';
import { Redirect } from 'react-router-dom';

const NoMatch = () => {
  return <Redirect to="/pokemon" />;
};

export default NoMatch;
