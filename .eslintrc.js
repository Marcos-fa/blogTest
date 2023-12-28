module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          tests: ['./tests/'],
          assets: './src/assets',
          components: './src/components',
          interfaces: './src/interfaces',
          navigations: './src/navigations',
          screens: './src/screens',
          stores: './src/stores',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
};
