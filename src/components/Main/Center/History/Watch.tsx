import * as React from 'react';
import styled from 'styled-components';
import { Repository, WatchHistory } from '../../../../../@types';
import './index.scss';
import githubApi from '../../../../api/githubApi';
import getStarCount from '../../../../utils/star';
import { toRelativeTime, toUpdatedTime } from '../../../../utils/time';

interface Props {
  item: WatchHistory;
}

const Container = styled.div`
  display: flex !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  align-items: baseline !important;
  border-bottom: 1px solid #e1e4e8 !important;
`;

const Avatar = styled.span`
  margin-right: 16px !important;
`;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 3px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex !important;
  align-items: baseline !important;
`;

const HeaderAnchor = styled.a`
  display: inline-block !important;
  word-break: break-all !important;
  text-decoration: none;
  font-weight: 600 !important;
  color: #24292e !important;
`;

const Time = styled.span`
  white-space: nowrap !important;
  font-size: 12px !important;
  margin-left: 4px !important;
  color: #6a737d !important;
`;

const Box = styled.div`
  padding: 16px !important;
  margin-top: 8px !important;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
`;

const BoxAnchor = styled.a`
  display: inline-block !important;
  word-break: break-all !important;
  text-decoration: none;
  font-weight: 600 !important;
  color: #24292e !important;
`;

const BoxHeaderRow = styled.div`
  font-weight: 600 !important;
  line-height: 1.25 !important;
  font-size: 16px !important;
  color: #24292e !important;
`;

const StarBox = styled.div`
  display: inline-block !important;
  float: right !important;
`;

const Watch: React.FC<Props> = ({ item }) => {
  const [repository, setRepository] = React.useState<Repository | null>(null);

  const getRepositoryInfo = React.useCallback(async (url: string) => {
    try {
      const response = await githubApi.get(url);
      setRepository(response.data);
    } catch (e) {
      console.log(e);
      console.log(e?.response);
    }
  }, []);

  React.useEffect(() => {
    getRepositoryInfo(item.repo.url);
  }, [getRepositoryInfo, item.repo.url]);

  return (
    <Container>
      <Avatar>
        <AvatarImage src={item.actor.avatar_url} />
      </Avatar>
      <ContentContainer>
        <div>
          <HeaderContainer>
            <div>
              <HeaderAnchor>{item.actor.login}</HeaderAnchor>
              {' starred '}
              <HeaderAnchor>{item.repo.name}</HeaderAnchor>
            </div>
            <Time>{toRelativeTime(item.created_at)}</Time>
          </HeaderContainer>
        </div>
        <Box>
          <div>
            <BoxHeaderRow>
              <BoxAnchor>{item.repo.name}</BoxAnchor>
              <StarBox>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <button
                    name='button'
                    type='submit'
                    className='btn btn-sm ml-2 mb-2 js-toggler-target'
                  >
                    <svg
                      className='octicon octicon-star mr-1'
                      viewBox='0 0 14 16'
                      version='1.1'
                      width='14'
                      height='16'
                      aria-hidden='true'
                    >
                      <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z' />
                    </svg>
                    Star?
                  </button>
                </form>
              </StarBox>
            </BoxHeaderRow>
          </div>
          <div className='dashboard-break-word text-gray mt-1 repo-description'>
            <p>
              {(repository?.description?.length || 0) > 147
                ? repository?.description?.substr(0, 147) + '...'
                : repository?.description}
            </p>
          </div>
          <p className='f6 text-gray mt-2 mb-0'>
            <span className='d-inline-block text-gray mr-3'>
              <span className='ml-0'>
                <span className='repo-language-color' style={{ background: '#f1e05a' }} />
                <span itemProp='programmingLanguage'>{` ${repository?.language}`}</span>
              </span>
            </span>
            <span className='d-inline-block mr-3'>
              <a className='muted-link'>
                <svg
                  className='octicon octicon-star mr-1'
                  viewBox='0 0 14 16'
                  version='1.1'
                  width='14'
                  height='16'
                  aria-hidden='true'
                >
                  <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z' />
                </svg>
                {getStarCount(repository?.stargazers_count)}
              </a>
            </span>
            <span>{toUpdatedTime(repository?.updated_at || '')}</span>
          </p>
        </Box>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(Watch);
