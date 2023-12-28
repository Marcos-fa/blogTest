module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
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
    ],
  ],
};
