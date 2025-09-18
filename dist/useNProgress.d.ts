import nprogress, { NProgressOptions } from "nprogress";
import * as vue0 from "vue";
import { MaybeRefOrGetter } from "vue";

//#region useNProgress/index.d.ts
type UseNProgressOptions = Partial<NProgressOptions>;
/**
 * Reactive progress bar.
 *
 * @see https://vueuse.org/useNProgress
 */
declare function useNProgress(currentProgress?: MaybeRefOrGetter<number | null | undefined>, options?: UseNProgressOptions): {
  isLoading: vue0.WritableComputedRef<boolean, boolean>;
  progress: vue0.Ref<number | null | undefined, number | null | undefined>;
  start: () => nprogress.NProgress;
  done: (force?: boolean) => nprogress.NProgress;
  remove: () => void;
};
type UseNProgressReturn = ReturnType<typeof useNProgress>;
//#endregion
export { UseNProgressOptions, UseNProgressReturn, useNProgress };