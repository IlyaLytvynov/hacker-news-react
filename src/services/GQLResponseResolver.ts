import { get } from 'lodash';

export class GQLResponseResolver {
  public static format<T, R>(response: Promise<T>, field: string): Promise<R> {
    return new Promise((resolve, reject) => {
      response
        .then((resp) => {
          resolve(get(resp, `data.${field}`));
        })
        .catch((e) => reject(e));
    });
  }
}