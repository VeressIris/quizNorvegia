import { insertIntoCollection } from '../db/collections';
import { capitalizeFirstLetter } from '../utils';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const username = capitalizeFirstLetter(data.nume) + ' ' + capitalizeFirstLetter(data.prenume);

		const user = {
			name: username,
			score: 0
		};

		await insertIntoCollection('users', user);

		redirect(302, '/ready');

		return { message: 'User added successfully!' };
	}
};
