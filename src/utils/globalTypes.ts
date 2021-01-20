/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
declare global {
  type Nullable<T> = T | null;
  type GOb = { [key: string]: any };

  type Effect<T> = { type: T };

  interface IO<T = any> {}
  interface NetworkIO<T = any> {}
  interface DOMMutation<T = any> {}
  interface LocalStorageAction<T = any> {}
}

export default {};
