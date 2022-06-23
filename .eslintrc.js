const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
})

module.exports = {
  extends: [
    ...extendConfigs,
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/frontend',
  ],
  overrides,
}
