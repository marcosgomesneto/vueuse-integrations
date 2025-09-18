import { RenderableComponent } from "@vueuse/core";
import { UseSortableOptions, UseSortableReturn } from "@vueuse/integrations/useSortable";
import * as vue0 from "vue";
import { Reactive, SlotsType } from "vue";

//#region useSortable/component.d.ts
interface UseSortableProps extends RenderableComponent {
  modelValue: any[];
  options?: UseSortableOptions;
}
interface UseSortableSlots {
  default: (data: Reactive<UseSortableReturn>) => any;
}
declare const UseSortable: vue0.DefineSetupFnComponent<UseSortableProps, Record<string, never>, SlotsType<UseSortableSlots>, UseSortableProps & {
  [x: `on${Capitalize<string>}`]: ((...args: unknown[]) => any) | undefined;
}, vue0.PublicProps>;
//#endregion
export { UseSortable, UseSortableProps };