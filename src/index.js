import React from 'react';
import ReactDOM from 'react-dom';

import banner from './assets/images/banner.png';

import './style.scss';

const App = () => (
  <div>
    <img src={banner} />
    App入口数据的lallf
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
