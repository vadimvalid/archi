export type StorageType<T> = {
  value: T;
  mtime?: number;
  integrity?: string;
  expires?: number;
}

export type ServerResponseCommonType<T = Array<any>> = {
  status: string;
  message: string;
  data: T;
}

export type AppSearchEmitType<T> = {
  isInputClear: boolean;
  searchList: T[];
}
