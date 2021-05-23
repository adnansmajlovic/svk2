/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';
import { resolve } from 'path';

const config = {
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
      // ibm carbon needs this
      optimizeDeps: {
        include: ['clipboard-copy'],
      },
      // ssr: {
      //   // noExternal: Object.keys(pkg.dependencies || {}),
      //   noExternal: [`carbon-components-svelte`, 'carbon-icons-svelte'],
      // },
      build: {
        rollupOptions: {
          output: {
            intro: 'if(exports === undefined){var exports ={}; var self = {}}',
          },
        },
      },
      resolve: {
        alias: {
          './runtimeConfig': './runtimeConfig.browser',
        },
      },
    },
	}
};

export default config;
