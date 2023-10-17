type OpenDBParams = {
  databaseName: string;
  storeName?: string;
  storeOptions?: IDBObjectStoreParameters;
  createHook?: (this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => void;
};
declare global {
  interface IDBObjectStore {
    add(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;

    clear(): Promise<IDBRequest<undefined>>;

    count(query?: IDBValidKey | IDBKeyRange): Promise<IDBRequest<number>>;

    createIndex(
      name: string,
      keyPath: string | string[],
      options?: IDBIndexParameters
    ): IDBIndex;

    delete(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<undefined>>;

    deleteIndex(name: string): void;

    get(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<any>>;

    getAll(
      query?: IDBValidKey | IDBKeyRange | null,
      count?: number
    ): Promise<IDBRequest<any[]>>;

    getAllKeys(
      query?: IDBValidKey | IDBKeyRange | null,
      count?: number
    ): Promise<IDBRequest<IDBValidKey[]>>;

    getKey(
      query: IDBValidKey | IDBKeyRange
    ): IDBRequest<IDBValidKey | undefined>;
    index(name: string): Promise<IDBIndex>;

    openCursor(
      query?: IDBValidKey | IDBKeyRange | null,
      direction?: IDBCursorDirection
    ): Promise<IDBRequest<IDBCursorWithValue | null>>;

    openKeyCursor(
      query?: IDBValidKey | IDBKeyRange | null,
      direction?: IDBCursorDirection
    ): IDBRequest<IDBCursor | null>;
    put(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;
    _add(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;

    _clear(): Promise<IDBRequest<undefined>>;

    _count(query?: IDBValidKey | IDBKeyRange): Promise<IDBRequest<number>>;

    _createIndex(
      name: string,
      keyPath: string | string[],
      options?: IDBIndexParameters
    ): IDBIndex;

    _delete(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<undefined>>;

    _deleteIndex(name: string): void;

    _get(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<any>>;

    _getAll(
      query?: IDBValidKey | IDBKeyRange | null,
      count?: number
    ): Promise<IDBRequest<any[]>>;

    _getAllKeys(
      query?: IDBValidKey | IDBKeyRange | null,
      count?: number
    ): Promise<IDBRequest<IDBValidKey[]>>;

    _getKey(
      query: IDBValidKey | IDBKeyRange
    ): IDBRequest<IDBValidKey | undefined>;
    _index(name: string): Promise<IDBIndex>;

    _openCursor(
      query?: IDBValidKey | IDBKeyRange | null,
      direction?: IDBCursorDirection
    ): Promise<IDBRequest<IDBCursorWithValue | null>>;

    _openKeyCursor(
      query?: IDBValidKey | IDBKeyRange | null,
      direction?: IDBCursorDirection
    ): IDBRequest<IDBCursor | null>;
    _put(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;
  }
}

let instance: IndexedDBFactory;

export const IndexedDBVuePlugin = {
  install: async (app: any, options: OpenDBParams) => {
    app.config.globalProperties.$db = new IndexedDBFactory();
    await app.config.globalProperties.$db.openDB(options);
  }
};

export default class IndexedDBFactory {
  dbHashMap: Map<string, IndexedDBUtils> = new Map();
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  static get getInstance() {
    return instance;
  }

  database(name: string) {
    if (this.dbHashMap.has(name)) {
      return this.dbHashMap.get(name);
    }
    return null;
  }
  /**
   * indexedDBUtils factory
   */
  openDB({ createHook, databaseName }: OpenDBParams): Promise<IndexedDBUtils> {
    return new Promise((resolve, rejejct) => {
      if (this.dbHashMap.has(databaseName)) {
        resolve(this.dbHashMap.get(databaseName)!);
        return;
      }
      const request = indexedDB.open(databaseName);
      request.onsuccess = evt => {
        this.dbHashMap.set(
          databaseName,
          new IndexedDBUtils({
            databaseName,
            db: (<IDBOpenDBRequest>evt.target).result
          })
        );

        resolve(this.dbHashMap.get(databaseName)!);
        console.log('openDb DONE');
      };
      request.onerror = function (evt) {
        // @ts-ignore
        console.error('openDb:', evt.target.errorCode);
        // @ts-ignore
        rejejct(evt.target.errorCode);
      };

      request.onupgradeneeded = createHook!;
    });
  }
}

class IndexedDBUtils {
  databaseName: string;
  db: IDBDatabase;
  // readonly proxyAttrs = ['add', ];
  constructor({ databaseName, db }: { databaseName: string; db: IDBDatabase }) {
    this.databaseName = databaseName;
    this.db = db;
  }

  private toPromise(target: IDBObjectStore, key: string, args: any[]) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      const caller = target['_' + key](...args) as IDBRequest;
      caller.onerror = reject;
      caller.onsuccess = resolve;
    });
  }

  objectStore(storeName: string, mode: IDBTransactionMode = 'readwrite') {
    const transaction = this.db.transaction([storeName], mode);
    const objectStore = transaction.objectStore(storeName);
    for (const key in objectStore) {
      if (objectStore[key as keyof IDBObjectStore] instanceof Function) {
        // @ts-ignore
        objectStore['_' + key] = objectStore[key];
        // @ts-ignore
        objectStore[key] = new Proxy(objectStore[key], {
          apply: (target: CallableFunction, that: IDBObjectStore, args) => {
            // @ts-ignore
            if (!that[target?.name]) return;
            return this.toPromise(that, target.name, args);
          }
        });
      }
    }
    return objectStore;
  }

  transaction(storeName: string, mode: IDBTransactionMode = 'readwrite') {
    return this.db.transaction(storeName, mode);
  }
}
