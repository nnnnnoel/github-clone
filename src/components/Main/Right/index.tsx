import * as React from 'react';
import './index.scss';
import Trends from './Trends';

const Right = () => {
  return (
    <aside className='team-left-column col-12 col-md-3 col-lg-3 pr-3 mt-5 hide-lg hide-md hide-sm border-bottom'>
      <Trends />
    </aside>
  );
};

export default Right;
