import * as React from 'react';

const Teams = () => {
  return (
    <div className='js-repos-container user-repos mb-3' id='dashboard-user-teams'>
      <div className='Details js-repos-container'>
        <h2 className='hide-sm hide-md f5 mb-1 border-top pt-3'>Your teams</h2>
        <p className='notice'>You don’t belong to any teams yet!</p>
      </div>
    </div>
  );
};

export default Teams;
