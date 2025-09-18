import { jwtDecode } from "jwt-decode";
import { computed, toValue } from "vue";

//#region useJwt/index.ts
/**
* Reactive decoded jwt token.
*
* @see https://vueuse.org/useJwt
*/
function useJwt(encodedJwt, options = {}) {
	const { onError, fallbackValue = null } = options;
	const decodeWithFallback = (encodedJwt$1, options$1) => {
		try {
			return jwtDecode(encodedJwt$1, options$1);
		} catch (err) {
			onError === null || onError === void 0 || onError(err);
			return fallbackValue;
		}
	};
	const header = computed(() => decodeWithFallback(toValue(encodedJwt), { header: true }));
	const payload = computed(() => decodeWithFallback(toValue(encodedJwt)));
	return {
		header,
		payload
	};
}

//#endregion
export { useJwt };