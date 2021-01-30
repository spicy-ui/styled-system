import * as CSS from 'csstype';
import { compose, system, SystemConfig } from '../core';
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from '../types';
import { defaultTheme } from '../utils';

export interface GridProps<ThemeType extends Theme = RequiredTheme> {
  gridGap?: ResponsiveValue<CSS.Property.GridGap<TLengthStyledSystem>, ThemeType>;
  gap?: ResponsiveValue<CSS.Property.Gap<TLengthStyledSystem>, ThemeType>;
  gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<TLengthStyledSystem>, ThemeType>;
  rowGap?: ResponsiveValue<CSS.Property.RowGap<TLengthStyledSystem>, ThemeType>;
  gridColumnGap?: ResponsiveValue<CSS.Property.GridColumnGap<TLengthStyledSystem>, ThemeType>;
  columnGap?: ResponsiveValue<CSS.Property.ColumnGap<TLengthStyledSystem>, ThemeType>;
  gridRow?: ResponsiveValue<CSS.Property.GridRow, ThemeType>;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn, ThemeType>;
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow, ThemeType>;
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows<TLengthStyledSystem>, ThemeType>;
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns<TLengthStyledSystem>, ThemeType>;
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows<TLengthStyledSystem>, ThemeType>;
  gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns<TLengthStyledSystem>, ThemeType>;
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas, ThemeType>;
  gridArea?: ResponsiveValue<CSS.Property.GridArea, ThemeType>;
}

const config: SystemConfig = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  columnGap: {
    property: 'columnGap',
    scale: 'space',
    defaultScale: defaultTheme.space,
  },
  gridRow: {
    property: 'gridRow',
  },
  gridColumn: {
    property: 'gridColumn',
  },
  gridAutoFlow: {
    property: 'gridAutoFlow',
  },
  gridAutoRows: {
    property: 'gridAutoRows',
  },
  gridAutoColumns: {
    property: 'gridAutoColumns',
  },
  gridTemplateRows: {
    property: 'gridTemplateRows',
  },
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
  },
  gridTemplateAreas: {
    property: 'gridTemplateAreas',
  },
  gridArea: {
    property: 'gridArea',
  },
};

export const grid = system(config);

export interface ExtendedGridProps<ThemeType extends Theme = RequiredTheme> extends GridProps<ThemeType> {
  row?: GridProps['gridRow'];
  column?: GridProps['gridColumn'];
  autoFlow?: GridProps['gridAutoFlow'];
  autoRows?: GridProps['gridAutoRows'];
  autoColumns?: GridProps['gridAutoColumns'];
  templateRows?: GridProps['gridTemplateRows'];
  templateColumns?: GridProps['gridTemplateColumns'];
  templateAreas?: GridProps['gridTemplateAreas'];
  area?: GridProps['gridArea'];
}

const extendedConfig: SystemConfig = {
  row: {
    property: 'gridRow',
  },
  column: {
    property: 'gridColumn',
  },
  autoFlow: {
    property: 'gridAutoFlow',
  },
  autoRows: {
    property: 'gridAutoRows',
  },
  autoColumns: {
    property: 'gridAutoColumns',
  },
  templateRows: {
    property: 'gridTemplateRows',
  },
  templateColumns: {
    property: 'gridTemplateColumns',
  },
  templateAreas: {
    property: 'gridTemplateAreas',
  },
  area: {
    property: 'gridArea',
  },
};

export const extendedGrid = compose(grid, system(extendedConfig));
