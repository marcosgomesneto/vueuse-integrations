import { isClient, toRef } from "@vueuse/shared";
import QRCode from "qrcode";
import { shallowRef, watch } from "vue";

//#region useQRCode/index.ts
/**
* Wrapper for qrcode.
*
* @see https://vueuse.org/useQRCode
* @param text
* @param options
*/
function useQRCode(text, options) {
	const src = toRef(text);
	const result = shallowRef("");
	watch(src, async (value) => {
		if (src.value && isClient) result.value = await QRCode.toDataURL(value, options);
	}, { immediate: true });
	return result;
}

//#endregion
export { useQRCode };