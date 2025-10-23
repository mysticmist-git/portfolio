import libClsx from "clsx";
import { twMerge } from "tailwind-merge";

export function clsx(...args: Parameters<typeof libClsx>) {
  return twMerge(libClsx(...args));
}
