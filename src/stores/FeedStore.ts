import { IFeedData } from '../containers/feed/models/FeedResponse';
import { ILink } from '../containers/feed/models/Link';
import { action, computed, observable } from 'mobx';
import { FeedProvider } from '../providers/FeedProvider';

export class FeedStore implements IFeedData{
    @observable
    private _links: Array<ILink> = [];

    @observable
    private _counts: number = 0;

    @computed
    get links():  Array<ILink> {
      return this._links;
    }

    @computed
    get counts(): number {
      return this._counts;
    }

    @action
    public setLinks(): void {
      FeedProvider.fetchData().then((data) => {
        this._links = data.links;
      });
    }
}