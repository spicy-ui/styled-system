import isPropValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';
import { compose } from '../core';
import { background } from '../parsers/background';
import { border } from '../parsers/border';
import { color } from '../parsers/color';
import { extendedFlexbox } from '../parsers/flexbox';
import { extendedGrid } from '../parsers/grid';
import { layout } from '../parsers/layout';
import { other } from '../parsers/other';
import { position } from '../parsers/position';
import { shadow } from '../parsers/shadow';
import { space } from '../parsers/space';
import { typography } from '../parsers/typography';
import { pseudoSelectors } from '../pseudo';

export function createShouldForwardProp(props: string[]) {
  const regex = new RegExp(`^(${props.join('|')})$`);
  return memoize((prop) => isPropValid(prop) && !regex.test(prop));
}

const all = compose(
  background,
  border,
  color,
  extendedFlexbox,
  extendedGrid,
  layout,
  other,
  position,
  shadow,
  space,
  typography,
);

/**
 * All `@spicy-ui/styled-system` props.
 */
export const allProps = [...all.propNames, ...Object.keys(pseudoSelectors)];

/**
 * Creates a `shouldFowardProp` with all `@spicy-ui/styled-system` props and
 * allows you to add additional props to the `sfp` fn.
 */
export function sfp(props: string[]) {
  return createShouldForwardProp([...allProps, ...props]);
}

/**
 * `shouldForwardProp` with all `@spicy-ui/styled-system` props.
 */
export const shouldForwardProp = createShouldForwardProp(allProps);
