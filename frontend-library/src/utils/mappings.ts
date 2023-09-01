export function flattenArray<T>(arrayOfArrays: T[][]): T[] {
    return arrayOfArrays.reduce((result, currentArray) => {
      return result.concat(currentArray);
    }, []);
  }