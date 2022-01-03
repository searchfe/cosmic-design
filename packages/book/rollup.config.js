import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';

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

export default [{
	input: 'index.ts',
	external: ['@cosmic-design/blueprint', '@cosmic-design/svelte', 'tslib'],
	output: {
		sourcemap: true,
		format: 'es',
		dir: 'dist/'
	},
	plugins: [
		resolve({
			browser: true,
			// dedupe: ['svelte']
		}),
        typescript({
            tsconfig: production ? './tsconfig.json' : './tsconfig.json',
            sourceMap: !production,
            inlineSources: !production,
        }),
		commonjs(),
		!production && serve(),
		!production && livereload('dist'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
},{
	input: ['externals/**'],
	output: {
		sourcemap: true,
		format: 'es',
		dir: 'dist/'
	},
	plugins: [
		multiInput({ relative: './' }),
		resolve({
			browser: true,
		}),
		commonjs()
	]
}];