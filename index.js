/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    '@stylistic/stylelint-config',
    'stylelint-config-recess-order'
  ],
  plugins: [
    'stylelint-gamut',
    'stylelint-high-performance-animation',
    'stylelint-plugin-defensive-css'
  ],
  rules: {
    'gamut/color-no-out-gamut-range': true,
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
