import { isObject, isFunction } from './utils';

export const pseudoSelectors = {
  _hover: '&:hover, &[data-hover]',
  _active: '&:active, &[data-active]',
  _focus: '&:focus, &[data-focus]',
  _highlighted: '&[data-highlighted]',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
  _before: '&::before',
  _after: '&::after',
  _empty: '&::empty',
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  _checked: '&[aria-checked=true], &[data-checked]',
  _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
  _pressed: '&[aria-pressed=true], &[data-pressed]',
  _invalid: '&[aria-invalid=true], &[data-invalid]',
  _valid: '&[data-valid], &[data-state=valid]',
  _loading: '&[data-loading], &[aria-busy=true]',
  _selected: '&[aria-selected=true], &[data-selected]',
  _hidden: '&[hidden], &[data-hidden]',
  _autofill: '&:-webkit-autofill',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _visited: '&:visited',
  _activeLink: '&[aria-current=page]',
  _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
  _groupHover: '&[role=group]:hover &, &[role=group][data-hover] &',
  _groupFocus: '&[role=group]:focus &, &[role=group][data-focus] &',
  _groupActive: '&[role=group]:active &, &[role=group][data-active] &',
  _groupDisabled: '&[role=group]:disabled &, [role=group][data-disabled] &',
  _groupInvalid: '&[role=group][data-invalid] &',
  _groupChecked: '&[role=group][data-checked] &',
  _placeholder: '&::placeholder',
  _fullScreen: '&:fullscreen',
  _selection: '&::selection',
};

export type PseudoProps<Props = any> = Partial<Record<keyof typeof pseudoSelectors, Props>>;

export function pseudo(props: any) {
  const result: any = {};

  Object.keys(props).forEach((prop) => {
    const name = prop in pseudoSelectors ? pseudoSelectors[prop as keyof typeof pseudoSelectors] : prop;
    const value = props[prop];

    if (isObject(value) && !isFunction(value)) {
      result[name] = pseudo(value);
    } else {
      result[name] = value;
    }
  });

  return result;
}
