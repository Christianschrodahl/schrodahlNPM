type DeepMerge<T, U> = T & U;

export default function deepMerge<T, U>(target: T, source: U): DeepMerge<T, U> {
  const merged= { ...target }; // Cast merged to the appropriate type

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      //let item= merged[key as keyof string]
      if (source[key] && source[key].constructor === Object) {
        // @ts-ignore
        if (merged[key] && merged[key].constructor === Object) {
          // @ts-ignore
          merged[key] = deepMerge(merged[key], source[key]);
        } else {
          // @ts-ignore
          merged[key] = { ...source[key] };
        }
      } else {
        // @ts-ignore
        merged[key] = source[key];
      }
    }
  }

  return merged as DeepMerge<T, U>;
}