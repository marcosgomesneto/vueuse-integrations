import * as fuse_js0 from "fuse.js";
import Fuse, { FuseResult, IFuseOptions } from "fuse.js";
import * as vue0 from "vue";
import { ComputedRef, MaybeRefOrGetter } from "vue";

//#region useFuse/index.d.ts
type FuseOptions<T> = IFuseOptions<T>;
interface UseFuseOptions<T> {
  fuseOptions?: FuseOptions<T>;
  resultLimit?: number;
  matchAllWhenSearchEmpty?: boolean;
}
declare function useFuse<DataItem>(search: MaybeRefOrGetter<string>, data: MaybeRefOrGetter<DataItem[]>, options?: MaybeRefOrGetter<UseFuseOptions<DataItem>>): {
  fuse: vue0.Ref<{
    search: <R = DataItem>(pattern: string | fuse_js0.Expression, options?: fuse_js0.FuseSearchOptions) => FuseResult<R>[];
    setCollection: (docs: readonly DataItem[], index?: fuse_js0.FuseIndex<DataItem> | undefined) => void;
    add: (doc: DataItem) => void;
    remove: (predicate: (doc: DataItem, idx: number) => boolean) => DataItem[];
    removeAt: (idx: number) => void;
    getIndex: () => fuse_js0.FuseIndex<DataItem>;
  }, Fuse<DataItem> | {
    search: <R = DataItem>(pattern: string | fuse_js0.Expression, options?: fuse_js0.FuseSearchOptions) => FuseResult<R>[];
    setCollection: (docs: readonly DataItem[], index?: fuse_js0.FuseIndex<DataItem> | undefined) => void;
    add: (doc: DataItem) => void;
    remove: (predicate: (doc: DataItem, idx: number) => boolean) => DataItem[];
    removeAt: (idx: number) => void;
    getIndex: () => fuse_js0.FuseIndex<DataItem>;
  }>;
  results: ComputedRef<FuseResult<DataItem>[]>;
};
type UseFuseReturn = ReturnType<typeof useFuse>;
//#endregion
export { FuseOptions, UseFuseOptions, UseFuseReturn, useFuse };