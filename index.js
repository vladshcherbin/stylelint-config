/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-plugin-defensive-css/configs/recommended',
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
    "defensive-css/require-pure-selectors": false,
    'plugin/no-low-performance-animation-properties': [true, {
      ignore: 'paint-properties'
    }]
  }
}
