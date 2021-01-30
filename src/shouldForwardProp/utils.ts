/**
 * From `@emotion/memoize`
 *
 * @see https://www.npmjs.com/package/@emotion/memoize
 */
export function memoize<V>(fn: (arg: string) => V): (arg: string) => V {
  const cache = Object.create(null);

  return (arg: string) => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}
