export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  Get(key: string) {
    return this.storage.getItem(key);
  }
  Set(key: string, value: string) {
    this.storage.setItem(key, value);
  }
  Remove(key: string) {
    this.storage.removeItem(key);
  }
  Clear() {
    this.storage.clear();
  }
}
