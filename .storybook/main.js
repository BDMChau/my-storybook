const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // "staticDirs": [{ from: '../src/assets/fonts', to: '../src/assets' }],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        baseUrl: path.resolve(__dirname, '../src'),
      })
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
    };
    return config;
  }
}