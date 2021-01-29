/* eslint-disable @typescript-eslint/ban-types */

import * as CSS from 'csstype';
import { ObjectOrArray } from './core';

export type TLengthStyledSystem = string | 0 | number;

export interface Theme<TLength = TLengthStyledSystem> {
  breakpoints?: ObjectOrArray<number | string | symbol>;
  mediaQueries?: { [size: string]: string };
  space?: ObjectOrArray<CSS.Property.Margin<number | string>>;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>>;
  colors?: ObjectOrArray<CSS.Property.Color>;
  fonts?: ObjectOrArray<CSS.Property.FontFamily>;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>>;
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>>;
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
  borders?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>>;
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>>;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>;
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | Array<T | null>
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type ThemeValue<K extends keyof ThemeType, ThemeType, TVal = any> = ThemeType[K] extends TVal[]
  ? number
  : ThemeType[K] extends Record<infer E, TVal>
  ? E
  : ThemeType[K] extends ObjectOrArray<infer F>
  ? F
  : never;
