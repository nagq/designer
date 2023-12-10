import commonjs from '@rollup/plugin-commonjs';
import NpmImport from 'less-plugin-npm-import';
import bundleSize from 'rollup-plugin-bundle-size';
import externalGlobals from 'rollup-plugin-external-globals';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
    tsconfigOverride: {
      compilerOptions: {
        module: 'ESNext',
        declaration: false,
      },
    },
  }),
  resolve(),
  postcss({
    extract: true,
    minimize: true,
    // extensions: ['.css', '.less', '.sass'],
    use: {
      less: {
        plugins: [new NpmImport({ prefix: '~' })],
        javascriptEnabled: true,
      },
      sass: {},
      stylus: {},
    },
  }),
  commonjs(),
  externalGlobals({
    antd: 'Antd',
    vue: 'Vue',
    react: 'React',
    moment: 'moment',
    'react-is': 'ReactIs',
    'react-dom': 'ReactDOM',
    '@ant-design/icons': 'icons',
    '@formily/reactive-react': 'Formily.ReactiveReact',
    '@formily/reactive-vue': 'Formily.ReactiveVue',
    '@formily/reactive': 'Formily.Reactive',
    '@formily/path': 'Formily.Path',
    '@formily/shared': 'Formily.Shared',
    '@formily/validator': 'Formily.Validator',
    '@formily/core': 'Formily.Core',
    '@formily/json-schema': 'Formily.JSONSchema',
    '@formily/react': 'Formily.React',
  }),
  bundleSize(),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'umd',
      file: `dist/designer.shared.umd.js`,
      name: 'Designer.Shared',
    },
    plugins,
  },
];
