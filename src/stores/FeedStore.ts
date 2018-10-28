import { IFeedData } from '../models/FeedResponse';
import { ILink } from '../models/Link';
import { action, computed, observable, toJS } from 'mobx';

import { FeedProvider } from '../providers/FeedProvider';
import { INewLinkInput } from '../models/INewLinkInput';

export class FeedStore implements IFeedData {
  @observable
  private _links: Map<string, ILink> = new Map();

  @observable
  private _counts: number = 0;

  @computed
  get links(): Array<ILink> {
    return Array.from(this._links.values());
  }

  @computed
  get counts(): number {
    console.log('COMPUTED LINKS');
    return this._counts;
  }

  @action
  public setLinks(): Promise<void> {
    return FeedProvider.fetchData().then((data) => {
      data.links.forEach((link) => {
        this._links.set(link.id, link);
      });
    });
  }

  public voteForLink(linkId: string): any {
    return FeedProvider.vote(linkId).then((resp) => {
      debugger;
      this.updateLink(resp);
    });
  }

  @action
  public addLink(link: INewLinkInput): Promise<void> {
    return FeedProvider.sendData(link).then(this.setLink).catch((resp) => {
      debugger; 
      this.updateLink(resp);
    });
  }

  @action
  private setLink = (resp) => {
    this._links = this._links.set(resp.id, resp);
  }

  @action
  private updateLink(voteResponse: any): void {
    // HACK TO CALL CHANGE DETECTION
    const link = toJS(this._links.get(voteResponse.link.id))!;
    link.votes = observable(voteResponse.link.votes);
    this._links.set(link.id, link);
    console.log(link, this);
  }
}