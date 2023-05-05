type OpenDBParams = {
    databaseName?: string;
    storeName?: string;
    storeOptions?: IDBObjectStoreParameters;
    createHook?: (this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any;
};
declare global {
    interface IDBObjectStore {
        add(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;
        clear(): Promise<IDBRequest<undefined>>;
        count(query?: IDBValidKey | IDBKeyRange): Promise<IDBRequest<number>>;
        createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
        delete(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<undefined>>;
        deleteIndex(name: string): void;
        get(query: IDBValidKey | IDBKeyRange): Promise<IDBRequest<any>>;
        getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): Promise<IDBRequest<any[]>>;
        getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): Promise<IDBRequest<IDBValidKey[]>>;
        getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
        index(name: string): Promise<IDBIndex>;
        openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): Promise<IDBRequest<IDBCursorWithValue | null>>;
        openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
        put(value: any, key?: IDBValidKey): Promise<IDBRequest<IDBValidKey>>;
    }
}
export declare const IndexedDBVuePlugin: {
    install: (app: any, options: OpenDBParams) => Promise<void>;
};
export default class IndexedDBFactory {
    dbHashMap: Map<string, IndexedDBUtils>;
    constructor();
    static get getInstance(): IndexedDBFactory;
    database(name: string): IndexedDBUtils | null | undefined;
    /**
     * indexedDBUtils factory
     */
    openDB({ createHook, databaseName }: OpenDBParams): Promise<IndexedDBUtils>;
}
declare class IndexedDBUtils {
    databaseName: string;
    db: IDBDatabase;
    constructor({ databaseName, db }: {
        databaseName: string;
        db: IDBDatabase;
    });
    private toPromise;
    objectStore(storeName: string, mode?: IDBTransactionMode): IDBObjectStore;
    transaction(storeName: string, mode?: IDBTransactionMode): IDBTransaction;
}
export {};
