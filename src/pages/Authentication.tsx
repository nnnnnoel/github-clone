import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { AuthStoreImpl } from '../../@types';
import api from '../api';

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 24pt;
  font-weight: bolder;
`;

interface Props {
  AuthStore: AuthStoreImpl;
}

const Authentication: React.FC<RouteComponentProps & Props> = ({
  location,
  history,
  AuthStore,
}) => {
  const [count, setCount] = React.useState<number>(1);

  const repeatRef = React.useRef<NodeJS.Timeout | number | null>(null);

  React.useEffect(() => {
    repeatRef.current = setInterval(() => {
      setCount((prevState) => (prevState % 3) + 1);
    }, 500);
    return () => {
      clearInterval(repeatRef.current as NodeJS.Timeout);
    };
  }, []);

  const authorize = React.useCallback(async () => {
    try {
      const params = location.search
        .substr(1)
        .split('&')
        .reduce((p, c) => {
          const [key, value] = c.split('=');
          return { ...p, [key]: value };
        }, {});
      const response = await api.post('/github/login', params);
      if (response.data.success) {
        AuthStore.setAccessToken(response.data.token);
        sessionStorage.setItem('token', response.data.token);
        history.replace('main');
      }
    } catch (e) {
      console.log(e);
      console.log(e?.response);
    }
  }, [AuthStore, history, location.search]);

  React.useEffect(() => {
    authorize();
  }, [authorize]);
  return (
    <Container>
      <Title>인증중{'.'.repeat(count)}</Title>
    </Container>
  );
};

export default inject('AuthStore')(observer(Authentication));
