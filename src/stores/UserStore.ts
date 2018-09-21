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

  constructor(
    private provider: UserProvider = new UserProvider(),
  ) {
  }

  @computed
  get token(): string {
    return this._token;
  }

  @computed
  get userInfo(): IUser {
    return this._userInfo;
  }

  public login(data: any): Promise<void> {
    return this.provider.login(data)
      .then((resp) => this.resolveData(resp));
  }

  public signUp(data: any): Promise<void> {
    return this.provider.signUp(data)
      .then((resp) => this.resolveData(resp));
  }

  private resolveData(data: IAuthData): void {
    LocalStorage.set('token', data.token);
    this.setToken(data.token);
    this.setUserInfo(data.user);
  }

  @action
  private setUserInfo(userInfo: IUser) {
    this._userInfo = userInfo;
  }

  @action
  private setToken(token: string) {
    this._token = token;
  }
}