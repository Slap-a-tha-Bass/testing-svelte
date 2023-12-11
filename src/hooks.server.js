import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';

async function logger({ event, resolve }) {
	const start_time = Date.now();
	const response = await resolve(event);

	console.log(`${event.request.method} ${event.url.pathname}`);
	console.log(`${Date.now() - start_time}ms`);

	return response;
}

function authorize({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

export const handle = sequence(logger, authorize);

// Intercepting fetch requests
// export function handleFetch({ request, fetch }) {
// 	return fetch(request);
// }

// Intercepting errors
// export function handleError({ error, event}) {
// 	return {
// 		message: error.message,
// 		code: error.code,
// 	}
// }
