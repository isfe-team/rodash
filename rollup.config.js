/*!
 * rollup configs
 * bqliu
 */

const outputFormats = [ 'umd', 'esm', 'cjs' ]
const output = outputFormats.map((format) => ({
  file: `dist/rodash.${format}.js`,
  format,
  name: 'Rodash',
  sourcemap: true
}))

export default {
	input: 'index.js',
  output
}
