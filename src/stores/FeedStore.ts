import { IFeedData } from '../models/FeedResponse';
import { ILink } from '../models/Link';
import { action, computed, observable } from 'mobx';

import { FeedProvider } from '../providers/FeedProvider';
import { INewLinkInput } from '../models/INewLinkInput';

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
      debugger;
      this._links = observable(data.links);
    });
  }

  @action
  public addLink(link: INewLinkInput): Promise<void> {
    return FeedProvider.sendData(link).then(this.setLink).catch(() => {
      console.log('TEST ERROR');
    });
  }

  @action
  private setLink = (resp) => {
    this._links = this.links.concat([resp]);
  }
}