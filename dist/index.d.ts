import { ConfigurableFlush, RemovableRef } from "@vueuse/shared";
import { Rules, ValidateError, ValidateOption } from "async-validator";
import * as vue0 from "vue";
import { ComputedRef, MaybeRef, MaybeRefOrGetter, Ref, ShallowRef, WritableComputedRef } from "vue";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as changeCase from "change-case";
import { Options } from "change-case";
import * as universal_cookie0 from "universal-cookie";
import Cookie from "universal-cookie";
import { Arrayable, ConfigurableDocument, EventHookOn, Fn, MaybeComputedElementRef, MaybeElement } from "@vueuse/core";
import { Brush, Drauu, Options as Options$1 } from "drauu";
import { ActivateOptions, DeactivateOptions, Options as Options$2 } from "focus-trap";
import * as fuse_js0 from "fuse.js";
import Fuse, { FuseResult, IFuseOptions } from "fuse.js";
import { JwtHeader, JwtPayload } from "jwt-decode";
import nprogress, { NProgressOptions } from "nprogress";
import QRCode from "qrcode";
import Sortable, { Options as Options$3 } from "sortablejs";
import { IncomingMessage } from "node:http";

//#region useAsyncValidator/index.d.ts
type AsyncValidatorError = Error & {
  errors: ValidateError[];
  fields: Record<string, ValidateError[]>;
};
interface UseAsyncValidatorExecuteReturn {
  pass: boolean;
  errors: AsyncValidatorError['errors'] | undefined;
  errorInfo: AsyncValidatorError | null;
  errorFields: AsyncValidatorError['fields'] | undefined;
}
interface UseAsyncValidatorReturn {
  pass: ShallowRef<boolean>;
  isFinished: ShallowRef<boolean>;
  errors: ComputedRef<AsyncValidatorError['errors'] | undefined>;
  errorInfo: ShallowRef<AsyncValidatorError | null>;
  errorFields: ComputedRef<AsyncValidatorError['fields'] | undefined>;
  execute: () => Promise<UseAsyncValidatorExecuteReturn>;
}
interface UseAsyncValidatorOptions {
  /**
   * @see https://github.com/yiminghe/async-validator#options
   */
  validateOption?: ValidateOption;
  /**
   * The validation will be triggered right away for the first time.
   * Only works when `manual` is not set to true.
   *
   * @default true
   */
  immediate?: boolean;
  /**
   * If set to true, the validation will not be triggered automatically.
   */
  manual?: boolean;
}
/**
 * Wrapper for async-validator.
 *
 * @see https://vueuse.org/useAsyncValidator
 * @see https://github.com/yiminghe/async-validator
 */
declare function useAsyncValidator(value: MaybeRefOrGetter<Record<string, any>>, rules: MaybeRefOrGetter<Rules>, options?: UseAsyncValidatorOptions): UseAsyncValidatorReturn & PromiseLike<UseAsyncValidatorReturn>;
//#endregion
//#region useAxios/index.d.ts
interface UseAxiosReturn<T, R = AxiosResponse<T>, _D = any, O extends UseAxiosOptions = UseAxiosOptions<T>> {
  /**
   * Axios Response
   */
  response: ShallowRef<R | undefined>;
  /**
   * Axios response data
   */
  data: O extends UseAxiosOptionsWithInitialData<T> ? Ref<T> : Ref<T | undefined>;
  /**
   * Indicates if the request has finished
   */
  isFinished: Ref<boolean>;
  /**
   * Indicates if the request is currently loading
   */
  isLoading: Ref<boolean>;
  /**
   * Indicates if the request was canceled
   */
  isAborted: Ref<boolean>;
  /**
   * Any errors that may have occurred
   */
  error: ShallowRef<unknown | undefined>;
  /**
   * Aborts the current request
   */
  abort: (message?: string | undefined) => void;
  /**
   * Alias to `abort`
   */
  cancel: (message?: string | undefined) => void;
  /**
   * Alias to `isAborted`
   */
  isCanceled: Ref<boolean>;
}
/**
 * Extended AxiosRequestConfig with pathParams to replace in the URL
 */
