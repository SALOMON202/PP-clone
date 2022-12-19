import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {port:5000},
	plugins: [sveltekit()]

};

export default config;



  //   let token = await asyncFunction();
  //   let fetchRes = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //     {
  //       headers: {
  //         "g-recaptcha-response-v2": await asyncFunction(),
  //       },
  //     }
  //   );
  //   let data = await fetchRes.json();
  //   console.log(data, token);
