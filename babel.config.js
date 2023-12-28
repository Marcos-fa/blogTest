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
    ],
  ],
};
