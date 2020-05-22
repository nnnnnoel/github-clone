import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { AuthStoreImpl } from '../../@types';
import api from '../api';

interface Props {
  AuthStore: AuthStoreImpl;
}

const Container = styled.aside`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const GithubLogin = styled.div`
  display: flex;
  width: 220px;
  height: 40px;
  background: black;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GithubLoginSpan = styled.span`
  color: white;
  font-size: 17pt;
  text-align: center;
`;

const Auth: React.FC<RouteComponentProps & Props> = ({ AuthStore, history }) => {
  const requestOAuth = React.useCallback(async () => {
    try {
      const response = await api.get('/github');
      window.location.href = response.data.githubAuthUrl;
    } catch (e) {
      console.log(e);
      console.log(e?.response);
    }
  }, []);

  React.useEffect(() => {
    const check = async () => {
      const token = await sessionStorage.getItem('token');
      if (token) {
        AuthStore.setAccessToken(token);
        history.replace('/main');
      }
    };
    check();
  }, [AuthStore, history]);

  return (
    <Container>
      <GithubLogin onClick={requestOAuth}>
        <GithubLoginSpan>Signin with Github</GithubLoginSpan>
      </GithubLogin>
    </Container>
  );
};

export default inject('AuthStore')(observer(Auth));
