const path = require('path');
const capitalize = require('./capitalize');

const getGeneratorOptions = (type, srcPath, templatesPath) => ({
  prompts: [{
    type: 'input',
    name: 'name',
    message: `${capitalize(type)}`,
  }],
  actions: [
    {
      type: 'add',
      path: `${srcPath}/${type}s/{{ name }}/{{ name }}.css`,
      templateFile: `${templatesPath}/styles.hbs`,
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${srcPath}/${type}s/{{ name }}/{{ name }}.stories.tsx`,
      templateFile: `${templatesPath}/stories.hbs`,
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${srcPath}/${type}s/{{ name }}/{{ name }}.tsx`,
      templateFile: `${templatesPath}/component.hbs`,
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${srcPath}/${type}s/{{ name }}/types.ts`,
      templateFile: `${templatesPath}/types.hbs`,
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${srcPath}/${type}s/{{ name }}/index.ts`,
      templateFile: `${templatesPath}/index.hbs`,
      abortOnFail: true,
    },
  ],
});

module.exports = getGeneratorOptions;