import * as React from 'react';
import Profile from './Profile';
import Repositories from './Repositories';
import Teams from './Teams';
import './index.scss';

const Left = () => {
  return (
    <aside className='team-left-column col-12 col-md-4 col-lg-3 bg-white border-right border-bottom hide-md hide-sm'>
      <div className='dashboard-sidebar js-sticky top-0 px-3 px-md-4 px-lg-4 overflow-auto'>
        <Profile />
        <Repositories />
        <Teams />
      </div>
    </aside>
  );
};

export default Left;
