import { defineConfig } from 'vite';
import handlebarsPrecompile from './plugins/handlebars-precompile.js';
import postcssNested from 'postcss-nested';

export default defineConfig(
  {
    plugins: [
      handlebarsPrecompile()
    ],
    css: {
      postcss: {
        plugins: [postcssNested],
      }
    },
  }
);