import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { AuthStoreImpl, DashboardStoreImpl } from '../../@types';
import githubApi from '../api/githubApi';
import Center from '../components/Main/Center';
import Left from '../components/Main/Left';
import Right from '../components/Main/Right';

interface Props {
  AuthStore: AuthStoreImpl;
  DashboardStore: DashboardStoreImpl;
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f6f8fa !important;
`;

const Main: React.FC<RouteComponentProps & Props> = ({ AuthStore, DashboardStore, history }) => {
  const [page, setPage] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getUserInfo = React.useCallback(async () => {
    try {
      const response = await githubApi.get('/user');
      AuthStore.setUser(response.data);
    } catch (e) {
      console.log(e);
      console.log(e?.response);
    }
  }, [AuthStore]);

  const getTimeline = React.useCallback(
    async (name: string, currentPage: number) => {
      setIsLoading(true);
      try {
        if (
          (currentPage === 0 && DashboardStore.timeline.history.length === 0) ||
          currentPage > 0
        ) {
          const feeds = await githubApi.get('/users/' + name + '/received_events', {
            params: {
              page: currentPage,
            },
          });
          DashboardStore.appendHistory(feeds.data);
          setPage(currentPage);
        }
      } catch (e) {
        console.log(e);
        console.log(e?.response);
      } finally {
        setIsLoading(false);
      }
    },
    [DashboardStore]
  );

  const onMoreButtonPress = React.useCallback(async () => {
    if (AuthStore.user && !isLoading) {
      await getTimeline(AuthStore.user.login, page + 1);
    }
  }, [AuthStore.user, getTimeline, page, isLoading]);

  React.useEffect(() => {
    if (AuthStore.user) {
      getTimeline(AuthStore.user.login, 0);
    }
  }, [AuthStore.user, getTimeline]);

  React.useEffect(() => {
    if (AuthStore.accessToken) {
      getUserInfo();
    }
  }, [AuthStore.accessToken, getUserInfo]);

  React.useEffect(() => {
    const check = async () => {
      const token = await sessionStorage.getItem('token');
      if (token) {
        AuthStore.setAccessToken(token);
      } else {
        history.replace('/');
      }
    };
    if (!AuthStore.accessToken) check();
  }, [AuthStore, history]);

  return (
    <Container>
      <Left />
      <Center onMoreButtonPress={onMoreButtonPress} isLoading={isLoading} />
      <Right />
    </Container>
  );
};

export default inject('AuthStore', 'DashboardStore')(observer(Main));
