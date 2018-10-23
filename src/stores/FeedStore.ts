import { IFeedData } from '../models/FeedResponse';
import { ILink } from '../models/Link';
import { action, computed, observable } from 'mobx';

import { FeedProvider } from '../providers/FeedProvider';

export class FeedStore implements IFeedData {
  @observable
  private _links: Array<ILink> = [];

  @observable
  private _counts: number = 0;

  @computed
  get links(): Array<ILink> {
    return this._links;
  }

  @computed
  get counts(): number {
    return this._counts;
  }

  @action
  public setLinks(): Promise<void> {
    return FeedProvider.fetchData().then((data) => {
      this._links = data.links;
    });
  }

  @action
  public addLink(link: string): Promise<void> {
    return FeedProvider.sendData({url: 'TEST 222', description: 'asdasdas'}).then((resp) => {
      console.log('HELO WORLD', resp);
    }).catch(() => {
      console.log('TEST ERROR');
    });
  }
}