import { useVModel } from "@vueuse/core";
import { useSortable } from "@vueuse/integrations/useSortable";
import { defineComponent, h, reactive, shallowRef } from "vue";

//#region useSortable/component.ts
const UseSortable = /* @__PURE__ */ defineComponent((props, { slots }) => {
	const list = useVModel(props, "modelValue");
	const target = shallowRef();
	const data = reactive(useSortable(target, list, props.options));
	return () => {
		if (slots.default) return h(props.as || "div", { ref: target }, slots.default(data));
	};
}, {
	name: "UseSortable",
	props: [
		"as",
		"modelValue",
		"options"
	]
});

//#endregion
export { UseSortable };