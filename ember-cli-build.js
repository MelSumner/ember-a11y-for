'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/templates/*.hbs',
      './app/templates/**/*.hbs',
      './app/components/**/*.hbs',
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('./app/styles/tailwind.config.js'),
          require('@tailwindcss/typography'),
          ...(isProduction ? [purgeCSS] : []),
        ],
      },
    },
    'ember-prism': {
      theme: 'none',
      components: ['markup', 'bash', 'markup-templating', 'handlebars'], //needs to be an array, or undefined.
      plugins: ['line-numbers', 'toolbar', 'copy-to-clipboard', 'autoloader'],
    },
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('app/styles/prism-dracula.css');

  return app.toTree();
};
