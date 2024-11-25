import { insertIntoCollection } from '../db/collections';
import { capitalizeFirstLetter } from '../utils';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const user = {
			name: capitalizeFirstLetter(data.nume) + ' ' + capitalizeFirstLetter(data.prenume),
			score: 0
		};

		await insertIntoCollection('users', user);

		redirect(302, '/ready');

		return { message: 'User added successfully!' };
	}
};
