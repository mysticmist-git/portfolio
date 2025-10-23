import { curryRight } from "lodash";
import {
  withDefaultClass as normalWithDefaultClass,
  withVariantClasses as normalWithVariantClasses,
} from "../component.tsx";

export const withDefaultClass = curryRight(normalWithDefaultClass);
export const withVariantClasses = curryRight(normalWithVariantClasses);
