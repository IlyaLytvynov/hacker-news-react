export class LocalStorage {
  public static set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) as T: item;
  }
}