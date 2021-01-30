export const defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export function isNumber(n: any) {
  return typeof n === 'number' && !isNaN(n);
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

export function isObject(value: any): value is Record<string, any> {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}
