import * as CSS from 'csstype';
import { Scale } from './types';
import { get } from './util';

export interface StyleFn {
  (value: any, scale: Scale | undefined, props: any): any;
  scale?: string;
  defaults?: Scale;
}

export interface CreateStyleFunctionArgs {
  property?: keyof CSS.Properties;
  properties?: Array<keyof CSS.Properties>;
  scale?: string;
  transform?: (value: any, scale?: Scale, props?: any) => any;
  defaultScale?: Scale;
}

function getValue(n: any, scale?: Scale) {
  return get(scale, n, n);
}

export function createStyleFunction({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}: CreateStyleFunctionArgs): StyleFn {
  const p = properties || (property ? [property] : []);

  const styleFn: StyleFn = (_value, _scale, _props) => {
    const result: { [key in keyof CSS.Properties]: any } = {};

    const value = transform(_value, _scale, _props);

    if (value === null) {
      return undefined;
    }

    p.forEach((prop) => {
      result[prop] = value;
    });

    return result;
  };

  styleFn.scale = scale;
  styleFn.defaults = defaultScale;

  return styleFn;
}
