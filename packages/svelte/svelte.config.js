import preprocess from 'svelte-preprocess';
// import { createRequire } from 'module';
// import { env } from 'process';
// const require = createRequire(import.meta.url);
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({})
	]
};

export default config;
