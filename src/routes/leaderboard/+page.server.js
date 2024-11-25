import { getEntireCollection } from '../../db/collections';

export async function load() {
	const users = await getEntireCollection('users');
	return {
		data: {
			users
		}
	};
}
