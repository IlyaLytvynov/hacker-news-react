export enum LINK_ORDERED_BY_INPUT {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  url_ASC = "url_ASC",
  url_DESC = "url_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface IFeedRequest {
  orderBy: LINK_ORDERED_BY_INPUT;
  filter?:string;
  first?: number;
  skip?: number;
}

export class FeedRequest implements IFeedRequest {
  public orderBy: LINK_ORDERED_BY_INPUT = LINK_ORDERED_BY_INPUT.createdAt_DESC;
  public filter?: string;
  public first?: number;
  public skip?: number;

  constructor(requestInput?: IFeedRequest) {
    if (requestInput) {
      this.orderBy = requestInput.orderBy;
      this.orderBy = requestInput.orderBy;
    }
  }
}