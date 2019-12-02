var path = require('path');
var fs = require('fs');
const {
  override,
  fixBabelImports,
  addBundleVisualizer,
  babelInclude,
} = require('customize-cra');

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

      /*Make sure Babel compiles the stuff in the components folder*/
      babelInclude([
        path.resolve('src'), // don't forget this
        fs.realpathSync('../../node_modules/@hotel/components'),
        fs.realpathSync('../../node_modules/@hotel/assets'),
        fs.realpathSync('../../node_modules/@iso/lib'),
        fs.realpathSync('../../node_modules/@iso/ui'),
      ]),
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      })
    )(config, env)
  );
};
