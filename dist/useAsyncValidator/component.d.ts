import { UseAsyncValidatorOptions, UseAsyncValidatorReturn } from "@vueuse/integrations/useAsyncValidator";
import * as vue0 from "vue";
import { Reactive, SlotsType } from "vue";
import { Rules } from "async-validator";

//#region useAsyncValidator/component.d.ts
interface UseAsyncValidatorProps {
  form: Record<string, any>;
  rules: Rules;
  options?: UseAsyncValidatorOptions;
}
interface UseAsyncValidatorSlots {
  default: (data: Reactive<UseAsyncValidatorReturn>) => any;
}
declare const UseAsyncValidator: vue0.DefineSetupFnComponent<UseAsyncValidatorProps, Record<string, never>, SlotsType<UseAsyncValidatorSlots>, UseAsyncValidatorProps & {
  [x: `on${Capitalize<string>}`]: ((...args: unknown[]) => any) | undefined;
}, vue0.PublicProps>;
//#endregion
export { UseAsyncValidator, UseAsyncValidatorProps };