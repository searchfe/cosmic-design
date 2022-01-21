import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import mcss from "@modular-css/rollup";
import svelteConfig from './svelte.config.js';
import {typescript} from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'index.ts',

	output: {
		sourcemap: true,
		format: 'es',
		file: 'dist/index.js',
		assetFileNames: 'index.css',
	},
	plugins: [
		svelte(svelteConfig),
		mcss({}),
		resolve({
			browser: true,
			// dedupe: ['svelte']
		}),
        typescript({
            // tsconfig: production ? './tsconfig.json' : './tsconfig.json',
            // sourceMap: !production,
            // inlineSources: !production,
        }),
		commonjs(),
		!production && serve(),
		// !production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};