import * as React from 'react';
import AuthStore from '../../../store/AuthStore';

const Profile = () => {
  return (
    <div className='border-bottom py-3 mt-3 mb-4'>
      <div className='details-reset details-overlay d-inline-block'>
        <div className='no-underline btn-link text-gray-dark text-bold width-full'>
          <img src={AuthStore.user?.avatar_url} className='avatar avatar-user' alt='' />
          <span className='css-truncate css-truncate-target ml-1'>{AuthStore.user?.login}</span>
          <span className='dropdown-caret' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
