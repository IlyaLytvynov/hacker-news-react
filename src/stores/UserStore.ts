import { action, computed, observable } from 'mobx';

import { IUser } from '../models/User';
import { UserProvider } from '../providers/UserProvider';
import { IAuthData } from '../models/AuthData';
import { LocalStorage } from '../services/LocalStorage';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN';

export class UserStore {
  @observable
  private _token: string;

  @observable
  private _userInfo: IUser;

  constructor(
    private provider: UserProvider = new UserProvider(),
  ) {
    this.readTokenFromStorage();
  }
  
  @computed
  get isAuthenticated(): boolean {
    return !!this._token
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

  public logout(): Promise<void> {
    return Promise.resolve(this.setToken(''));
  }

  public signUp(data: any): Promise<void> {
    return this.provider.signUp(data)
      .then((resp) => this.resolveData(resp));
  }

  private resolveData(data: IAuthData): void {
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
    LocalStorage.set(AUTH_TOKEN_KEY, token);
  }

  private readTokenFromStorage(): void {
    this.setToken(LocalStorage.get(AUTH_TOKEN_KEY) || '');
  }
}