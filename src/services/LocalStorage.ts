export class LocalStorage {
  public static update<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static read<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item): item;
  }
}