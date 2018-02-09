import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default [{
  input: __dirname + '/test.js',
  output: {
    file: __dirname + '/output.js',
    format: 'cjs',
    name: 'netfixpros.server',
    sourcemap: true,
  },
  plugins: [
    babel({
      plugins: [ 'external-helpers'],
    }),
    cjs({
      include: [
        './hello.js',
      ],
    }),
  ]
}]
