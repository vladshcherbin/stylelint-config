/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
    'stylelint-config-recess-order'
  ],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-plugin-defensive-css'
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': [true, {
      ignore: 'paint-properties'
    }],
    'plugin/use-defensive-css': [true, {
      'flex-wrapping': true,
      'scroll-chaining': true,
      'vendor-prefix-grouping': true
    }]
  }
}
