import { Container, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

export const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
  colors: {
    'deep-purple': [
      '#f6ebff',
      '#e9d1fb',
      '#d39ef9',
      '#bc67f8',
      '#a83df8',
      '#9c24f8',
      '#9619f8',
      '#820fde',
      '#7409c5',
      '#6400ad',
    ],
    gold: [
      '#fffce1',
      '#fff8cc',
      '#ffef9b',
      '#ffe764',
      '#ffdf38',
      '#ffdb1c',
      '#ffd809',
      '#e3bf00',
      '#c9aa00',
      '#ae9200',
    ],
    charcoal: [
      '#f3f5f7',
      '#e7e7e7',
      '#cbced0',
      '#acb3b8',
      '#919ca4',
      '#818e98',
      '#778893',
      '#647580',
      '#576874',
      '#465a67',
    ],
  },
  fontFamily: 'Open Sans, sans-serif',
  headings: {
    fontFamily: 'Satisfy, cursive',
  },
  primaryColor: 'deep-purple',
  primaryShade: 9,
});
