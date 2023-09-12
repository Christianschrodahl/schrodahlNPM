type DeepMerge<T, U> = T & U;
export default function deepMerge<T, U>(target: T, source: U): DeepMerge<T, U>;
export {};
