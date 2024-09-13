/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
    'stylelint-config-recess-order'
  ],
  plugins: [
    'stylelint-high-performance-animation'
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': true,
    'plugin/use-defensive-css': [true, {
      'flex-wrapping': true,
      'scroll-chaining': true,
      'vendor-prefix-grouping': true
    }]
  }
}
