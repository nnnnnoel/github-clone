import { action, observable } from 'mobx';
import { AuthStoreImpl, User } from '../../@types';
import githubApi from '../api/githubApi';

class AuthStore implements AuthStoreImpl {
  @observable accessToken: string = '';

  @observable user: User | null = null;

  @action
  setAccessToken = (token: string) => {
    const accessToken = 'token ' + token;
    this.accessToken = accessToken;
    githubApi.defaults.headers.common.Authorization = accessToken;
  };

  @action
  setUser = (user: User | null) => {
    this.user = user;
  };
}

export default new AuthStore();
