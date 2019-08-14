
export default function (api) {
  // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
  const name = 'runtime';

  api.chainWebpackConfig((config) => {
    config.optimization
      .runtimeChunk({ name });
  });

  api.modifyHTMLChunks((chunks = [], ...rest) => {
    return [name, ...chunks];
  })
}
