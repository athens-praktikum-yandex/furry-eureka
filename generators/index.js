module.exports = plop => {
  plop.setGenerator('component', {
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name',
    }],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{ name }}/{{ name }}.css',
        templateFile: 'templates/styles.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/components/{{ name }}/{{ name }}.stories.tsx`,
        templateFile: 'templates/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ name }}/{{ name }}.tsx',
        templateFile: 'templates/component.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ name }}/types.ts',
        templateFile: 'templates/types.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ name }}/index.ts',
        templateFile: 'templates/index.hbs',
        abortOnFail: true,
      },
    ],
  });
};
