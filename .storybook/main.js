module.exports = {
  "stories": [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    '@storybook/addon-links', '@storybook/addon-essentials'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    // Add the svg-react-loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-react-loader'
        }
      ]
    });
    // Resolve the extensions for SVG files
    config.resolve.extensions.push('.svg');
    return config;
  }
}


// module.exports = {
//   "stories": ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   "addons": ['@storybook/addon-links', '@storybook/addon-essentials'],
//   "webpackFinal": async (config) => {
//     // Add the svg-react-loader for SVG files
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: 'svg-react-loader'
//         }
//       ]
//     });
//     // Resolve the extensions for SVG files
//     config.resolve.extensions.push('.svg');
//     return config;
//   }
// };
