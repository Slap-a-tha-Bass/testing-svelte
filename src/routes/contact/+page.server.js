import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {
		if (!locals?.user?.roles?.includes('admin')) {
			return fail(401, { message: 'Unauthorized' });
		}
		console.log('request', request);
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		console.log(name, email, message);
		return {
			message: 'Email sent'
		};
	}
};
