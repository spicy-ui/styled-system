# styled-system

🌶️ Responsive, theme-based style props for building design systems with React

[![npm](https://img.shields.io/npm/v/@spicy-ui/styled-system.svg)](https://www.npmjs.com/package/@spicy-ui/styled-system)
[![Dependencies](https://david-dm.org/spicy-ui/styled-system/status.svg)](https://david-dm.org/spicy-ui/styled-system)
[![Dev Dependencies](https://david-dm.org/spicy-ui/styled-system/dev-status.svg)](https://david-dm.org/spicy-ui/styled-system?type=dev)

## ⚠️ Caution

While it is _almost_ a direct port of [styled-system](https://github.com/styled-system/styled-system) to TypeScript it does have a few minor changes.

- `bg` is now for the `background` css property (but it still uses the `color` scale) and `bgColor` has been added
- there are a bunch of new aliased props (e.g. `h` for `height`, `maxW` for `max-width`)
- there is an `extendedFlexbox` and `extendedGrid` parser which contains shorthands for `flexbox` and `grid` parsers (good for Flex and Grid components)
- the `css` function now supports a collection of pseudo selectors (e.g. `_hover` for `&:hover`)

A major part that is incomplete in this package is the types (both exported and internal and particulary around the `css` export) - if you're able and willing to have a crack at them please do, it would be super appreciated to get some help on this.

## Issues and Bugs

If you happen to find any, please report them [here](https://github.com/spicy-ui/core/issues) so they can be squashed.

## License

MIT, see the [LICENSE](./LICENSE) file.
