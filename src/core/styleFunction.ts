import * as CSS from 'csstype';
import { Scale } from './types';
import { get } from './util';

export interface StyleFn {
  (value: any, scale: Scale | undefined, props: any): any;
  properties?: string[];
  property?: string;
  scale?: string;
  transform?: typeof get;
  defaults?: Scale;
}

export interface CreateStyleFunctionArgs {
  property?: keyof CSS.Properties;
  properties?: Array<keyof CSS.Properties>;
  scale?: string;
  transform?: typeof get;
  defaultScale?: Scale;
}

export function createStyleFunction({
  properties,
  property,
  scale,
  transform = get,
  defaultScale,
}: CreateStyleFunctionArgs): StyleFn {
  const p = properties || (property ? [property] : []);

  const styleFn: StyleFn = (_value, _scale) => {
    const result: { [key in keyof CSS.Properties]: any } = {};

    const value = transform(_scale, _value);

    if (value === null) {
      return undefined;
    }

    p.forEach((prop) => {
      result[prop] = value;
    });

    return result;
  };

  styleFn.properties = properties;
  styleFn.property = property;
  styleFn.scale = scale;
  styleFn.transform = transform;
  styleFn.defaults = defaultScale;

  return styleFn;
}
