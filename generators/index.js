const getGeneratorOptions = require("./utils/getGeneratorOptions");

module.exports = plop => {
  const componentOptions = getGeneratorOptions('component', '../src', './templates');
  const featuresOptions = getGeneratorOptions('feature', '../src', './templates');

  plop.setGenerator('component', componentOptions);
  plop.setGenerator('feature', featuresOptions);
};
