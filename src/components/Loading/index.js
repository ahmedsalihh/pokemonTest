import React from 'react';

import LoadingGif from '../../assets/img/loading.gif';

const Loading = () => {
  return (
    <div data-test="component-loading">
      <img src={LoadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