type UseAxiosRequestConfig<D> = AxiosRequestConfig<D> & {
  pathParams?: Record<string, string | number>;
};
interface StrictUseAxiosReturn<T, R, D, O extends UseAxiosOptions = UseAxiosOptions<T>> extends UseAxiosReturn<T, R, D, O> {
  /**
   * Manually call the axios request
   */
  execute: (url?: string | UseAxiosRequestConfig<D>, config?: UseAxiosRequestConfig<D>) => Promise<StrictUseAxiosReturn<T, R, D, O>>;
}
interface EasyUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
  /**
   * Manually call the axios request
   */
  execute: (url: string, config?: UseAxiosRequestConfig<D>) => Promise<EasyUseAxiosReturn<T, R, D>>;
}
interface UseAxiosOptionsBase<T = any> {
  /**
   * Will automatically run axios request when `useAxios` is used
   *
   */
  immediate?: boolean;
  /**
   * Use shallowRef.
   *
   * @default true
   */
  shallow?: boolean;
  /**
   * Abort previous request when a new request is made.
   *
   * @default true
   */
  abortPrevious?: boolean;
  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void;
  /**
   * Callback when success is caught.
   */
  onSuccess?: (data: T) => void;
  /**
   * Sets the state to initialState before executing the promise.
   */
  resetOnExecute?: boolean;
  /**
   * Callback when request is finished.
   */
  onFinish?: () => void;
}
interface UseAxiosOptionsWithInitialData<T> extends UseAxiosOptionsBase<T> {
  /**
   * Initial data
   */
  initialData: T;
}
type UseAxiosOptions<T = any> = UseAxiosOptionsBase<T> | UseAxiosOptionsWithInitialData<T>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsWithInitialData<T> = UseAxiosOptionsWithInitialData<T>>(url: string, config?: UseAxiosRequestConfig<D>, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsWithInitialData<T> = UseAxiosOptionsWithInitialData<T>>(url: string, instance?: AxiosInstance, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsWithInitialData<T> = UseAxiosOptionsWithInitialData<T>>(url: string, config: UseAxiosRequestConfig<D>, instance: AxiosInstance, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>>(url: string, config?: UseAxiosRequestConfig<D>, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>>(url: string, instance?: AxiosInstance, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any, O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>>(url: string, config: UseAxiosRequestConfig<D>, instance: AxiosInstance, options?: O): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(config?: UseAxiosRequestConfig<D>): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(instance?: AxiosInstance): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>;
declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(config?: UseAxiosRequestConfig<D>, instance?: AxiosInstance): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>;
//#endregion
//#region useChangeCase/index.d.ts
type EndsWithCase<T> = T extends `${infer _}Case` ? T : never;
type FilterKeys<T> = { [K in keyof T as K extends string ? K : never]: EndsWithCase<K> };
type ChangeCaseKeys = FilterKeys<typeof changeCase>;
type ChangeCaseType = ChangeCaseKeys[keyof ChangeCaseKeys];
declare function useChangeCase(input: MaybeRef<string>, type: MaybeRefOrGetter<ChangeCaseType>, options?: MaybeRefOrGetter<Options> | undefined): WritableComputedRef<string>;
declare function useChangeCase(input: MaybeRefOrGetter<string>, type: MaybeRefOrGetter<ChangeCaseType>, options?: MaybeRefOrGetter<Options> | undefined): ComputedRef<string>;
//#endregion
//#region useCookies/index.d.ts
/**
 * Creates a new {@link useCookies} function
 * @param req - incoming http request (for SSR)
 * @see https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie universal-cookie
 * @description Creates universal-cookie instance using request (default is window.document.cookie) and returns {@link useCookies} function with provided universal-cookie instance
 */
declare function createCookies(req?: IncomingMessage): (dependencies?: string[] | null, {
  doNotParse,
  autoUpdateDependencies
}?: {
  doNotParse?: boolean | undefined;
  autoUpdateDependencies?: boolean | undefined;
}) => {
  /**
   * Reactive get cookie by name. If **autoUpdateDependencies = true** then it will update watching dependencies
   */
  get: <T = any>(name: string, options?: universal_cookie0.CookieGetOptions | undefined) => T;
  /**
   * Reactive get all cookies
   */
  getAll: <T = any>(options?: universal_cookie0.CookieGetOptions | undefined) => T;
  set: (name: string, value: any, options?: universal_cookie0.CookieSetOptions | undefined) => void;
  remove: (name: string, options?: universal_cookie0.CookieSetOptions | undefined) => void;
  addChangeListener: (callback: universal_cookie0.CookieChangeListener) => void;
  removeChangeListener: (callback: universal_cookie0.CookieChangeListener) => void;
};
/**
 * Reactive methods to work with cookies (use {@link createCookies} method instead if you are using SSR)
 * @param dependencies - array of watching cookie's names. Pass empty array if don't want to watch cookies changes.
 * @param options
 * @param options.doNotParse - don't try parse value as JSON
 * @param options.autoUpdateDependencies - automatically update watching dependencies
 * @param cookies - universal-cookie instance
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function useCookies(dependencies?: string[] | null, {
  doNotParse,
  autoUpdateDependencies
}?: {
  doNotParse?: boolean | undefined;
  autoUpdateDependencies?: boolean | undefined;
}, cookies?: Cookie): {
  /**
   * Reactive get cookie by name. If **autoUpdateDependencies = true** then it will update watching dependencies
   */
  get: <T = any>(name: string, options?: universal_cookie0.CookieGetOptions | undefined) => T;
  /**
   * Reactive get all cookies
   */
  getAll: <T = any>(options?: universal_cookie0.CookieGetOptions | undefined) => T;
  set: (name: string, value: any, options?: universal_cookie0.CookieSetOptions | undefined) => void;
  remove: (name: string, options?: universal_cookie0.CookieSetOptions | undefined) => void;
  addChangeListener: (callback: universal_cookie0.CookieChangeListener) => void;
  removeChangeListener: (callback: universal_cookie0.CookieChangeListener) => void;
};
//#endregion
//#region useDrauu/index.d.ts
type UseDrauuOptions = Omit<Options$1, 'el'>;
interface UseDrauuReturn {
  drauuInstance: Ref<Drauu | undefined>;
  load: (svg: string) => void;
  dump: () => string | undefined;
  clear: () => void;
  cancel: () => void;
  undo: () => boolean | undefined;
  redo: () => boolean | undefined;
  canUndo: ShallowRef<boolean>;
  canRedo: ShallowRef<boolean>;
  brush: Ref<Brush>;
  onChanged: EventHookOn;
  onCommitted: EventHookOn;
  onStart: EventHookOn;
  onEnd: EventHookOn;
  onCanceled: EventHookOn;
}
/**
 * Reactive drauu
 *
 * @see https://vueuse.org/useDrauu
 * @param target The target svg element
 * @param options Drauu Options
 */
declare function useDrauu(target: MaybeComputedElementRef, options?: UseDrauuOptions): UseDrauuReturn;
//#endregion
//#region useFocusTrap/index.d.ts
interface UseFocusTrapOptions extends Options$2 {
  /**
   * Immediately activate the trap
   */
  immediate?: boolean;
}
interface UseFocusTrapReturn {
  /**
   * Indicates if the focus trap is currently active
   */
  hasFocus: ShallowRef<boolean>;
  /**
   * Indicates if the focus trap is currently paused
   */
  isPaused: ShallowRef<boolean>;
  /**
   * Activate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts Activate focus trap options
   */
  activate: (opts?: ActivateOptions) => void;
  /**
   * Deactivate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts Deactivate focus trap options
   */
  deactivate: (opts?: DeactivateOptions) => void;
  /**
   * Pause the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: Fn;
  /**
   * Unpauses the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: Fn;
}
/**
 * Reactive focus-trap
 *
 * @see https://vueuse.org/useFocusTrap
 */
declare function useFocusTrap(target: MaybeRefOrGetter<Arrayable<MaybeRefOrGetter<string> | MaybeComputedElementRef>>, options?: UseFocusTrapOptions): UseFocusTrapReturn;
//#endregion
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
//#region useIDBKeyval/index.d.ts
interface Serializer<T> {
  read: (raw: unknown) => T;
  write: (value: T) => unknown;
}
interface UseIDBOptions<T> extends ConfigurableFlush {
  /**
   * Watch for deep changes
   *
   * @default true
   */
  deep?: boolean;
  /**
   * On error callback
   *
   * Default log error to `console.error`
   */
  onError?: (error: unknown) => void;
  /**
   * Use shallow ref as reference
   *
   * @default false
   */
  shallow?: boolean;
  /**
   * Write the default value to the storage when it does not exist
   *
   * @default true
   */
  writeDefaults?: boolean;
  /**
   * Custom data serialization
   */
  serializer?: Serializer<T>;
}
interface UseIDBKeyvalReturn<T> {
  data: RemovableRef<T>;
  isFinished: ShallowRef<boolean>;
  set: (value: T) => Promise<void>;
}
/**
 *
 * @param key
 * @param initialValue
 * @param options
 */
declare function useIDBKeyval<T>(key: IDBValidKey, initialValue: MaybeRefOrGetter<T>, options?: UseIDBOptions<T>): UseIDBKeyvalReturn<T>;
//#endregion
//#region useJwt/index.d.ts
interface UseJwtOptions<Fallback> {
  /**
   * Value returned when encounter error on decoding
   *
   * @default null
   */
  fallbackValue?: Fallback;
  /**
   * Error callback for decoding
   */
  onError?: (error: unknown) => void;
}
interface UseJwtReturn<Payload, Header, Fallback> {
  header: ComputedRef<Header | Fallback>;
  payload: ComputedRef<Payload | Fallback>;
}
/**
 * Reactive decoded jwt token.
 *
 * @see https://vueuse.org/useJwt
 */
declare function useJwt<Payload extends object = JwtPayload, Header extends object = JwtHeader, Fallback = null>(encodedJwt: MaybeRefOrGetter<string>, options?: UseJwtOptions<Fallback>): UseJwtReturn<Payload, Header, Fallback>;
//#endregion
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
//#region useQRCode/index.d.ts
/**
 * Wrapper for qrcode.
 *
 * @see https://vueuse.org/useQRCode
 * @param text
 * @param options
 */
declare function useQRCode(text: MaybeRefOrGetter<string>, options?: QRCode.QRCodeToDataURLOptions): vue0.ShallowRef<string, string>;
//#endregion
//#region useSortable/index.d.ts
interface UseSortableReturn {
  /**
   * start sortable instance
   */
  start: () => void;
  /**
   * destroy sortable instance
   */
  stop: () => void;
  /**
   * Options getter/setter
   * @param name a Sortable.Options property.
   * @param value a value.
   */
  option: (<K extends keyof Sortable.Options>(name: K, value: Sortable.Options[K]) => void) & (<K extends keyof Sortable.Options>(name: K) => Sortable.Options[K]);
}
type UseSortableOptions = Options$3 & ConfigurableDocument;
declare function useSortable<T>(selector: string, list: MaybeRef<T[]>, options?: UseSortableOptions): UseSortableReturn;
declare function useSortable<T>(el: MaybeRefOrGetter<MaybeElement>, list: MaybeRef<T[]>, options?: UseSortableOptions): UseSortableReturn;
/**
 * Inserts a element into the DOM at a given index.
 * @param parentElement
 * @param element
 * @param {number} index
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L81C1-L94C2
 */
declare function insertNodeAt(parentElement: Element, element: Element, index: number): void;
/**
 * Removes a node from the DOM.
 * @param {Node} node
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L96C1-L102C2
 */
declare function removeNode(node: Node): void;
declare function moveArrayElement<T>(list: MaybeRef<T[]>, from: number, to: number, e?: Sortable.SortableEvent | null): void;
//#endregion
export { AsyncValidatorError, ChangeCaseType, EasyUseAxiosReturn, FuseOptions, StrictUseAxiosReturn, UseAsyncValidatorExecuteReturn, UseAsyncValidatorOptions, UseAsyncValidatorReturn, UseAxiosOptions, UseAxiosOptionsBase, UseAxiosOptionsWithInitialData, UseAxiosRequestConfig, UseAxiosReturn, UseDrauuOptions, UseDrauuReturn, UseFocusTrapOptions, UseFocusTrapReturn, UseFuseOptions, UseFuseReturn, UseIDBKeyvalReturn, UseIDBOptions, UseJwtOptions, UseJwtReturn, UseNProgressOptions, UseNProgressReturn, UseSortableOptions, UseSortableReturn, createCookies, insertNodeAt, moveArrayElement, removeNode, useAsyncValidator, useAxios, useChangeCase, useCookies, useDrauu, useFocusTrap, useFuse, useIDBKeyval, useJwt, useNProgress, useQRCode, useSortable };