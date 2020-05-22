import * as React from 'react';

const Repositories = () => {
  return (
    <div
      className='mb-3 Details js-repos-container'
      id='dashboard-repos-container'
      role='navigation'
      aria-label='Repositories'
    >
      <div className='js-repos-container' id='repos-container'>
        <h2 className='f4 hide-sm hide-md mb-1 f5 d-flex flex-justify-between flex-items-center'>
          Repositories
          <a className='btn btn-sm btn-primary text-white'>
            <svg
              className='octicon octicon-repo'
              viewBox='0 0 12 16'
              version='1.1'
              width='12'
              height='16'
              aria-hidden='true'
            >
              <path d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z' />
            </svg>
            New
          </a>
        </h2>

        <div className='mt-2 mb-3' role='search' aria-label='Repositories'>
          <input
            type='text'
            className='form-control input-block mb-3 js-filterable-field js-your-repositories-search'
            id='dashboard-repos-filter-left'
            placeholder='Find a repository…'
            aria-label='Find a repository…'
            autoComplete='off'
          />
        </div>
        <form className='ajax-pagination-form js-ajax-pagination js-more-repos-form'>
          <input name='repos_cursor' type='hidden' value='Nw' />
          <button
            name='button'
            type='submit'
            className='width-full text-left btn-link f6 muted-link text-left mt-2 border-md-0 border-top py-md-0 py-3 px-md-0 px-2'
          >
            Show more
          </button>
        </form>
      </div>
    </div>
  );
};

export default Repositories;
