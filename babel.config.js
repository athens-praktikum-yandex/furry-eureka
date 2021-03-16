module.exports = (api) => {
  // Cache configuration is a required option
  api.cache(false);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
