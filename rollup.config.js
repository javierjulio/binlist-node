// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'Binlist',
    },
    // plugins: [
    //   commonjs(),
    //   resolve()
    // ],
    // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
    external: ['cross-fetch']
  }
];
