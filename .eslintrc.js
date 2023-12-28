module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          tests: ['./tests/'],
          api: './src/api',
          components: './src/components',
          container: './src/container',
          interfaces: './src/interfaces',
          navigations: './src/navigations',
          screens: './src/screens',
          stores: './src/stores',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
};
