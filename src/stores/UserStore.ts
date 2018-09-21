import { action, computed, observable } from 'mobx';
import { IUser } from '../models/User';
import { UserProvider } from '../providers/UserProvider';
import { IAuthData } from '../models/AuthData';
import { LocalStorage } from '../services/LocalStorage';

export class UserStore {
  @observable
  private _token: string;

  @observable
  private _userInfo: IUser;

  @computed
  get token(): string {
    return this._token;
  }

  @computed
  get userInfo(): IUser {
    return this._userInfo;
  }

  public login(data: any): void {
    UserProvider.login(data).then((resp: IAuthData) => {
      LocalStorage.set('token', resp.token);
      // this.props.history.push('/');
    });
  }

  @action
  public setToken(token: string) {
    this._token = token;
  }

  @action
  public setUserInfo(userInfo: IUser) {
    this._userInfo = userInfo;
  }
}