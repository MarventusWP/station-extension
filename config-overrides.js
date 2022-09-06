module.exports = function override(config, env) {
  if(env === 'production'){
    config.optimization.splitChunks.maxSize = 6000000;
  }
  return config;
}
