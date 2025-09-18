import QRCode from "qrcode";
import * as vue0 from "vue";
import { MaybeRefOrGetter } from "vue";

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
export { useQRCode };