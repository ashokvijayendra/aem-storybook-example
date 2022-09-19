module.exports = {
  stories: [
    `../stories/*.stories.*`,
    `../components/**/*.stories.*`,
  ],
  addons: [
    '@storybook/preset-scss',
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-events",
    "@storybook/addon-jest",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-options",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
    '@storybook/addon-docs',
  ]
};

// need to specify the additional jcrRoots from dependencies
AEMRegisterJcrRoot(require('aem-sb-js-core-components/config').jcrRoots);
