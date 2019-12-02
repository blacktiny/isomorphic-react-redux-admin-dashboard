const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfig = {
  env: {
    GOOGLE_API_KEY: 'AIzaSyCsnCC4AOF2XK42fm7SFcjYkUiGtUqs5T8',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBF0FPDHlurGkDKua7PfZjpD2fr2rQsRw0&libraries=geometry,drawing,places',
    SERVER_API: `http://localhost:3001`,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    //   // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    return config;
  },
  // webpack: config => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     // 'common/dist': 'common/src',
  //   };
  //   return config;
  // },
};

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          '@iso/lib',
          '@iso/ui',
          '@hotel/components',
          '@hotel/assets',
        ],
      },
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
  ],
  nextConfig
);
